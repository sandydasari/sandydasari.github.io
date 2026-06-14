import React from "react";
import Link from "next/link";
import { PostMeta } from "../../../utils/posts";

type Props = {
  posts: PostMeta[];
};

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPreview({ posts }: Props) {
  if (!posts || posts.length === 0) return null;
  const visible = posts.slice(0, 3);

  return (
    <div
      id="BlogSection"
      data-aos="fade-up"
      className="relative flex flex-col items-center py-28 bg-AAprimary overflow-hidden"
    >
      {/* Subtle radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(201,169,110,1), transparent 60%)",
        }}
      />

      <div className="relative w-full max-w-5xl px-4 md:px-0">
        {/* Section Header */}
        <div className="flex flex-row items-center mb-14">
          <span className="text-AAsecondary font-mono text-sm mr-3">01.</span>
          <span className="text-AAtext font-semibold tracking-wide text-xl md:text-2xl mr-6">
            Recent Writing
          </span>
          <div className="flex-1 h-px bg-AAborder max-w-xs"></div>
          <Link
            href="/blog"
            className="hidden md:inline-block ml-6 font-mono text-[10px] tracking-widest uppercase text-AAmuted hover:text-AAsecondary transition-colors"
          >
            All posts →
          </Link>
        </div>

        {/* Posts grid - Vercel/Notion-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col bg-AAsurface border border-AAborder rounded-xl p-7 hover:border-AAsecondary/30 hover:shadow-[0_0_0_1px_rgba(201,169,110,0.15),0_8px_30px_-15px_rgba(201,169,110,0.25)] transition-all duration-300"
            >
              {/* Top meta */}
              <div className="flex items-center gap-2 mb-5 font-mono text-[10px] tracking-widest uppercase text-AAmuted">
                <span className="text-AAsecondary">{formatDate(post.date)}</span>
                <span className="text-AAborder">·</span>
                <span>{post.readingTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-About text-xl text-AAtext leading-snug tracking-tight mb-3 group-hover:text-AAsecondary transition-colors duration-200">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-AAmuted text-sm leading-relaxed mb-6 flex-1">
                {post.description}
              </p>

              {/* Tags + arrow */}
              <div className="flex items-end justify-between gap-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono tracking-widest uppercase text-AAmuted border border-AAborder px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-AAsecondary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="font-mono text-xs tracking-widest uppercase text-AAsecondary border border-AAsecondary/40 py-3 px-8 rounded hover:bg-AAsecondary/10 transition-all duration-200"
          >
            Read all posts →
          </Link>
        </div>
      </div>
    </div>
  );
}
