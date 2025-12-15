/**
 * Vector Search Utility for Portfolio AI Chat
 * Uses Transformers.js for client-side embeddings and cosine similarity for search
 */

// Cache the embedding model
let embedder: any = null;
let transformersModule: any = null;
let isLoading = false;
let loadError: Error | null = null;

/**
 * Initialize or get the cached embedding model
 */
async function getEmbedder() {
  if (typeof window === 'undefined') {
    throw new Error('Embeddings can only be generated on the client-side');
  }

  // Return cached embedder if available
  if (embedder) {
    return embedder;
  }

  // If there was a previous load error, throw it
  if (loadError) {
    throw loadError;
  }

  // If already loading, wait for it
  if (isLoading) {
    return new Promise((resolve, reject) => {
      const checkInterval = setInterval(() => {
        if (embedder) {
          clearInterval(checkInterval);
          resolve(embedder);
        } else if (loadError) {
          clearInterval(checkInterval);
          reject(loadError);
        }
      }, 100);
    });
  }

  isLoading = true;
  console.log('Loading Transformers.js and embedding model...');

  try {
    // Dynamic import on client-side only - with retry logic
    if (!transformersModule) {
      try {
        // Use dynamic import to ensure it only loads on client
        const module = await import('@xenova/transformers');
        transformersModule = module;

        // Configure Transformers.js environment
        // Use optional chaining and nullish coalescing for safety
        const env = module?.env;
        if (env && typeof env === 'object') {
          try {
            env.allowLocalModels = false;
            env.allowRemoteModels = true;
          } catch (e) {
            console.warn('Could not configure Transformers.js env:', e);
          }
        }
      } catch (importError) {
        console.error('Failed to import @xenova/transformers:', importError);
        loadError = new Error('Failed to load Transformers.js module');
        isLoading = false;
        throw loadError;
      }
    }

    // Create the pipeline
    try {
      const pipelineFunc = transformersModule?.pipeline || transformersModule?.default?.pipeline;
      if (typeof pipelineFunc !== 'function') {
        throw new Error('Pipeline function not found in Transformers.js module');
      }

      embedder = await pipelineFunc(
        'feature-extraction',
        'Xenova/all-MiniLM-L6-v2'
      );

      console.log('Embedding model loaded successfully');
      isLoading = false;
      return embedder;
    } catch (pipelineError) {
      console.error('Failed to create pipeline:', pipelineError);
      loadError = new Error('Failed to initialize embedding model');
      isLoading = false;
      throw loadError;
    }
  } catch (error) {
    console.error('Error loading Transformers.js:', error);
    loadError = error instanceof Error ? error : new Error('Failed to load embedding model');
    isLoading = false;
    throw new Error('Failed to load embedding model. Please refresh the page and try again.');
  }
}

/**
 * Calculate cosine similarity between two vectors
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length');
  }

  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));

  return dotProduct / (magA * magB);
}

/**
 * Normalize a vector to have mean 0 and magnitude 1
 */
function normalizeVector(vector: Float32Array): number[] {
  const arr = Array.from(vector);
  const mean = arr.reduce((sum, val) => sum + val, 0) / arr.length;
  const centered = arr.map(val => val - mean);
  const magnitude = Math.sqrt(centered.reduce((sum, val) => sum + val * val, 0));
  return centered.map(val => val / magnitude);
}

export interface SearchResult {
  id: string;
  section: string;
  text: string;
  score: number;
  company?: string;
  role?: string;
  date?: string;
}

/**
 * Search portfolio content using vector similarity
 * @param query - User's search query
 * @param topK - Number of top results to return (default: 3)
 * @returns Array of search results sorted by relevance
 */
export async function searchContent(query: string, topK: number = 3): Promise<SearchResult[]> {
  try {
    // Load embeddings data
    const response = await fetch('/embeddings.json');
    if (!response.ok) {
      throw new Error('Failed to load embeddings data');
    }
    const embeddings = await response.json();

    // Generate query embedding
    const model = await getEmbedder();
    const queryEmbeddingOutput = await model(query, { pooling: 'mean', normalize: true });

    // Extract and normalize the embedding
    const queryVector = normalizeVector(queryEmbeddingOutput.data);

    // Calculate similarity scores for all content chunks
    const results: SearchResult[] = embeddings.map((item: any) => ({
      id: item.id,
      section: item.section,
      text: item.text,
      score: cosineSimilarity(queryVector, item.embedding),
      company: item.company,
      role: item.role,
      date: item.date,
    }));

    // Sort by score (highest first) and return top K
    const topResults = results
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    console.log('Search results:', topResults.map(r => ({ id: r.id, score: r.score })));

    return topResults;
  } catch (error) {
    console.error('Error in searchContent:', error);
    throw error;
  }
}

/**
 * Search with keyword fallback
 * If vector search returns low-confidence results, fall back to keyword search
 */
export async function searchWithFallback(
  query: string,
  topK: number = 3,
  minScore: number = 0.3
): Promise<SearchResult[]> {
  const vectorResults = await searchContent(query, topK);

  // If top result has good confidence, return vector results
  if (vectorResults.length > 0 && vectorResults[0].score >= minScore) {
    return vectorResults;
  }

  // Otherwise, enhance with keyword matching
  console.log('Low confidence vector results, enhancing with keywords');

  const response = await fetch('/embeddings.json');
  const embeddings = await response.json();

  const keywords = query.toLowerCase().split(' ').filter(w => w.length > 2);

  const keywordResults = embeddings.map((item: any) => {
    const textLower = item.text.toLowerCase();
    const matchCount = keywords.filter(kw => textLower.includes(kw)).length;
    const keywordScore = matchCount / keywords.length;

    // Find matching vector result
    const vectorResult = vectorResults.find(r => r.id === item.id);
    const vectorScore = vectorResult?.score || 0;

    // Combine scores (70% vector, 30% keyword)
    const combinedScore = vectorScore * 0.7 + keywordScore * 0.3;

    return {
      id: item.id,
      section: item.section,
      text: item.text,
      score: combinedScore,
      company: item.company,
      role: item.role,
      date: item.date,
    };
  });

  return keywordResults
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
