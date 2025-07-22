import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Dasari Sandhya Rani
      </motion.h1>
{/* <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I make ideas & things alive.
      </motion.h2> */}

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
        >
        {/* I'm an  specializing in autonomous agents and RAG systems. I develop production-grade multi-agent architectures, retrieval-augmented generation pipelines, and intelligent automation solutions using Python, Go, with expertise in DevOps and MLOps practices. My research at IIT Bombay focuses on advancing agentic AI systems for enterprise deployment and scalable AI infrastructure. */}
        <span className="text-AAsecondary">AI Engineer</span>, specializing in autonomous agents and RAG systems.<br className="2xl:block hidden" /> 
        I develop production-grade multi-agent architectures, RAG pipelines, and intelligent automation solutions using Python, JS/TS.
        <br className="2xl:block hidden" />   
        {/* I&apos;m a <span className="text-AAsecondary">software engineer</span>, proficient in Pega, .NET, DevOps, and passionate about data science.<br className="2xl:block hidden" /> 
        I specialize in optimizing business processes and crafting robust web applications with <span className="text-AAsecondary">.NET</span>, <span className="text-AAsecondary">C#</span>, and <span className="text-AAsecondary">SQL Server</span>.
        <br className="2xl:block hidden" />   */}
        {"Let's connect and explore how my diverse skill set can elevate your projects!"}
        {/* i possess strong problem-solving skills and
        specialize in crafting exceptional 
        digital experiences. My current area of focus is in the <span className="text-AAsecondary">web3 domain</span>,
        where I actively engage in developing <br className="2xl:block hidden"/>
        and designing immersive <span className="text-AAsecondary">web3 applications</span>. This involves working with{" "}
        <span className="text-AAsecondary">Smart Contracts</span>  on the{" "}
        <span className="text-AAsecondary">Blockchain</span>. */}
        {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
        front-end components to enable seamless user interactions. */}
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >

          <a href="mailto:sandydasari977@gmail.com?subject=Let's Connect&body=Hi Sandy, I'd like to discuss potential opportunities." target={"_blank"} rel="noreferrer">
            <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch!
            </button>
          </a>
          {/* <a href="tel:+918074816864">
            <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
              Call Me
            </button>
          </a> */}
      </motion.div>
    </div>
  );
}
