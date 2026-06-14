import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

const socialLinks = [
  { href: "https://github.com/sandydasari", Icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/dasari-sandhya-rani/", Icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Footer(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <footer className="bg-AAprimary border-t border-AAborder flex flex-col items-center justify-center py-10 space-y-5">
      <div className={`flex flex-row gap-6 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {socialLinks.map(({ href, Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon className="w-5 h-5 text-AAmuted hover:text-AAsecondary fill-current transition-colors duration-200" />
          </a>
        ))}
      </div>
      <a href={props.githubUrl} target="_blank" rel="noreferrer">
        <div className="group flex flex-col items-center gap-1.5">
          <span className="font-mono text-xs text-AAmuted group-hover:text-AAtext transition-colors duration-200">
            Designed &amp; Built by Dasari Sandhya Rani
          </span>
          <div className="flex items-center gap-1.5 text-AAmuted group-hover:text-AAsecondary transition-colors duration-200">
            <GithubIcon className="w-3.5 h-3.5 fill-current" />
            <span className="font-mono text-[10px] tracking-wider">Source on GitHub</span>
          </div>
        </div>
      </a>
    </footer>
  );
}
