import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./Descriptions/taskAndType";
import { link } from "fs";

export default function WhereIHaveWorked() {
  const workExperiences = [
    {
      title: "AI Research Engineer",
      company: "Leoforce",
      location: "@AI Research Engineer",
      date: "Oct 2025 - Present",
      website: null,
      tasks: [
        {
          text: "Shipped hybrid search RAG agentic system end-to-end from ideation to production deployment at billion-record scale.",
          keywords: ["hybrid search", "RAG", "agentic system", "billion-record scale"]
        },
        {
          text: "Architected hybrid search engine combining BM25 lexical matching with dense vector retrieval (HNSW algorithm) across 1.6+ billion candidate records, implementing reciprocal rank fusion (RRF) for result merging and achieving 40% improvement in candidate matching precision.",
          keywords: ["BM25", "HNSW algorithm", "1.6+ billion", "RRF", "40% improvement"]
        },
        {
          text: "Designed comprehensive RAG evaluation pipeline using DeepEval with metrics including faithfulness, answer relevancy, contextual precision/recall, and RAGAS scores.",
          keywords: ["RAG evaluation", "DeepEval", "RAGAS scores"]
        },
        {
          text: "Developed NLP preprocessing pipeline for resume parsing including named entity recognition (NER), skill extraction, and text normalization. Implemented semantic chunking strategies and experimented with dimension reduction techniques for embedding optimization at scale.",
          keywords: ["NLP", "NER", "semantic chunking", "embedding optimization"]
        },
        {
          text: "Built production multi-agent systems using LangGraph state machines with LiteLLM for unified LLM access, implementing tool-calling agents, supervisor patterns, and conditional routing. Integrated Langfuse for prompt tracking and OpenTelemetry for distributed tracing across microservices.",
          keywords: ["LangGraph", "LiteLLM", "multi-agent systems", "OpenTelemetry"]
        },
        {
          text: "Led OpenSearch 1.3 → 3.0 migration, implementing k-NN vector search with FAISS and Lucene engines, optimizing index mappings, query DSL performance, and infrastructure costs. Engineered async ETL pipelines for embedding generation using batch processing and parallel workers.",
          keywords: ["OpenSearch", "k-NN vector search", "FAISS", "async ETL pipelines"]
        },
        {
          text: "Developed FastAPI microservices with async operations, implementing connection pooling, request batching, and response streaming. Built comprehensive observability stack with custom metrics, alerting, and performance profiling for ML inference endpoints handling 10k+ QPS.",
          keywords: ["FastAPI", "async operations", "10k+ QPS", "observability stack"]
        }
      ]
    },
    {
      title: "AI Engineer",
      company: "ANZ Operations and Technology",
      location: "@AI Engineer",
      date: "Jun 2023 - Sept 2025",
      link: "https://www.anz.com.au/",
      tasks: [
        {
          text: "Architected and deployed KnowHow Assist RAG Application - Enterprise-scale knowledge management system processing 60k+ documents using Google Cloud Vertex AI.",
          keywords: [, "RAG Application", "Google Cloud Vertex AI"]
        },
        {
          text: "Built complete ML pipeline with document ingestion, multi-modal embeddings, and vector search achieving 200ms query response time.",
          keywords: [, "multi-modal embeddings", "vector search", "200ms query response"]
        },
        {
          text: "Developed full-stack RAG solution with React.js/TypeScript frontend and FastAPI backend, implementing real-time streaming chat interface.",
          keywords: ["React.js/TypeScript", "FastAPI", "real-time streaming", "chat interface"]
        },
        {
          text: "Applied deep learning techniques for document analysis, achieving 95% accuracy in automated data extraction.",
          keywords: ["document analysis", "95% accuracy", "automated data extraction"]
        },
        {
          text: "Spearheaded automation solution that reduced business workload by 10x and established CI/CD pipelines with Jenkins and GitLab CI.",
          keywords: ["10x reduction", "CI/CD pipelines", "Jenkins", "GitLab CI"]
        }
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "BAHMNI Open Source EMR",
      location: "@ Deep Learning Research",
      date: "Jun 2022 - Nov 2022",
      website: null,
      tasks: [
        {
          text: "Enhanced layoutLM deep learning model with FUNSD dataset and achieved 80% accuracy in document understanding.",
          keywords: ["layoutLM", "FUNSD dataset", "80% accuracy"]
        },
        {
          text: "Developed tool for key entity recognition from documents using SimpleDLM as pre-trained model, improving F1 score by 14.4%.",
          keywords: [ "SimpleDLM", "F1 score", "14.4%"]
        },
        {
          text: "Designed and maintained data pipelines supporting data transformation processes, increasing efficiency by 25%.",
          keywords: [ "25% efficiency"]
        },
        {
          text: "Implemented data quality checks and monitoring systems resulting in 15% reduction in data errors.",
          keywords: ["15% reduction"]
        }
      ]
    },
    {
      title: "ML & Big Data Analytics Intern",
      company: "ThoughtWorks Pvt Limited",
      location: "@ AI Research",
      date: "Dec 2021 - May 2022",
      website: null,
      tasks: [
        {
          text: "Extracted medical data from documents using OCR with docTR deep learning model for healthcare data processing.",
          keywords: ["medical data", "OCR", "docTR"]
        },
        {
          text: "Developed Label Studio API with docTR model to extract text for multiple data reports and medical analysis.",
          keywords: ["docTR", "medical analysis"]
        },
        {
          text: "Implemented semi-supervised learning showing 3-5% accuracy improvements compared to supervised learning with small labeled data.",
          keywords: ["semi-supervised learning", "3-5% accuracy"]
        },
        {
          text: "Recorded observations and indicators against patient medical history using spaCy and medCAT libraries.",
          keywords: ["spaCy"]
        }
      ]
    }
  ];

  return (
    <div id="WhereIhaveWorkedSection" data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 02.</span>
        </div>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Work Experience Timeline */}
      <section className="flex flex-col space-y-12 max-w-4xl px-4 md:px-0">
        {workExperiences.map((experience, index) => (
          <div key={index} className="relative">
            {/* Timeline Line (for all but last item) */}
            {index !== workExperiences.length - 1 && (
              <div className="hidden md:block absolute left-4 top-16 w-0.5 h-full bg-gray-600"></div>
            )}
            
            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-2 top-6 w-4 h-4 bg-AAsecondary rounded-full border-4 border-AAprimary"></div>
            
            {/* Experience Card */}
            <div className="md:ml-12 bg-AAprimary border border-gray-700 rounded-lg p-6 hover:border-AAsecondary/50 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col space-y-2 mb-6">
                <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                  {experience.title} <span className="text-AAsecondary">{experience.location}</span>
                </span>
                <span className="font-mono text-xs text-gray-500">{experience.date}</span>
                <span className="text-AAsecondary font-semibold">{experience.company}</span>
                {experience.website && (
                  <span
                    className="font-mono text-xs text-AAsecondary hover:cursor-pointer hover:underline"
                    style={{ fontSize: "0.6rem" }}
                    onClick={() => window.open(experience.website, "_blank")}
                  >
                    {experience.website.replace('https://www.', '')}
                  </span>
                )}
              </div>

              {/* Tasks */}
              <div className="flex flex-col space-y-3 sm:text-sm text-xs">
                {experience.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex flex-row space-x-2">
                    <ArrowIcon className="h-5 w-4 text-AAsecondary flex-none mt-0.5" />
                    <span
                      className="text-gray-500 sm:text-sm text-xs leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: getTasksTextWithHighlightedKeyword(task.text, task.keywords),
                      }}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}