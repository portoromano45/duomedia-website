"use client";

import { motion } from "framer-motion";

export function PortfolioBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(var(--accent-rgb),0.5),transparent_70%)]" />
      
      {/* Maximum visibility frames */}
      <div className="absolute inset-0 opacity-100">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`frame-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1.1, 0.95],
              rotate: [i % 2 === 0 ? -4 : 4, i % 2 === 0 ? 4 : -4]
            }}
            transition={{ duration: 8 + i * 1.5, repeat: Infinity, delay: i }}
            className="absolute border-4 border-accent bg-accent/30 backdrop-blur-lg shadow-[0_0_40px_rgba(var(--accent-rgb),0.5)] rounded-2xl"
            style={{ 
               width: `${200 + (i % 3) * 120}px`, 
               height: `${250 + (i % 2) * 100}px`,
               left: `${(i * 12) % 85}%`,
               top: `${(i * 15) % 80}%`
            }}
          >
             <div className="absolute inset-4 border-2 border-accent/80 rounded-xl" />
          </motion.div>
        ))}

        {/* Intensely bright spotlight */}
        <motion.div
           animate={{
               x: ["-100%", "200%"],
               opacity: [0, 1, 0]
           }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent skew-x-[-30deg] mix-blend-screen"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.6)_60%,var(--background)_100%)]" />
    </div>
  );
}
