import React from "react";
import ExternalLink from "../../Icons/ExternalLink";
import { useRouter } from "next/router";

const publications = [
  {
    type: "Conference Paper",
    title: "SCF Prediction using the Finite Element Method Coupled with Sobol Sampling and Bayesian Optimization",
    authors: "Sandy Dasari, A. Mohammed, Y. M. Desai",
    venue: "6th Int. Conf. on Soft Computing, Machine Learning and Optimisation in Civil, Structural and Environmental Engineering",
    year: "2023",
    doi: "10.4203/ccc.5.1.11",
    url: "https://www.ctresources.info/ccc/paper.html?id=9793",
    abstract:
      "A comprehensive database was developed for stress concentration factors (SCF) in offshore tubular T-joints through FE modeling with graded mesh generation. Bayesian optimization by Gaussian Process and Expected Improvement functions were employed to tune the hyper-parameters of the neural network model.",
    keywords: ["Deep Learning", "FEA", "Bayesian Optimization", "Neural Networks", "Sobol Sampling"],
  },
  {
    type: "Journal Paper",
    title: "Mesh Sensitivity Study of Steel Tubular T-joints for the Computation of Stress Concentration Factors",
    authors: "Sandy Dasari, Althaf Mohammed, Yogesh M. Desai",
    venue: "AIJR Proceedings",
    year: "2023",
    doi: "10.21467/proceedings.156.1",
    url: "https://books.aijr.org/index.php/press/catalog/book/156/chapter/2521",
    abstract:
      "Mesh sensitivity research is conducted to identify the optimum mesh controls for an extensive FE model library to develop an AI prediction model for SCF prediction of offshore tubular joints.",
    keywords: ["Machine Learning", "FEM", "Structural Analysis", "AI Prediction", "Data Science"],
  },
];

export default function Research() {
  const router = useRouter();

  return (
    <div id="ResearchSection" data-aos="fade-up" className="flex flex-col items-center py-28 bg-AAprimary">
      <div className="w-full max-w-4xl px-4 md:px-0">
        {/* Section Header */}
        <div className="flex flex-row items-center mb-16">
          <span className="text-AAsecondary font-mono text-sm mr-3">05.</span>
          <span className="text-AAtext font-semibold tracking-wide text-xl md:text-2xl mr-6">
            Research Publications
          </span>
          <div className="flex-1 h-px bg-AAborder max-w-xs"></div>
        </div>

        {/* Publications */}
        <div className="flex flex-col space-y-6">
          {publications.map((paper, i) => (
            <div
              key={i}
              className="group bg-AAsurface border border-AAborder rounded-lg p-7 hover:border-AAsecondary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-AAsecondary font-mono text-xs tracking-widest uppercase">{paper.type}</span>
                <a href={paper.url} target="_blank" rel="noreferrer">
                  <ExternalLink url="" router={router} />
                </a>
              </div>

              <a href={paper.url} target="_blank" rel="noreferrer">
                <h3 className="text-AAtext font-semibold text-base leading-snug mb-3 group-hover:text-AAsecondary transition-colors duration-200">
                  {paper.title}
                </h3>
              </a>

              <p className="text-AAmuted text-sm mb-1">
                {paper.authors.split(", ").map((author, j) => (
                  <span key={j}>
                    {author === "Sandy Dasari" ? (
                      <span className="text-AAtext font-medium">{author}</span>
                    ) : (
                      author
                    )}
                    {j < paper.authors.split(", ").length - 1 && ", "}
                  </span>
                ))}
              </p>
              <p className="text-AAmuted text-xs italic mb-1">{paper.venue} ({paper.year})</p>
              <p className="text-AAmuted/60 text-xs font-mono mb-4">DOI: {paper.doi}</p>

              <p className="text-AAmuted text-sm leading-relaxed mb-5">{paper.abstract}</p>

              <div className="flex flex-wrap gap-2">
                {paper.keywords.map((kw, j) => (
                  <span key={j} className="text-xs font-mono text-AAsecondary bg-AAsecondary/10 border border-AAsecondary/20 px-2.5 py-1 rounded">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
