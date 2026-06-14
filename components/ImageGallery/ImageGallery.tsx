import React, { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[16/10] bg-AAsurface border border-AAborder rounded-lg flex items-center justify-center">
        <p className="text-xs text-AAmuted font-mono">No preview</p>
      </div>
    );
  }

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="space-y-2">
      <div className="relative aspect-[16/10] bg-AAsurface rounded-lg overflow-hidden group border border-AAborder">
        <img
          src={images[current]}
          alt={`${alt} — ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-AAprimary/85 backdrop-blur-sm border border-AAborder text-AAtext rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-AAprimary/85 backdrop-blur-sm border border-AAborder text-AAtext rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === current ? "bg-AAtext" : "bg-AAtext/40 hover:bg-AAtext/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="text-center">
          <span className="font-mono text-[11px] text-AAmuted">
            {current + 1} of {images.length}
          </span>
        </div>
      )}
    </div>
  );
}
