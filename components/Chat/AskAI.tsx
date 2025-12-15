/**
 * AskAI Chat Widget Component
 * Floating AI assistant for portfolio Q&A
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { SearchResult } from '../../utils/vectorSearch';
import type { LLMResponse } from '../../utils/llm';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What's the experience with building RAG systems at scale?",
  "Tell me about the hybrid search project at Leoforce",
  "What multi-agent systems have been developed?",
  "What are the key technical skills and technologies used?",
];

export default function AskAI() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Only render on client-side to avoid SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleAsk = async (question: string = input) => {
    if (!question.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      // Dynamically import the modules only when needed (client-side only)
      const [{ searchContent }, { generateResponse }] = await Promise.all([
        import('../../utils/vectorSearch'),
        import('../../utils/llm'),
      ]);

      // Search for relevant content
      const searchResults = await searchContent(question, 3);

      // Generate AI response
      const response: LLMResponse = await generateResponse(question, searchResults);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.answer,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error in handleAsk:', err);
      setError('Sorry, I encountered an error. Please try again.');

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your question. Please try again or rephrase your question.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    handleAsk(question);
  };

  // Don't render until mounted (client-side only)
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-AAsecondary hover:bg-opacity-90 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-AAprimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-AAprimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[600px] max-h-[600px] bg-AAtertiary border border-gray-700 rounded-lg shadow-2xl flex flex-col"
        >
            {/* Header */}
            <div className="bg-AAprimary border-b border-gray-700 px-3 sm:px-4 py-3 sm:py-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-200 font-semibold text-base sm:text-lg">AI Assistant</h3>
                  <p className="text-gray-400 text-xs truncate">Ask about experience and projects</p>
                </div>
                <div className="flex items-center gap-1 text-AAsecondary text-xs font-medium">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="hidden sm:inline">Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 space-y-3 sm:space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-4 sm:py-8">
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 px-2 sm:px-4">
                    Ask me anything about experience, skills, projects, or achievements.
                  </p>
                  <div className="space-y-2 px-2 sm:px-3">
                    <p className="text-gray-500 text-xs mb-2 sm:mb-3 font-medium">Suggested Questions:</p>
                    {SUGGESTED_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="block w-full text-left text-xs text-AAsecondary hover:text-white bg-AAprimary hover:bg-opacity-50 px-2 sm:px-3 py-2 rounded border border-gray-700 hover:border-AAsecondary transition-all duration-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] px-3 sm:px-4 py-2 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-AAsecondary text-AAprimary'
                          : 'bg-AAprimary text-gray-300 border border-gray-700'
                      }`}
                    >
                      <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">{msg.content}</p>
                      <p className="text-xs opacity-50 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-AAprimary text-gray-300 px-4 py-2 rounded-lg border border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-AAsecondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-AAsecondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-AAsecondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <div className="text-center text-AAError text-xs py-2">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-700 px-3 sm:px-4 py-2.5 sm:py-3 bg-AAprimary rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about experience..."
                  disabled={loading}
                  className="flex-1 bg-AAtertiary text-gray-300 placeholder-gray-500 border border-gray-700 rounded px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-AAsecondary transition-colors disabled:opacity-50"
                />
                <button
                  onClick={() => handleAsk()}
                  disabled={!input.trim() || loading}
                  className="bg-AAsecondary hover:bg-opacity-90 text-AAprimary px-3 sm:px-4 py-2 rounded font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
        </motion.div>
      )}
    </>
  );
}
