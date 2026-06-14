import React from "react";
import { useRouter } from "next/router";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

const projects = [
  {
    category: "AI Leadership",
    title: "Healthcare AI Agents Platform",
    description:
      "Leading development of an advanced healthcare AI platform with voice and text-based health record automation. Features AI scribe functionality, real-time conversations with simulated AI patients, comprehensive allergy and condition tracking, MCP server integration, and automated appointment booking.",
    tech: ["Next.js", "Turborepo", "AI Agents", "Voice AI", "MCP Server"],
    image: "/img/healthcare.png",
    github: "#",
    link: "",
    featured: true,
  },
  {
    category: "AI Leadership",
    title: "E-commerce AI Agents Platform",
    description:
      "Intelligent multi-agent e-commerce system with specialized agents for search, cart management, and payment processing. Features vector database integration for semantic search, dual agent workflows, and user-customizable agent setup.",
    tech: ["Multi-Agent Systems", "Vector Database", "SQLAlchemy", "Python"],
    image: "/img/ecommerce.png",
    github: "#",
    link: "",
    featured: true,
  },
  {
    category: "Frontend Architecture",
    title: "Blueprint Applications Platform",
    description:
      "Comprehensive blueprint applications framework with modular architecture serving as foundation for 5 interconnected applications. Features reusable components and standardized development patterns built with modern monorepo architecture.",
    tech: ["Next.js", "Turborepo", "pnpm", "TypeScript"],
    image: "/img/blueprint.png",
    github: "#",
    link: "",
    featured: false,
  },
  {
    category: "Enterprise AI",
    title: "KnowHow Assist RAG Platform",
    description:
      "Enterprise-scale knowledge management system processing 60k+ documents using Google Cloud Vertex AI. Built complete ML pipeline with document ingestion, multi-modal embeddings, and vector search achieving 200ms query response time.",
    tech: ["RAG Architecture", "Vertex AI", "Vector Search", "FastAPI"],
    image: "/img/rag.png",
    github: "#",
    link: "",
    featured: false,
  },
  {
    category: "MTech Thesis, IIT Bombay",
    title: "Neural Network SCF Prediction",
    description:
      "Implemented efficient algorithm in ANSYS-APDL achieving 90% reduction in time complexity. Trained deep learning models with Bayesian Optimization for material property analysis using Sobol sampling and neural networks.",
    tech: ["Deep Learning", "Bayesian Optimization", "ANSYS-APDL", "Python"],
    image: "/img/nn.png",
    github: "https://github.com/sandydasari/AnsysAPDL_python",
    link: "https://www.iitb.ac.in",
    featured: false,
  },
  {
    category: "AI Research",
    title: "Medical Document Analysis AI",
    description:
      "Advanced medical data extraction using OCR with docTR deep learning model. Enhanced layoutLM with FUNSD dataset achieving 80% accuracy. Implemented semi-supervised learning with 3-5% accuracy improvements.",
    tech: ["OCR", "docTR", "layoutLM", "Semi-supervised Learning"],
    image: "/img/medical.png",
    github: "#",
    link: "",
    featured: false,
  },
  {
    category: "Data Engineering",
    title: "YPredict: Real-time Analytics",
    description:
      "Scalable real-time data pipeline using Confluent Kafka for streaming 50,000+ daily transactions. Implemented parallel consumer processes achieving 99.9% uptime with sub-200ms processing speeds.",
    tech: ["Confluent Kafka", "Python Flask", "Power BI", "MySQL"],
    image: "/img/kafka.png",
    github: "https://github.com/sandydasari/Ypredict",
    link: "https://github.com/sandydasari/kafka-project1",
    featured: false,
  },
];

export default function SomethingIveBuilt() {
  const router = useRouter();

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-28 px-4"
    >
      {/* Section Header */}
      <div data-aos="fade-up" className="flex flex-row items-center mb-16">
        <span className="text-AAsecondary font-mono text-sm mr-3">04.</span>
        <span className="text-AAtext font-semibold tracking-wide text-xl md:text-2xl mr-6">
          Some Things I&apos;ve Built
        </span>
        <div className="flex-1 h-px bg-AAborder max-w-xs"></div>
      </div>

      {/* Featured Projects - large cards with cover image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-6xl mx-auto w-full">
        {featured.map((project, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="group relative bg-AAsurface border border-AAborder rounded-xl overflow-hidden hover:border-AAsecondary/30 hover:shadow-[0_0_0_1px_rgba(201,169,110,0.15),0_8px_30px_-15px_rgba(201,169,110,0.25)] transition-all duration-300"
          >
            {/* Cover image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-AAprimary">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-AAsurface via-AAsurface/20 to-transparent" />
              <span className="absolute top-4 left-4 bg-AAprimary/80 backdrop-blur-sm border border-AAborder text-AAsecondary text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Body */}
            <div className="p-7">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-AAtext font-semibold text-lg leading-snug group-hover:text-AAsecondary transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex gap-3 flex-shrink-0">
                  <GithubIcon link={project.github} />
                  <ExternalLink url={project.link} router={router} />
                </div>
              </div>
              <p className="text-AAmuted text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-[10px] font-mono text-AAmuted bg-AAprimary border border-AAborder px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects - compact grid with thumbnails */}
      <div data-aos="fade-up" className="max-w-6xl mx-auto w-full">
        <p className="text-AAmuted font-mono text-xs tracking-widest uppercase mb-8 text-center">
          Other notable work
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="group bg-AAsurface border border-AAborder rounded-xl overflow-hidden flex flex-col hover:border-AAsecondary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden bg-AAprimary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-AAsurface via-AAsurface/30 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-AAsecondary font-mono text-[10px] tracking-widest uppercase leading-tight">
                    {project.category}
                  </span>
                  <div className="flex gap-3 flex-shrink-0 ml-2">
                    <GithubIcon link={project.github} />
                    <ExternalLink url={project.link} router={router} />
                  </div>
                </div>
                <h3 className="text-AAtext font-semibold text-base mb-2 group-hover:text-AAsecondary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-AAmuted text-xs leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.slice(0, 4).map((t, j) => (
                    <span key={j} className="text-[10px] font-mono text-AAmuted">
                      {t}{j < Math.min(project.tech.length - 1, 3) ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
