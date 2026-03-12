"use client";

import { motion } from "framer-motion";

export function ValuesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--accent-rgb),0.5),transparent_70%)]" />
      
      {/* Maximum visibility pillars */}
      <div className="absolute inset-0 opacity-100">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`pillar-${i}`}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ 
              opacity: [0.5, 0.9, 0.5],
              scaleY: [0.9, 1.4, 0.9]
            }}
            transition={{ duration: 10 + i * 1.5, repeat: Infinity, delay: i, ease: "easeInOut" }}
            className="absolute bottom-0 border-4 border-accent bg-accent/30 backdrop-blur-md origin-bottom shadow-[0_0_30px_rgba(var(--accent-rgb),0.6)]"
            style={{ 
               width: `${60 + (i % 3) * 30}px`, 
               height: `${40 + (i * 15)}%`,
               left: `${10 + (i * 16)}%`
            }}
          />
        ))}

        {/* Huge, bright floating glowing orbs */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            animate={{ 
              y: ["100vh", "-20vh"],
              x: [
                  `${10 + (i % 6) * 15}vw`, 
                  `${10 + (i % 6) * 15 + (i % 2 === 0 ? 10 : -10)}vw`
              ],
              opacity: [0, 1, 0],
              scale: [1, 2, 1]
            }}
            transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 3 }}
            className="absolute rounded-full bg-accent shadow-[0_0_20px_rgba(var(--accent-rgb),1),0_0_40px_rgba(var(--accent-rgb),1)]"
            style={{
              width: `${10 + Math.random() * 10}px`,
              height: `${10 + Math.random() * 10}px`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.5)_50%,var(--background)_100%)]" />
    </div>
  );
}
