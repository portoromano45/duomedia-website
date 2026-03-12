"use client";

import { motion } from "framer-motion";

export function PortfolioBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      {/* Base Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--accent-rgb),0.3),transparent_70%)]" />
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--border-rgb),0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--border-rgb),0.3)_1px,transparent_1px)] bg-[size:8rem_8rem]" />

      {/* 1. Abstract Window Fragments - Gallery style for Portfolio */}
      <div className="absolute inset-0 opacity-70">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`web-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [0.95, 1.05, 0.95],
              rotate: [i % 2 === 0 ? -3 : 3, i % 2 === 0 ? 3 : -3]
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 1.5 }}
            className="absolute border-2 border-accent/60 bg-accent/15 backdrop-blur-[6px] shadow-2xl shadow-accent/20"
            style={{ 
              width: `${180 + (i % 3) * 80}px`, 
              height: `${240 + (i % 2) * 60}px`,
              left: `${(i * 18) % 85}%`,
              top: `${(i * 15) % 75}%`
            }}
          >
            <div className="absolute inset-3 border border-accent/40 bg-accent/5 backdrop-blur-sm" />
          </motion.div>
        ))}
      </div>

      {/* 3. Geometric Clusters & Star Emoji - Adjusted for Portfolio */}
      <div className="absolute top-[15%] left-[10%] opacity-60">
        {/* Sparkle/Star Emoji for Portfolio */}
        <motion.div 
          animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 180], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 left-0 text-7xl text-accent drop-shadow-[0_0_40px_rgba(var(--accent-rgb),0.8)] select-none"
        >
          ✨
        </motion.div>
      </div>

      {/* 4. Elegant Flowing Path - Adjusted for Portfolio */}
      <svg className="absolute w-full h-full opacity-50">
        <motion.path
          d="M 2000,200 C 1600,600 1400,100 1000,500 C 600,900 400,400 -100,800"
          fill="none"
          stroke="rgba(var(--accent-rgb), 0.9)"
          strokeWidth="4"
          strokeDasharray="20 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Bottom fade to content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
    </div>
  );
}
