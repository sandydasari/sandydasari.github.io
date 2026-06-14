import React from "react";
import { motion } from "framer-motion";

export default function MyName(props: { finishedLoading: true }) {
  const delay = (n: number) => ({
    opacity: { delay: props.finishedLoading ? 0 : n, duration: props.finishedLoading ? 0 : 0.4 },
    y: { delay: props.finishedLoading ? 0 : n, duration: props.finishedLoading ? 0 : 0.4 },
  });

  return (
    <div className="relative h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 overflow-hidden">
      {/* Hero ambient gradient (Vercel/Notion vibe) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          background:
            "radial-gradient(900px circle at 15% 20%, rgba(201,169,110,1), transparent 55%), radial-gradient(700px circle at 85% 80%, rgba(201,169,110,0.6), transparent 60%)",
        }}
      />
      <div className="relative">
      {/* Role badge */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={delay(10.2)}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-AAsecondary border border-AAsecondary/30 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-AAsecondary animate-pulse" />
          AI Engineer &amp; Researcher
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={delay(10.35)}
        className="font-About font-semibold text-AAtext leading-[1.08] tracking-tight"
        style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
      >
        Dasari<br />Sandhya Rani
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={delay(10.5)}
        className="mt-8 text-AAmuted font-Header font-light text-base md:text-lg leading-relaxed max-w-xl tracking-wide"
      >
        Building production-grade{" "}
        <span className="text-AAtext font-normal">multi-agent architectures</span> and{" "}
        <span className="text-AAtext font-normal">RAG pipelines</span>{" "}
        that bring intelligent automation to enterprise scale.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={delay(10.65)}
        className="mt-12 flex flex-row items-center gap-4"
      >
        <a
          href="mailto:sandydasari977@gmail.com?subject=Let's Connect&body=Hi Sandy, I'd like to discuss potential opportunities."
          target="_blank"
          rel="noreferrer"
        >
          <button className="group flex items-center gap-2.5 bg-AAsecondary text-AAprimary text-sm font-semibold tracking-wide px-6 py-3.5 rounded hover:bg-AAsecondary/90 transition-all duration-200">
            Get in touch
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </a>
        <a href="/sandy_ai_leo.pdf" target="_blank" rel="noreferrer">
          <button className="text-AAtext text-sm font-medium tracking-wide px-6 py-3.5 rounded border border-AAborder hover:border-AAsecondary/50 hover:text-AAsecondary transition-all duration-200">
            View Resume
          </button>
        </a>
      </motion.div>
      </div>
    </div>
  );
}
