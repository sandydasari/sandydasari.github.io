import React from "react";

export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-40 px-6 bg-AAprimary"
    >
      <p className="text-AAsecondary font-mono text-xs tracking-[0.2em] uppercase mb-6">06. What&apos;s Next</p>
      <h2 className="text-AAtext font-About font-semibold text-4xl sm:text-5xl mb-6 text-center leading-tight">
        Get In Touch
      </h2>
      <p className="text-AAmuted text-center text-sm leading-relaxed max-w-md mb-10">
        I&apos;m currently open to new opportunities. Whether you have a question,
        a project in mind, or just want to say hello, my inbox is always open.
      </p>
      <a href="mailto:sandydasari977@gmail.com" target="_blank" rel="noreferrer">
        <button className="group flex items-center gap-2.5 border border-AAsecondary text-AAsecondary text-sm font-mono tracking-widest uppercase px-8 py-4 rounded hover:bg-AAsecondary/10 transition-all duration-200">
          Say Hello
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </a>
    </div>
  );
}
