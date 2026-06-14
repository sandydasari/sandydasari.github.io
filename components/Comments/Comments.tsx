/**
 * Giscus comments — GitHub Discussions-backed.
 *
 * Setup checklist (one-time, ~3 minutes):
 *   1. Make your repo public (or use a separate public repo for discussions).
 *   2. Repo → Settings → General → Features → enable "Discussions".
 *   3. In Discussions, create a category (e.g. "Announcements" or "Comments")
 *      with the discussion format set to "Announcement" (recommended).
 *   4. Install the giscus app on the repo: https://github.com/apps/giscus
 *   5. Visit https://giscus.app and fill in your repo + category to get the
 *      `repoId` and `categoryId` strings. Paste them into giscusConfig in
 *      utils/site-data.ts.
 */

import React, { useEffect, useRef } from "react";
import { useTheme } from "../Theme/ThemeProvider";
import { giscusConfig } from "../../utils/site-data";

type Props = {
  /** Optional mapping key — defaults to "pathname". Use "specific" + `term` to pin a thread. */
  mapping?: "pathname" | "url" | "title" | "og:title" | "specific";
  term?: string;
};

const GISCUS_THEME = {
  dark: "dark_dimmed",
  light: "light",
} as const;

export default function Comments({ mapping = "pathname", term }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Initial mount — inject the giscus script
  useEffect(() => {
    if (!ref.current) return;
    if (!giscusConfig.repo || !giscusConfig.repoId || !giscusConfig.categoryId) {
      return; // not configured yet
    }

    // Read the real, paint-time theme from <html> — the React `theme` state
    // hasn't hydrated from localStorage yet on first mount, so trusting it
    // would inject the iframe with the wrong palette and only flip it after
    // a postMessage round-trip.
    const initialTheme = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";

    // Clear any previous iframe (handles hot reload + route changes)
    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", giscusConfig.repo);
    script.setAttribute("data-repo-id", giscusConfig.repoId);
    script.setAttribute("data-category", giscusConfig.category);
    script.setAttribute("data-category-id", giscusConfig.categoryId);
    script.setAttribute("data-mapping", mapping);
    if (mapping === "specific" && term) script.setAttribute("data-term", term);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", GISCUS_THEME[initialTheme]);
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    ref.current.appendChild(script);
    // We intentionally don't depend on `theme` here — theme changes are sent
    // via postMessage below so we don't reload the entire iframe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapping, term]);

  // Sync theme without reloading the iframe
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: GISCUS_THEME[theme] } } },
      "https://giscus.app",
    );
  }, [theme]);

  if (!giscusConfig.repo || !giscusConfig.repoId || !giscusConfig.categoryId) {
    return (
      <div className="mt-16 border border-dashed border-AAborder rounded-xl p-6 text-AAmuted text-sm leading-relaxed">
        <p className="font-mono text-[10px] tracking-widest uppercase text-AAmuted mb-2">
          Comments
        </p>
        <p className="text-AAtext font-medium mb-1">Giscus isn't configured yet.</p>
        <p>
          Visit <a href="https://giscus.app" target="_blank" rel="noreferrer" className="underline underline-offset-2">giscus.app</a> to get the
          <code className="font-mono text-xs mx-1 bg-AAsurface border border-AAborder rounded px-1.5 py-0.5">repoId</code> and
          <code className="font-mono text-xs mx-1 bg-AAsurface border border-AAborder rounded px-1.5 py-0.5">categoryId</code>
          for your repo, then paste them into <code className="font-mono text-xs bg-AAsurface border border-AAborder rounded px-1.5 py-0.5">giscusConfig</code> in
          <code className="font-mono text-xs ml-1 bg-AAsurface border border-AAborder rounded px-1.5 py-0.5">utils/site-data.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="font-serif text-xl font-medium text-AAtext">Comments</h3>
        <span className="flex-1 h-px bg-AAborder" />
        <span className="font-mono text-[10px] tracking-widest uppercase text-AAmuted">
          powered by giscus
        </span>
      </div>
      <div ref={ref} className="giscus" />
    </div>
  );
}
