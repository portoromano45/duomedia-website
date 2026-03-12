"use client";

import { motion } from "framer-motion";

export function ValuesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--accent-rgb),0.2),transparent_60%)]" />
      
      {/* Abstract foundation/pillar shapes */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`pillar-${i}`}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, delay: i * 1.5, ease: "easeInOut" }}
            className="absolute bottom-0 border border-accent/40 bg-accent/5 backdrop-blur-sm origin-bottom"
            style={{ 
               width: `${40 + (i % 3) * 20}px`, 
               height: `${30 + (i * 15)}%`,
               left: `${15 + (i * 20)}%`
            }}
          />
        ))}

        {/* Gentle upward floating particles / seeds of growth */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            animate={{ 
              y: ["100vh", "-20vh"],
              x: [
                  `${20 + (i % 5) * 15}vw`, 
                  `${20 + (i % 5) * 15 + (i % 2 === 0 ? 5 : -5)}vw`
              ],
              opacity: [0, 0.6, 0]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.8)]"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.8)_80%,var(--background)_100%)]" />
    </div>
  );
}
