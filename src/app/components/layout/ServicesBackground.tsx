"use client";

import { motion } from "framer-motion";

export function ServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.25),transparent_70%)]" />
      
      {/* Dynamic grid / tech aesthetic to match digital services */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--accent-rgb),0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--accent-rgb),0.25)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Floating Code/Data Blocks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`block-${i}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [-50, -100 - i * 50]
            }}
            transition={{ duration: 15 + i * 3, repeat: Infinity, delay: i * 2, ease: "linear" }}
            className="absolute rounded bg-accent/40 backdrop-blur-sm"
            style={{ 
               width: `${20 + i * 15}px`, 
               height: `${40 + i * 20}px`,
               left: `${15 + i * 15}%`,
               bottom: "0"
            }}
          />
        ))}

        {/* Pulse rings */}
        <motion.div
            animate={{ scale: [1, 2], opacity: [0.8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            className="absolute left-1/4 top-1/3 w-32 h-32 rounded-full border-2 border-accent/80"
        />
        <motion.div
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
            className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full border-2 border-accent/70"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--background-rgb),0.85)_85%,var(--background)_100%)]" />
    </div>
  );
}
