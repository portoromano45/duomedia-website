"use client";

import { motion } from "framer-motion";

export function ServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      {/* Intense glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.4),transparent_80%)]" />
      
      <div className="absolute inset-0 opacity-100">
        {/* Highly visible grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--accent-rgb),0.4)_2px,transparent_2px),linear-gradient(to_bottom,rgba(var(--accent-rgb),0.4)_2px,transparent_2px)] bg-[size:5rem_5rem]" />
        
        {/* Floating blocks - Bright and saturated */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`block-${i}`}
            initial={{ opacity: 0, y: 200 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              y: [-50, -200 - i * 80]
            }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, delay: i, ease: "linear" }}
            className="absolute rounded-lg bg-accent/60 backdrop-blur-md shadow-[0_0_20px_rgba(var(--accent-rgb),0.6)]"
            style={{ 
               width: `${30 + i * 20}px`, 
               height: `${60 + i * 30}px`,
               left: `${10 + i * 12}%`,
               bottom: "-10%"
            }}
          />
        ))}

        {/* Huge, bright pulse rings */}
        <motion.div
            animate={{ scale: [1, 2.5], opacity: [1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="absolute left-[20%] top-[30%] w-64 h-64 rounded-full border-4 border-accent shadow-[0_0_40px_rgba(var(--accent-rgb),0.8)]"
        />
        <motion.div
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
            className="absolute right-[20%] bottom-[30%] w-80 h-80 rounded-full border-4 border-accent shadow-[0_0_40px_rgba(var(--accent-rgb),0.8)]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.6)_70%,var(--background)_100%)]" />
    </div>
  );
}
