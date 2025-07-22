import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import ExternalLink from "../../Icons/ExternalLink";
import { useRouter } from "next/router";

export default function Research() {
  const router = useRouter();

  const publications = [
    {
      title: "SCF Prediction using the Finite Element Method Coupled with Sobol Sampling and Bayesian Optimization",
      authors: "Sandy Dasari, A. Mohammed, Y. M. Desai",
      venue: "Proceedings of the Sixth International Conference on Soft Computing, Machine Learning and Optimisation in Civil, Structural and Environmental Engineering",
      year: "2023",
      doi: "10.4203/ccc.5.1.11",
      url: "https://www.ctresources.info/ccc/paper.html?id=9793",
      abstract: "A comprehensive database was developed for stress concentration factors (SCF) in offshore tubular T-joints through a code that enables finite element (FE) modeling of a joint using graded mesh generation, load and boundary conditions for a range of geometric parameters. A mesh sensitivity study was conducted and the SCF computations were validated against existing experimental results. A parametric study was conducted to identify the best samples for training a neural network (NN) model. Bayesian optimization by Gaussian Process and Expected Improvement functions were employed to tune the hyper-parameters.",
      keywords: ["Deep Learning", "Finite Element Analysis", "Bayesian Optimization", "Neural Networks", "Sobol Sampling", "Offshore Structures"],
      type: "Conference Paper"
    },
    {
      title: "Mesh Sensitivity Study of Steel Tubular T-joints for the Computation of Stress Concentration Factors",
      authors: "Sandy Dasari, Althaf Mohammed, Yogesh M. Desai",
      venue: "AIJR Proceedings",
      year: "2023",
      doi: "10.21467/proceedings.156.1",
      url: "https://books.aijr.org/index.php/press/catalog/book/156/chapter/2521",
      abstract: "The stress concentration factor (SCF) computation is a key element in the fatigue assessment of offshore tubular joints. Mesh sensitivity research is conducted to identify the optimum mesh controls needed to create an extensive FE model library to develop an AI prediction model for the SCF prediction. Nine finite element models with varying mesh controls are analysed for the mesh sensitivity study. The optimum mesh controls for the Finite Element Model for estimating the SCF of steel tubular joints were identified.",
      keywords: ["Machine Learning", "Computational Engineering", "Finite Element Method", "AI Prediction Models", "Structural Analysis", "Data Science"],
      type: "Journal Paper"
    }
  ];

  return (
    <div
      id="ResearchSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      {/* Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 04.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Research Publications
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Publications */}
        <div className="flex flex-col space-y-8">
          {publications.map((paper, index) => (
            <div key={index} className="flex flex-col space-y-4 p-6 rounded-lg bg-AAsecondary bg-opacity-5 border border-gray-700 hover:border-AAsecondary duration-300">
              {/* Paper Header */}
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-start justify-between">
                  <span className="text-xs text-AAsecondary font-mono">{paper.type}</span>
                  <a href={paper.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
                <h3 className="text-gray-200 font-bold text-lg sm:text-xl leading-tight hover:text-AAsecondary duration-300">
                  <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
                    {paper.title}
                  </a>
                </h3>
              </div>

              {/* Authors and Venue */}
              <div className="flex flex-col space-y-1">
                <p className="text-gray-300 text-sm font-medium">
                  {paper.authors.split(', ').map((author, idx) => (
                    <span key={idx}>
                      {author === "Sandy Dasari" ? (
                        <span className="text-AAsecondary font-bold">{author}</span>
                      ) : (
                        author
                      )}
                      {idx < paper.authors.split(', ').length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <p className="text-gray-400 text-sm italic">
                  {paper.venue} ({paper.year})
                </p>
                <p className="text-gray-500 text-xs font-mono">
                  DOI: <span className="text-AAsecondary">{paper.doi}</span>
                </p>
              </div>

              {/* Abstract */}
              <div className="flex flex-col space-y-2">
                <h4 className="text-gray-300 font-semibold text-sm">Abstract</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="flex flex-col space-y-2">
                <h4 className="text-gray-300 font-semibold text-sm">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, keyIdx) => (
                    <span
                      key={keyIdx}
                      className="px-2 py-1 text-xs bg-AAsecondary bg-opacity-10 text-AAsecondary rounded border border-AAsecondary border-opacity-30"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Citation Info */}
              <div className="flex flex-col space-y-1 pt-2 border-t border-gray-700">
                <span className="text-gray-500 text-xs">Published in {paper.year}</span>
                <div className="flex flex-row items-center space-x-4">
                <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-AAsecondary text-xs hover:underline font-mono flex items-center"
                >
                    View Publication&nbsp;
                    <ArrowIcon className="ml-1 h-3 w-3 text-AAsecondary" style={{ transform: "rotate(30deg)" }} />
                </a>
                  {/* <button
                    onClick={() => {
                      navigator.clipboard.writeText(`DOI: ${paper.doi}`);
                    }}
                    className="text-gray-400 text-xs hover:text-AAsecondary duration-300 font-mono"
                  >
                    Copy DOI
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Summary */}
        {/* <div className="mt-8 p-6 rounded-lg bg-gray-800 bg-opacity-30 border border-gray-700">
          <div className="flex flex-col space-y-4">
            <h3 className="text-gray-200 font-bold text-lg">Research Focus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              My research primarily focuses on the intersection of <span className="text-AAsecondary">machine learning</span> and <span className="text-AAsecondary">computational engineering</span>, 
              with emphasis on developing AI-driven prediction models for structural analysis. I specialize in applying <span className="text-AAsecondary">deep learning</span> techniques, 
              <span className="text-AAsecondary">Bayesian optimization</span>, and advanced sampling methods to solve complex engineering problems, particularly in offshore structural systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-AAsecondary bg-opacity-10 text-AAsecondary rounded">
                Machine Learning in Engineering
              </span>
              <span className="px-3 py-1 text-sm bg-AAsecondary bg-opacity-10 text-AAsecondary rounded">
                Deep Learning Applications
              </span>
              <span className="px-3 py-1 text-sm bg-AAsecondary bg-opacity-10 text-AAsecondary rounded">
                Computational Modeling
              </span>
              <span className="px-3 py-1 text-sm bg-AAsecondary bg-opacity-10 text-AAsecondary rounded">
                Bayesian Optimization
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}