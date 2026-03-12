"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      {/* Base Warm Glow - Enhanced */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.2),transparent_70%)]" />
      
      {/* 1. Websites - Abstract Window Fragments - Increased Visibility */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`web-${i}`}
            initial={{ opacity: 0, x: i * 100, y: i * 50 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              y: [i * 50, i * 50 - 30, i * 50]
            }}
            transition={{ duration: 12 + i, repeat: Infinity, delay: i * 2 }}
            className="absolute border border-accent/40 rounded-xl bg-accent/10 backdrop-blur-[4px] shadow-2xl shadow-accent/5"
            style={{ 
              width: `${250 + i * 120}px`, 
              height: `${180 + i * 60}px`,
              left: `${5 + i * 25}%`,
              top: `${10 + i * 15}%`
            }}
          >
            <div className="flex gap-2 p-4 border-b border-accent/30 bg-accent/5">
              <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/50" />
            </div>
            <div className="p-4 space-y-3">
              <div className="h-2 w-3/4 bg-accent/20 rounded" />
              <div className="h-2 w-1/2 bg-accent/20 rounded" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Voice-Over - Audio Waves - More Vibrant & Taller */}
      <div className="absolute bottom-[20%] left-[15%] flex items-end gap-1.5 opacity-40 h-32">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            animate={{ 
              height: [30, 60 + Math.random() * 80, 30],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 1.2 + Math.random(), 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08
            }}
            className="w-2 bg-gradient-to-t from-accent/20 via-accent to-accent/40 rounded-full shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]"
          />
        ))}
      </div>

      {/* 3. Social Media - Geometric Clusters - Stronger and more defined */}
      <div className="absolute top-[20%] right-[10%] opacity-30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`social-${i}`}
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 8, 0],
              x: [0, 15, 0]
            }}
            transition={{ duration: 7 + i, repeat: Infinity, delay: i * 1.2 }}
            className="absolute bg-gradient-to-br from-accent/20 to-transparent border border-accent/40 rounded-3xl backdrop-blur-md shadow-2xl"
            style={{ 
              width: `${100 + i * 25}px`, 
              height: `${80 + i * 20}px`,
              right: `${i * 50}px`,
              top: `${i * 40}px`
            }}
          />
        ))}
        {/* Abstract "Like" heart silhouette - Larger and brighter */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-16 -right-16 text-6xl text-accent opacity-50 drop-shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)] select-none"
        >
          ❤️
        </motion.div>
      </div>

      {/* 4. Copywriting - Elegant Flowing Path - Thicker and more visible */}
      <svg className="absolute w-full h-full opacity-25">
        <motion.path
          d="M -100,600 C 400,350 600,850 1000,600 C 1400,350 1600,850 2000,600"
          fill="none"
          stroke="rgba(var(--accent-rgb), 0.7)"
          strokeWidth="2"
          strokeDasharray="10 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* 5. Content Creation - Glowing Prism - Stronger Blur and glow */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-full h-full bg-[conic-gradient(from_0deg,transparent,rgba(var(--accent-rgb),0.3),transparent)] blur-[150px]"
      />

      {/* Architectural Grid - Stronger lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--border-rgb),0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--border-rgb),0.2)_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-30" />

      {/* Bottom fade to content - Sharper gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
    </div>
  );
}
