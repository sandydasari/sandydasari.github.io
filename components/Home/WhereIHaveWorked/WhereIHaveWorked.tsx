import React, { useState } from "react";
import { getTasksTextWithHighlightedKeyword } from "./Descriptions/taskAndType";

const workExperiences = [
  {
    title: "AI Research Engineer",
    company: "Leoforce",
    date: "Oct 2025 — Present",
    link: null,
    tasks: [
      { text: "Shipped hybrid search RAG agentic system end-to-end from ideation to production deployment at billion-record scale.", keywords: ["hybrid search", "RAG", "agentic system", "billion-record scale"] },
      { text: "Architected hybrid search engine combining BM25 lexical matching with dense vector retrieval (HNSW algorithm) across 1.6+ billion candidate records, implementing reciprocal rank fusion (RRF) for result merging and achieving 40% improvement in candidate matching precision.", keywords: ["BM25", "HNSW algorithm", "1.6+ billion", "RRF", "40% improvement"] },
      { text: "Designed comprehensive RAG evaluation pipeline using DeepEval with metrics including faithfulness, answer relevancy, contextual precision/recall, and RAGAS scores.", keywords: ["RAG evaluation", "DeepEval", "RAGAS scores"] },
      { text: "Developed NLP preprocessing pipeline for resume parsing including NER, skill extraction, and text normalization. Implemented semantic chunking strategies and experimented with dimension reduction techniques for embedding optimization at scale.", keywords: ["NLP", "NER", "semantic chunking", "embedding optimization"] },
      { text: "Built production multi-agent systems using LangGraph state machines with LiteLLM for unified LLM access, implementing tool-calling agents, supervisor patterns, and conditional routing. Integrated Langfuse for prompt tracking and OpenTelemetry for distributed tracing across microservices.", keywords: ["LangGraph", "LiteLLM", "multi-agent systems", "OpenTelemetry"] },
      { text: "Led OpenSearch 1.3 → 3.0 migration, implementing k-NN vector search with FAISS and Lucene engines, optimizing index mappings, query DSL performance, and infrastructure costs.", keywords: ["OpenSearch", "k-NN vector search", "FAISS", "async ETL pipelines"] },
      { text: "Developed FastAPI microservices with async operations, implementing connection pooling, request batching, and response streaming. Built comprehensive observability stack handling 10k+ QPS.", keywords: ["FastAPI", "async operations", "10k+ QPS", "observability stack"] },
    ],
  },
  {
    title: "AI Engineer",
    company: "ANZ Operations and Technology",
    date: "Jun 2023 — Sep 2025",
    link: "https://www.anz.com.au/",
    tasks: [
      { text: "Architected and deployed KnowHow Assist RAG Application — enterprise-scale knowledge management system processing 60k+ documents using Google Cloud Vertex AI.", keywords: ["RAG Application", "Google Cloud Vertex AI"] },
      { text: "Built complete ML pipeline with document ingestion, multi-modal embeddings, and vector search achieving 200ms query response time.", keywords: ["multi-modal embeddings", "vector search", "200ms query response"] },
      { text: "Developed full-stack RAG solution with React.js/TypeScript frontend and FastAPI backend, implementing real-time streaming chat interface.", keywords: ["React.js/TypeScript", "FastAPI", "real-time streaming", "chat interface"] },
      { text: "Applied deep learning techniques for document analysis, achieving 95% accuracy in automated data extraction.", keywords: ["document analysis", "95% accuracy", "automated data extraction"] },
      { text: "Spearheaded automation solution that reduced business workload by 10x and established CI/CD pipelines with Jenkins and GitLab CI.", keywords: ["10x reduction", "CI/CD pipelines", "Jenkins", "GitLab CI"] },
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "BAHMNI Open Source EMR",
    date: "Jun 2022 — Nov 2022",
    link: null,
    tasks: [
      { text: "Enhanced layoutLM deep learning model with FUNSD dataset and achieved 80% accuracy in document understanding.", keywords: ["layoutLM", "FUNSD dataset", "80% accuracy"] },
      { text: "Developed tool for key entity recognition from documents using SimpleDLM as pre-trained model, improving F1 score by 14.4%.", keywords: ["SimpleDLM", "F1 score", "14.4%"] },
      { text: "Designed and maintained data pipelines supporting data transformation processes, increasing efficiency by 25%.", keywords: ["25% efficiency"] },
      { text: "Implemented data quality checks and monitoring systems resulting in 15% reduction in data errors.", keywords: ["15% reduction"] },
    ],
  },
  {
    title: "ML & Big Data Analytics Intern",
    company: "ThoughtWorks",
    date: "Dec 2021 — May 2022",
    link: null,
    tasks: [
      { text: "Extracted medical data from documents using OCR with docTR deep learning model for healthcare data processing.", keywords: ["medical data", "OCR", "docTR"] },
      { text: "Developed Label Studio API with docTR model to extract text for multiple data reports and medical analysis.", keywords: ["docTR", "medical analysis"] },
      { text: "Implemented semi-supervised learning showing 3-5% accuracy improvements compared to supervised learning with small labeled data.", keywords: ["semi-supervised learning", "3-5% accuracy"] },
      { text: "Recorded observations and indicators against patient medical history using spaCy and medCAT libraries.", keywords: ["spaCy"] },
    ],
  },
];

export default function WhereIHaveWorked() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = workExperiences[activeIndex];

  return (
    <div id="WhereIhaveWorkedSection" data-aos="fade-up" className="flex flex-col items-center justify-center py-28 bg-AAprimary">
      {/* Section Header */}
      <section className="flex flex-row items-center mb-16 w-full max-w-4xl px-4 md:px-0">
        <span className="text-AAsecondary font-mono text-sm mr-3">03.</span>
        <span className="text-AAtext font-semibold tracking-wide text-xl md:text-2xl mr-6">Where I&apos;ve Worked</span>
        <div className="flex-1 h-px bg-AAborder max-w-xs"></div>
      </section>

      {/* Tab Layout */}
      <section className="w-full max-w-4xl px-4 md:px-0 flex flex-col md:flex-row gap-8">
        {/* Company Tabs */}
        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-1 md:w-44 flex-shrink-0">
          {workExperiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`text-left px-4 py-3 text-sm font-mono whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 ${
                activeIndex === i
                  ? "border-AAsecondary text-AAsecondary bg-AAsurface"
                  : "border-transparent text-AAmuted hover:text-AAtext hover:bg-AAsurface/50"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="flex-1 min-h-[320px]">
          <div className="mb-4">
            <h3 className="text-AAtext font-semibold text-lg">
              {active.title}{" "}
              {active.link ? (
                <a href={active.link} target="_blank" rel="noreferrer" className="text-AAsecondary hover:underline">
                  @ {active.company}
                </a>
              ) : (
                <span className="text-AAsecondary">@ {active.company}</span>
              )}
            </h3>
            <p className="text-AAmuted font-mono text-xs mt-1 tracking-wide">{active.date}</p>
          </div>

          <ul className="space-y-3 mt-6">
            {active.tasks.map((task, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="text-AAsecondary mt-1 flex-shrink-0">▸</span>
                <span
                  className="text-AAmuted"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(task.text, task.keywords),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
