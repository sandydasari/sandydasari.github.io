export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  link: string | null;
  bullets: string[];
};

export type ProjectItem = {
  year: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  images: string[];
  featured: boolean;
  github?: string;
  link?: string;
};

export type AchievementItem = {
  year: string;
  label: string;
  title: string;
  context: string;
  image: string;
  tech?: string[];
};

export type PublicationItem = {
  year: string;
  type: string;
  title: string;
  authors: string;
  venue: string;
  doi: string;
  url: string;
  abstract: string;
  keywords: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Research Engineer",
    company: "Leoforce",
    date: "Oct 2025 to Present",
    link: null,
    bullets: [
      "Shipped hybrid search RAG agentic system end-to-end at billion-record scale.",
      "Architected hybrid search (BM25 + HNSW dense retrieval) across 1.6B+ records with RRF fusion: 40% precision lift.",
      "Designed RAG eval pipeline with DeepEval: faithfulness, contextual precision/recall, RAGAS.",
      "Built multi-agent systems on LangGraph + LiteLLM with Langfuse + OpenTelemetry tracing.",
      "Led OpenSearch 1.3 → 3.0 migration with FAISS/Lucene k-NN search.",
      "Built FastAPI microservices handling 10k+ QPS with full observability.",
    ],
  },
  {
    role: "AI Engineer",
    company: "ANZ Operations and Technology",
    date: "Jun 2023 to Sep 2025",
    link: "https://www.anz.com.au/",
    bullets: [
      "Architected KnowHow Assist RAG: 60k+ documents on Vertex AI, 200ms p95 query latency.",
      "Full-stack RAG with React/TS + FastAPI, real-time streaming chat.",
      "Document analysis pipelines at 95% extraction accuracy.",
      "Automation cutting business workload 10x; CI/CD on Jenkins + GitLab CI.",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "BAHMNI Open Source EMR",
    date: "Jun 2022 to Nov 2022",
    link: null,
    bullets: [
      "Enhanced layoutLM with FUNSD: 80% document understanding accuracy.",
      "Key entity recognition via SimpleDLM: F1 +14.4%.",
      "Data pipelines and quality monitoring: 25% efficiency, 15% error reduction.",
    ],
  },
  {
    role: "ML & Big Data Intern",
    company: "ThoughtWorks",
    date: "Dec 2021 to May 2022",
    link: null,
    bullets: [
      "Medical OCR with docTR; Label Studio integration for batch extraction.",
      "Semi-supervised learning: 3-5% accuracy lift over supervised baseline.",
      "Clinical NER with spaCy + medCAT.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    year: "2025",
    category: "AI Leadership",
    title: "Healthcare AI Agents Platform",
    description:
      "Leading development of an advanced healthcare AI platform with voice and text-based health record automation. Features AI scribe functionality, real-time conversations with simulated AI patients, comprehensive allergy and condition tracking, MCP server integration, and automated appointment booking. Built with a modern Next.js/Turborepo monorepo so multiple specialised agents can share components and observability.",
    tech: ["Next.js", "Turborepo", "AI Agents", "Voice AI", "MCP Server"],
    images: ["/img/healthcare.png"],
    featured: true,
  },
  {
    year: "2025",
    category: "AI Leadership",
    title: "E-commerce AI Agents Platform",
    description:
      "Intelligent multi-agent e-commerce system with specialised agents for search, cart management, and payment processing. Features vector database integration for semantic search across the catalogue, dual agent workflows (planner + executor), and a user-customisable agent setup that adapts to the merchant's catalogue and policies.",
    tech: ["Multi-Agent Systems", "Vector Database", "SQLAlchemy", "Python"],
    images: ["/img/ecommerce.png"],
    featured: true,
  },
  {
    year: "2024",
    category: "Enterprise AI",
    title: "KnowHow Assist RAG Platform",
    description:
      "Enterprise-scale knowledge management system processing 60,000+ documents using Google Cloud Vertex AI. Built a complete ML pipeline with document ingestion, multi-modal embeddings, hybrid retrieval, and vector search: achieving 200ms p95 query response with streaming-token chat UI on top. Deployed across multiple business units for internal Q&A.",
    tech: ["RAG Architecture", "Vertex AI", "Vector Search", "FastAPI"],
    images: ["/img/rag.png"],
    featured: true,
  },
  {
    year: "2023",
    category: "MTech Thesis · IIT Bombay",
    title: "Neural Network SCF Prediction",
    description:
      "Implemented an efficient ANSYS-APDL algorithm achieving 90% reduction in time complexity for stress concentration factor (SCF) studies of offshore tubular joints. Trained deep neural networks with Bayesian Optimisation (Gaussian Process + Expected Improvement) and Sobol-sampled designs to predict SCFs across the full geometric design envelope.",
    tech: ["Deep Learning", "Bayesian Optimization", "ANSYS-APDL", "Python"],
    images: ["/img/nn.png", "/inplane_proposed_nn.jpg", "/outplane_cs_opt.jpg"],
    featured: true,
    github: "https://github.com/sandydasari/AnsysAPDL_python",
    link: "https://www.iitb.ac.in",
  },
  {
    year: "2024",
    category: "Frontend Architecture",
    title: "Blueprint Applications Platform",
    description:
      "Comprehensive blueprint applications framework with modular architecture serving as foundation for 5 interconnected applications. Features reusable components, standardised development patterns, and a modern monorepo set-up so teams can ship new internal apps in days rather than weeks.",
    tech: ["Next.js", "Turborepo", "pnpm", "TypeScript"],
    images: ["/img/blueprint.png"],
    featured: false,
  },
  {
    year: "2022",
    category: "AI Research",
    title: "Medical Document Analysis AI",
    description:
      "Advanced medical data extraction using OCR with docTR deep learning model. Enhanced layoutLM with the FUNSD dataset and achieved 80% accuracy on key-value extraction. Implemented semi-supervised learning that lifted accuracy by 3-5% compared to fully supervised baselines on small labelled corpora.",
    tech: ["OCR", "docTR", "layoutLM", "Semi-supervised Learning"],
    images: ["/img/medical.png"],
    featured: false,
  },
  {
    year: "2022",
    category: "Data Engineering",
    title: "YPredict: Real-time Analytics",
    description:
      "Scalable real-time data pipeline using Confluent Kafka for streaming 50,000+ daily transactions. Implemented parallel consumer processes with backpressure, achieving 99.9% uptime and sub-200ms end-to-end processing, surfaced via Power BI dashboards.",
    tech: ["Confluent Kafka", "Python Flask", "Power BI", "MySQL"],
    images: ["/img/YPredict-v1.jpg", "/img/kafka.png"],
    featured: false,
    github: "https://github.com/sandydasari/Ypredict",
    link: "https://github.com/sandydasari/kafka-project1",
  },
];

export const achievements: AchievementItem[] = [
  {
    year: "2023",
    label: "Hackathon Winner",
    title: "ANZ Hackfest 2023: The 7th Sense Team",
    context:
      "Built a workable PoC chatbot that revolutionised how ANZ employees work with internal communication tools. Combined OpenAI APIs with GCP, Jira, and Confluence integrations to make internal docs queryable in natural language.",
    image: "/img/hackfest.jpg",
    tech: ["OpenAI API", "GCP", "Jira", "Confluence", "LLMs"],
  },
  {
    year: "Class XII",
    label: "Academic Excellence",
    title: "State First Ranker",
    context:
      "Achieved state first rank in Class XII, demonstrating top-percentile academic performance across Mathematics, Physics, and Chemistry. The foundation that launched my technical journey.",
    image: "/img/state-first-ranker.png",
    tech: ["Mathematics", "Physics", "Chemistry"],
  },
];

export const publications: PublicationItem[] = [
  {
    year: "2023",
    type: "Conference Paper",
    title:
      "SCF Prediction using the Finite Element Method Coupled with Sobol Sampling and Bayesian Optimization",
    authors: "Sandy Dasari, A. Mohammed, Y. M. Desai",
    venue:
      "6th Int. Conf. on Soft Computing, Machine Learning and Optimisation in Civil, Structural and Environmental Engineering",
    doi: "10.4203/ccc.5.1.11",
    url: "https://www.ctresources.info/ccc/paper.html?id=9793",
    abstract:
      "A comprehensive database was developed for stress concentration factors (SCF) in offshore tubular T-joints through FE modeling with graded mesh generation. Bayesian optimization by Gaussian Process and Expected Improvement functions were employed to tune the hyper-parameters of the neural network model, yielding a model that generalises across a wide design envelope.",
    keywords: ["Deep Learning", "FEA", "Bayesian Optimization", "Neural Networks", "Sobol Sampling"],
  },
  {
    year: "2023",
    type: "Journal Paper",
    title:
      "Mesh Sensitivity Study of Steel Tubular T-joints for the Computation of Stress Concentration Factors",
    authors: "Sandy Dasari, Althaf Mohammed, Yogesh M. Desai",
    venue: "AIJR Proceedings",
    doi: "10.21467/proceedings.156.1",
    url: "https://books.aijr.org/index.php/press/catalog/book/156/chapter/2521",
    abstract:
      "Mesh sensitivity research is conducted to identify the optimum mesh controls for an extensive FE model library used to develop an AI prediction model for SCF prediction of offshore tubular joints. The study establishes recommended mesh density envelopes that balance accuracy and computational cost.",
    keywords: ["Machine Learning", "FEM", "Structural Analysis", "AI Prediction", "Data Science"],
  },
];

/**
 * Giscus comments config.
 * Fill these in after enabling GitHub Discussions on the repo and visiting
 * https://giscus.app to grab `repoId` and `categoryId`.
 */
export const giscusConfig = {
  repo: "sandydasari/sandydasari.github.io" as `${string}/${string}`,
  repoId: "R_kgDOLOGmcw",
  category: "Announcements",
  categoryId: "DIC_kwDOLOGmc84C-twq",
};

export const profile = {
  name: "Dasari Sandhya Rani",
  handle: "sandy",
  role: "AI Research Engineer",
  location: "India",
  bio: "AI Research Engineer at Leoforce, building agentic hybrid-search RAG systems at billion-record scale. Previously enterprise RAG and LLM systems at ANZ. M.Tech, IIT Bombay.",
  email: "sandydasari977@gmail.com",
  resume: "/sandy_ai_leo.pdf",
  github: "https://github.com/sandydasari",
  linkedin: "https://www.linkedin.com/in/dasari-sandhya-rani/",
};

/**
 * Newsletter signup. Set `action` to a form endpoint (Buttondown, Formspree,
 * Mailchimp, etc.) to collect subscribers. While empty, the form falls back to
 * a mailto "subscribe" to profile.email so it still works on the static site.
 *   Buttondown:  https://buttondown.email/api/emails/embed-subscribe/<username>
 *   Formspree:   https://formspree.io/f/<id>
 */
export const newsletter = {
  action: "",
};
