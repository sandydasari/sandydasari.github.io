/**
 * LLM Integration for Portfolio AI Chat
 * Uses Groq API for fast, free LLM inference
 */

import { SearchResult } from './vectorSearch';

export interface LLMResponse {
  answer: string;
  sources: SearchResult[];
}

/**
 * Generate AI response using context from vector search
 * @param query - User's question
 * @param context - Retrieved context from vector search
 * @returns AI-generated response with sources
 */
export async function generateResponse(
  query: string,
  context: SearchResult[]
): Promise<LLMResponse> {
  try {
    // Format context for LLM
    const contextText = context
      .map((item, idx) => {
        let header = `[${idx + 1}] ${item.section}`;
        if (item.company) header += ` - ${item.company}`;
        if (item.role) header += ` (${item.role})`;
        if (item.date) header += ` ${item.date}`;
        return `${header}\n${item.text}`;
      })
      .join('\n\n');

    // System prompt
    const systemPrompt = `You are an AI assistant for Dasari Sandhya Rani's portfolio website. Your role is to help visitors learn about Sandy's experience, skills, and projects.

Guidelines:
- Answer questions based ONLY on the provided context
- Be concise and professional
- Highlight specific achievements and technologies mentioned
- If asked about something not in the context, politely say you don't have that information
- Use first person when referring to Sandy (e.g., "I worked on..." instead of "Sandy worked on...")
- Keep responses under 150 words unless asked for details`;

    const userPrompt = `Context from Sandy's portfolio:\n\n${contextText}\n\nQuestion: ${query}\n\nProvide a helpful, accurate response based on the context above.`;

    // Get API key from environment variable
    const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;

    if (!apiKey) {
      // Fallback response if API key is not configured
      console.warn('Groq API key not found, using fallback response');
      return {
        answer: generateFallbackResponse(query, context),
        sources: context,
      };
    }

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Fast, free model
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const answer = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return {
      answer,
      sources: context,
    };
  } catch (error) {
    console.error('Error generating LLM response:', error);

    // Return fallback response on error
    return {
      answer: generateFallbackResponse(query, context),
      sources: context,
    };
  }
}

/**
 * Generate a simple fallback response when LLM is unavailable
 */
function generateFallbackResponse(query: string, context: SearchResult[]): string {
  if (context.length === 0) {
    return "I couldn't find specific information about that. Please try rephrasing your question or ask about my experience, projects, or skills.";
  }

  const topResult = context[0];

  // Simple heuristics for common questions
  const queryLower = query.toLowerCase();

  if (queryLower.includes('experience') || queryLower.includes('work')) {
    return `Based on my portfolio, ${topResult.text.substring(0, 200)}... You can learn more in the Experience section.`;
  }

  if (queryLower.includes('project') || queryLower.includes('built')) {
    return `I've worked on several projects. ${topResult.text.substring(0, 200)}... Check out the Projects section for more details.`;
  }

  if (queryLower.includes('skill') || queryLower.includes('technology') || queryLower.includes('tech stack')) {
    return `I specialize in AI engineering with expertise in: ${topResult.text.substring(0, 200)}...`;
  }

  if (queryLower.includes('contact') || queryLower.includes('email') || queryLower.includes('reach')) {
    return "You can reach me at sandydasari977@gmail.com. I'd love to discuss potential opportunities!";
  }

  // Generic response
  return `Here's what I found: ${topResult.text.substring(0, 250)}... ${
    context.length > 1 ? 'I have more relevant experience in my portfolio.' : ''
  }`;
}

/**
 * Stream response from LLM (for future implementation)
 */
export async function streamResponse(
  query: string,
  context: SearchResult[],
  onChunk: (chunk: string) => void
): Promise<void> {
  // TODO: Implement streaming for better UX
  const response = await generateResponse(query, context);
  onChunk(response.answer);
}
