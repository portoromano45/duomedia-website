"use client";

import { motion } from "framer-motion";

export function PortfolioBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(var(--accent-rgb),0.2),transparent_60%)]" />
      
      {/* Dynamic Gallery / Appereance blocks */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`frame-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              scale: [0.95, 1.05, 0.95],
              rotate: [i % 2 === 0 ? -2 : 2, i % 2 === 0 ? 2 : -2]
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 1.5 }}
            className="absolute border border-accent/40 bg-accent/5 backdrop-blur-md rounded-xl"
            style={{ 
               width: `${150 + (i % 3) * 100}px`, 
               height: `${200 + (i % 2) * 80}px`,
               left: `${(i * 15) % 80}%`,
               top: `${(i * 20) % 70}%`
            }}
          >
             <div className="absolute inset-2 border border-accent/20 rounded-lg" />
          </motion.div>
        ))}

        {/* Diagonal spotlight sweep */}
        <motion.div
           animate={{
               x: ["-100%", "200%"],
               opacity: [0, 0.3, 0]
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
           className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-accent/30 to-transparent skew-x-[-20deg]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.8)_80%,var(--background)_100%)]" />
    </div>
  );
}
