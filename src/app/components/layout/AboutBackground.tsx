"use client";

import { motion } from "framer-motion";

export function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      {/* Intense radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-rgb),0.5),transparent_70%)]" />
      
      {/* Abstract floating portraits / connection points - Maximum visibility */}
      <div className="absolute inset-0 opacity-100">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              y: [0, -30, 0],
              x: [0, 20, 0]
            }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, delay: i }}
            className="absolute rounded-full border-2 border-accent bg-accent/20 backdrop-blur-md shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)]"
            style={{ 
              width: `${120 + i * 50}px`, 
              height: `${120 + i * 50}px`,
              left: `${10 + (i * 20)}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          />
        ))}

        {/* Connecting lines - Bright and thick */}
        <svg className="absolute inset-0 w-full h-full opacity-100">
            <motion.path
                d="M 100,300 C 300,200 500,500 800,300 C 1100,100 1300,400 1600,200"
                fill="none"
                stroke="rgba(var(--accent-rgb), 1)"
                strokeWidth="4"
                strokeDasharray="10 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.6)_60%,var(--background)_100%)]" />
    </div>
  );
}
