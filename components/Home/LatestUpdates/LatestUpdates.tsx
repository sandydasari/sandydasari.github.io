import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

const LatestUpdates = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      title: "ANZ Hackfest 2023 Winner 🏆",
      team: "The 7th Sense Team",
      date: "2023",
      description: "Emerged as winners with our game-changing chatbot that revolutionized how ANZers work with internal communication tools. Built a workable proof of concept using OpenAI API and GCP integration.",
      image: "/img/hackfest.jpg",
      techStack: ["OpenAI API", "GCP", "Jira Integration", "Confluence", "LLMs", "GenAI"],
      tags: ["#ANZBengaluru", "#ANZHACKFEST2024", "#Wherebigthingshappen", "#GenAI"]
    },
    {
      id: 2,
      title: "State First Ranker 🥇",
      team: "Academic Excellence",
      date: "+2 Grade",
      description: "Achieved state first rank during +2 grade, demonstrating exceptional academic performance and dedication to learning. This achievement laid the foundation for my technical journey.",
      image: "/img/state-first-ranker.png",
      techStack: ["Mathematics", "Physics", "Chemistry", "Academic Excellence"],
      tags: ["#StateFirst", "#AcademicExcellence", "#FoundationOfSuccess"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div ref={ref} id="latestUpdatesSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1200px]">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-row items-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Latest Updates & Achievements
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </motion.div>

        {/* Horizontal Slider with Navigation */}
        <div className="relative w-full">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 hover:bg-gray-700/90 rounded-full shadow-lg shadow-AAsecondary/30 hover:shadow-AAsecondary/50 transition-all duration-300 group"
          >
            <svg 
              className="w-5 h-5 text-gray-300 group-hover:text-AAsecondary transform rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 hover:bg-gray-700/90 rounded-full shadow-lg shadow-AAsecondary/30 hover:shadow-AAsecondary/50 transition-all duration-300 group"
          >
            <svg 
              className="w-5 h-5 text-gray-300 group-hover:text-AAsecondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div className="mx-12 overflow-hidden rounded-xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((achievement, index) => (
                <div key={achievement.id} className="w-full flex-shrink-0">
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-AAsecondary/20 hover:shadow-AAsecondary/40 transition-all duration-300 group">
                    
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-AAsecondary/10 to-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="lg:w-1/3 relative">
                        <div className="aspect-video lg:aspect-square relative overflow-hidden">
                          <img 
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          
                          {/* Achievement Badge */}
                          <div className="absolute top-4 right-4">
                            <motion.div
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                              className="inline-flex items-center px-3 py-1 bg-yellow/90 backdrop-blur-sm rounded-full shadow-lg shadow-yellow/30"
                            >
                              {achievement.id === 1 ? "🏆" : "🥇"}
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-2/3 p-6 md:p-8 relative z-10">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                            {achievement.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base">
                          {achievement.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {achievement.techStack.slice(0, 6).map((tech, idx) => (
                            <div 
                              key={idx}
                              className="px-3 py-1 bg-AAsecondary/20 rounded-full text-AAsecondary text-xs font-mono shadow-sm shadow-AAsecondary/20 hover:shadow-AAsecondary/40 hover:bg-AAsecondary/30 transition-all duration-200"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                  index === currentIndex 
                    ? 'bg-AAsecondary w-8 shadow-AAsecondary/50' 
                    : 'bg-gray-600 hover:bg-gray-500 w-2 hover:shadow-gray-500/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center pt-8"
        >
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
              These achievements represent my commitment to innovation, collaboration, and delivering impactful solutions. 
              Always excited to take on new challenges and create meaningful technology experiences.
            </p>
            <div className="flex items-center space-x-2 text-AAsecondary">
              <span className="text-sm font-mono">More updates coming soon...</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-AAsecondary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

LatestUpdates.displayName = 'LatestUpdates';

export default LatestUpdates;