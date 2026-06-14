/**
 * AskAI Chat Widget — polished, theme-aware.
 * In-browser Q&A over portfolio content via local vector search + LLM utils.
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LLMResponse } from "../../utils/llm";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const SUGGESTED_QUESTIONS = [
  "What's your experience building RAG systems at scale?",
  "Tell me about the hybrid search work at Leoforce.",
  "Which multi-agent systems have you shipped?",
  "Summarise your research at IIT Bombay.",
];

function formatTime(d: Date) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function AskAI() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const ask = async (question: string = input) => {
    const q = question.trim();
    if (!q || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: q,
      timestamp: new Date(),
    };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const [{ searchContent }, { generateResponse }] = await Promise.all([
        import("../../utils/vectorSearch"),
        import("../../utils/llm"),
      ]);
      const hits = await searchContent(q, 3);
      const response: LLMResponse = await generateResponse(q, hits);
      setMessages((p) => [
        ...p,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response.answer,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      console.error("AskAI error:", err);
      setError("Sorry — I hit an error answering that. Try rephrasing.");
      setMessages((p) => [
        ...p,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I hit an error answering that. Try rephrasing.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      ask();
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating launcher — visibly AI: gradient orb + pill label + pulsing aura */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5">
        {/* Animated "Ask my AI" pill — hidden when chat is open */}
        <AnimatePresence>
          {!open && (
            <motion.button
              key="pill"
              initial={{ opacity: 0, x: 8, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.96 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              onClick={() => setOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-AAprimary/90 backdrop-blur-sm border border-AAborder hover:border-AAborder-strong text-AAtext text-xs font-medium pl-2.5 pr-3 py-2 rounded-full shadow-lg shadow-black/10 transition-colors"
            >
              <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase text-violet-400">
                AI
              </span>
              <span className="text-AAmuted">·</span>
              <span>Ask me</span>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 280, damping: 22 }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close AI assistant" : "Open AI assistant"}
          className="relative w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150"
        >
          {/* Pulsing aura behind the orb */}
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 opacity-60 blur-md animate-pulse" />
              <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/30 to-sky-400/30 blur-xl animate-pulse" />
            </>
          )}

          {/* Gradient orb */}
          <span
            className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30 ${
              open
                ? "bg-AAtext text-AAprimary"
                : "bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 text-white"
            }`}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Sparkles / AI glyph
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2z" />
                <path d="M19 14l.9 2.4L22 17l-2.1.6L19 20l-.9-2.4L16 17l2.1-.6L19 14z" />
                <path d="M5 14l.7 1.8L7.5 16l-1.8.7L5 18.5l-.7-1.8L2.5 16l1.8-.7L5 14z" />
              </svg>
            )}
          </span>

          {/* Status dot */}
          {!open && (
            <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-AAprimary" />
          )}
        </motion.button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[min(640px,calc(100vh-7rem))] flex flex-col bg-AAprimary border border-AAborder rounded-2xl shadow-2xl shadow-black/30 overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-5 py-4 border-b border-AAborder flex items-center justify-between overflow-hidden">
              {/* subtle gradient wash */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-400" />
              <div className="relative flex items-center gap-3 min-w-0">
                <div className="relative w-9 h-9 rounded-full flex items-center justify-center shadow-md shadow-violet-500/30">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400" />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="relative">
                    <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2z" />
                    <path d="M19 14l.9 2.4L22 17l-2.1.6L19 20l-.9-2.4L16 17l2.1-.6L19 14z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-AAtext text-sm font-medium truncate">Ask my AI</span>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-violet-400 border border-violet-500/30 rounded-full px-1.5 py-0.5">
                      Beta
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-AAmuted text-[11px] font-mono">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    Runs locally · in your browser
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="relative text-AAmuted hover:text-AAtext transition-colors p-1"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 ? (
                <div className="py-3">
                  <p className="text-AAtext text-sm leading-relaxed mb-4">
                    <span className="font-medium text-AAtext">AI assistant</span> trained on Sandy's portfolio. Ask anything about her work, projects, or research, answered live from her resume and case studies.
                  </p>
                  <p className="text-AAmuted text-[11px] font-mono tracking-wider uppercase mb-2">
                    Try
                  </p>
                  <div className="space-y-1.5">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => ask(q)}
                        className="block w-full text-left text-sm text-AAtext bg-AAsurface/60 hover:bg-AAsurface border border-AAborder hover:border-AAborder-strong rounded-lg px-3 py-2 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-AAtext text-AAprimary rounded-br-md"
                          : "bg-AAsurface text-AAtext border border-AAborder rounded-bl-md"
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">{m.content}</p>
                      <p className={`text-[10px] font-mono mt-1.5 ${m.role === "user" ? "opacity-60" : "text-AAmuted"}`}>
                        {formatTime(m.timestamp)}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-AAsurface text-AAtext border border-AAborder rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-AAmuted animate-pulse" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-AAmuted animate-pulse" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-AAmuted animate-pulse" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <p className="text-center text-AAError text-xs font-mono py-1">{error}</p>
              )}

              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="border-t border-AAborder p-3 bg-AAprimary">
              <div className="flex items-center gap-2 bg-AAsurface/60 border border-AAborder focus-within:border-AAborder-strong rounded-xl pl-3.5 pr-1.5 h-11 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Ask me something…"
                  disabled={loading}
                  className="flex-1 min-w-0 h-full bg-transparent text-AAtext placeholder-AAmuted text-sm leading-none outline-none disabled:opacity-50"
                />
                <button
                  onClick={() => ask()}
                  disabled={!input.trim() || loading}
                  aria-label="Send"
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-AAtext text-AAprimary inline-flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
              <p className="font-mono text-[10px] tracking-wider text-AAmuted text-center mt-2">
                Press Enter to send · first load downloads the model
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
