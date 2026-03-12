"use client";

import { motion } from "framer-motion";

export function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-rgb),0.15),transparent_60%)]" />
      
      {/* Abstract floating portraits / connection points */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              y: [0, -20, 0],
              x: [0, 15, 0]
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i }}
            className="absolute rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm"
            style={{ 
              width: `${100 + i * 40}px`, 
              height: `${100 + i * 40}px`,
              left: `${10 + (i * 20)}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          />
        ))}

        {/* Connecting lines between nodes to symbolize timeline/story */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.path
                d="M 100,300 C 300,200 500,500 800,300 C 1100,100 1300,400 1600,200"
                fill="none"
                stroke="rgba(var(--accent-rgb), 0.5)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.8)_80%,var(--background)_100%)]" />
    </div>
  );
}
