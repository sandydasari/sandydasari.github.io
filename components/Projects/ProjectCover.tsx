import React from "react";

type Props = {
  title: string;
  image?: string;
};

export default function ProjectCover({ title, image }: Props) {
  return (
    <div className="group relative aspect-[3/2] rounded-xl overflow-hidden border border-AAborder bg-[#0a0a0a]">
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs text-AAmuted">No preview</span>
        </div>
      )}
    </div>
  );
}
