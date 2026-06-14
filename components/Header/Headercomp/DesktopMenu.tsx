import React from "react";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import NextLink from "next/link";

const navItems = [
  { to: "BlogSection", label: "Blog", num: "01", offset: -100, external: "/blog" as string | null },
  { to: "latestUpdatesSection", label: "Latest", num: "02", offset: -100, external: null },
  { to: "WhereIhaveWorkedSection", label: "Experience", num: "03", offset: -300, external: null },
  { to: "SomethingIveBuiltSection", label: "Work", num: "04", offset: -100, external: null },
  { to: "ResearchSection", label: "Research", num: "05", offset: -100, external: null },
  { to: "GetInTouchSection", label: "Contact", num: "06", offset: -100, external: null },
];

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-7">
      {navItems.map((item, i) => {
        const inner = (
          <span className="text-AAmuted hover:cursor-pointer hover:text-AAtext transition-colors duration-200 tracking-widest uppercase text-[10px]">
            <span className="text-AAsecondary mr-1.5">{item.num}.</span>
            {item.label}
          </span>
        );
        return (
          <motion.div
            key={item.to}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: props.finishedLoading ? 0 : 1.2,
              delay: props.finishedLoading ? 0 : 9.4 + i * 0.15,
            }}
          >
            {item.external ? (
              <NextLink href={item.external}>{inner}</NextLink>
            ) : (
              <ReactScrollLink to={item.to} spy smooth offset={item.offset} duration={200}>
                {inner}
              </ReactScrollLink>
            )}
          </motion.div>
        );
      })}

      <a href="/sandy_ai_leo.pdf" target="_blank" rel="noreferrer">
        <motion.button
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 10.2,
          }}
          className="text-AAsecondary border border-AAsecondary/40 py-1.5 px-4 rounded text-[10px] tracking-widest uppercase hover:bg-AAsecondary/10 transition-all duration-200"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
}
