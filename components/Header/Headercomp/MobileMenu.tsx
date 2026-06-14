import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
import NextLink from "next/link";

const navItems = [
  { to: "latestUpdatesSection", label: "Latest", num: "02", offset: -100 },
  { to: "WhereIhaveWorkedSection", label: "Experience", num: "03", offset: -250 },
  { to: "SomethingIveBuiltSection", label: "Work", num: "04", offset: -100 },
  { to: "ResearchSection", label: "Research", num: "05", offset: -100 },
  { to: "GetInTouchSection", label: "Contact", num: "06", offset: -100 },
];

const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={props.rotate ? { x: "0" } : { x: "100%" }}
      transition={{ x: { duration: 0.35 } }}
      className="w-full fixed h-screen flex md:hidden z-20"
    >
      <div
        onClick={() => closeMenu()}
        className="w-1/4 h-full backdrop-blur-sm bg-black/40 hover:cursor-pointer"
      />
      <div className="w-3/4 h-full bg-MobileNavBarColor border-l border-AAborder flex flex-col justify-center items-center space-y-8">
        <NextLink
          href="/blog"
          onClick={() => closeMenu()}
          className="flex flex-col text-center space-y-1.5 cursor-pointer"
        >
          <span className="text-AAsecondary text-[10px] font-mono tracking-widest">01.</span>
          <span className="text-AAtext text-sm tracking-widest uppercase hover:text-AAsecondary transition-colors duration-200">
            Blog
          </span>
        </NextLink>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy
            smooth
            offset={item.offset}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-1.5 cursor-pointer"
          >
            <span className="text-AAsecondary text-[10px] font-mono tracking-widest">{item.num}.</span>
            <span className="text-AAtext text-sm tracking-widest uppercase hover:text-AAsecondary transition-colors duration-200">
              {item.label}
            </span>
          </Link>
        ))}
        <a href="/sandy_ai_leo.pdf" target="_blank" rel="noreferrer">
          <button className="mt-4 border border-AAsecondary/50 text-AAsecondary text-xs font-mono tracking-widest uppercase py-3 px-8 rounded hover:bg-AAsecondary/10 transition-all duration-200">
            Resume
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
