"use client";

import { motion } from "framer-motion";

export function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      {/* Base Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(var(--accent-rgb),0.25),transparent_70%)]" />
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--border-rgb),0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--border-rgb),0.3)_1px,transparent_1px)] bg-[size:8rem_8rem]" />

      {/* 1. Abstract Window Fragments - Adjusted for About (Center Left) */}
      <div className="absolute inset-0 opacity-60">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`web-${i}`}
            initial={{ opacity: 0, x: -50, y: i * 50 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [i * 50 + 20, i * 50 - 20, i * 50 + 20]
            }}
            transition={{ duration: 12 + i, repeat: Infinity, delay: i * 2 }}
            className="absolute border border-accent/50 rounded-xl bg-accent/10 backdrop-blur-[4px] shadow-2xl shadow-accent/10"
            style={{ 
              width: `${200 + i * 80}px`, 
              height: `${150 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 15}%`
            }}
          >
            <div className="flex gap-2 p-4 border-b border-accent/40 bg-accent/10">
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Geometric Clusters & Human/Team Emoji - Adjusted for About (Top Right) */}
      <div className="absolute top-[10%] right-[15%] opacity-50">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`social-${i}`}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 0],
              y: [0, 15, 0]
            }}
            transition={{ duration: 8 + i, repeat: Infinity, delay: i * 1.5 }}
            className="absolute bg-gradient-to-br from-accent/30 to-transparent border border-accent/50 rounded-full backdrop-blur-md shadow-2xl"
            style={{ 
              width: `${120 + i * 30}px`, 
              height: `${120 + i * 30}px`,
              right: `${i * 40}px`,
              top: `${i * 30}px`
            }}
          />
        ))}
        {/* Handshake/Team Emoji for About */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 text-8xl text-accent opacity-70 drop-shadow-[0_0_30px_rgba(var(--accent-rgb),0.6)] select-none"
        >
          🤝
        </motion.div>
      </div>

      {/* 4. Elegant Flowing Path - Adjusted for About */}
      <svg className="absolute w-full h-full opacity-40">
        <motion.path
          d="M -100,200 C 400,150 600,650 1000,400 C 1400,150 1600,650 2000,400"
          fill="none"
          stroke="rgba(var(--accent-rgb), 0.8)"
          strokeWidth="3"
          strokeDasharray="15 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Bottom fade to content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
    </div>
  );
}
