import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    label: "Award",
    title: "ANZ Hackfest 2023 Winner",
    team: "The 7th Sense Team",
    date: "2023",
    description:
      "Emerged as winners with our game-changing chatbot that revolutionized how ANZers work with internal communication tools. Built a workable proof of concept using OpenAI API and GCP integration.",
    image: "/img/hackfest.jpg",
    tech: ["OpenAI API", "GCP", "Jira", "Confluence", "LLMs"],
  },
  {
    id: 2,
    label: "Academic",
    title: "State First Ranker",
    team: "Academic Excellence",
    date: "+2 Grade",
    description:
      "Achieved state first rank during +2 grade, demonstrating exceptional academic performance and dedication to learning. This achievement laid the foundation for my technical journey.",
    image: "/img/state-first-ranker.png",
    tech: ["Mathematics", "Physics", "Chemistry"],
  },
];

const LatestUpdates = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = achievements[currentIndex];

  const next = () => setCurrentIndex((i) => (i + 1) % achievements.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + achievements.length) % achievements.length);

  return (
    <div
      ref={ref}
      id="latestUpdatesSection"
      data-aos="fade-up"
      className="flex flex-col items-center py-28 bg-AAprimary"
    >
      <div className="w-full max-w-4xl px-4 md:px-0">
        {/* Section Header */}
        <div className="flex flex-row items-center mb-16">
          <span className="text-AAsecondary font-mono text-sm mr-3">02.</span>
          <span className="text-AAtext font-semibold tracking-wide text-xl md:text-2xl mr-6">
            Latest Updates
          </span>
          <div className="flex-1 h-px bg-AAborder max-w-xs"></div>
        </div>

        {/* Slider */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-AAsurface border border-AAborder rounded-lg overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-2/5 relative overflow-hidden bg-AAprimary">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-56 lg:h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-AAsurface hidden lg:block" />
                <span className="absolute top-4 left-4 bg-AAprimary/90 border border-AAborder text-AAsecondary text-xs font-mono px-2.5 py-1 rounded uppercase tracking-wider">
                  {current.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <p className="text-AAmuted font-mono text-xs tracking-widest uppercase mb-3">
                    {current.date} · {current.team}
                  </p>
                  <h3 className="text-AAtext font-semibold text-2xl mb-4">{current.title}</h3>
                  <p className="text-AAmuted text-sm leading-relaxed">{current.description}</p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {current.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-AAsecondary bg-AAsecondary/10 border border-AAsecondary/20 px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {achievements.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-AAsecondary w-8" : "bg-AAborder w-4 hover:bg-AAmuted"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded border border-AAborder flex items-center justify-center text-AAmuted hover:text-AAtext hover:border-AAsecondary/40 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded border border-AAborder flex items-center justify-center text-AAmuted hover:text-AAtext hover:border-AAsecondary/40 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

LatestUpdates.displayName = "LatestUpdates";
export default LatestUpdates;
