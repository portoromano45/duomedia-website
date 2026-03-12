"use client";

import { motion } from "framer-motion";

export function ServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      {/* Base Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent-rgb),0.3),transparent_70%)]" />
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--border-rgb),0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--border-rgb),0.3)_1px,transparent_1px)] bg-[size:8rem_8rem]" />

      {/* 5. Glowing Prism - Dominant for Services */}
      <motion.div
        animate={{
          rotate: [360, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-1/4 w-[120%] h-[120%] bg-[conic-gradient(from_0deg,transparent,rgba(var(--accent-rgb),0.4),transparent)] blur-[120px]"
      />

      {/* 2. Audio Waves - Adjusted for Services (Middle Left) */}
      <div className="absolute top-[30%] left-[10%] flex items-end gap-2 opacity-60 h-48">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            animate={{ 
              height: [40, 80 + Math.random() * 120, 40],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1 + Math.random() * 1.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05
            }}
            className="w-3 bg-gradient-to-t from-accent/30 via-accent to-accent/50 rounded-full shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)]"
          />
        ))}
      </div>

      {/* 3. Geometric Clusters & Tool Emoji - Adjusted for Services (Bottom Right) */}
      <div className="absolute bottom-[20%] right-[15%] opacity-50">
         {[...Array(3)].map((_, i) => (
          <motion.div
            key={`social-${i}`}
            animate={{ 
              scale: [1, 1.25, 1],
              rotate: [0, 15, 0],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 1 }}
            className="absolute bg-gradient-to-tr from-accent/30 to-transparent border border-accent/50 rounded-2xl backdrop-blur-md shadow-2xl"
            style={{ 
              width: `${140 + i * 20}px`, 
              height: `${140 + i * 20}px`,
              right: `${i * 30}px`,
              bottom: `${i * 30}px`
            }}
          />
        ))}
        {/* Rocket/Tools Emoji for Services */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 -left-10 text-8xl text-accent opacity-80 drop-shadow-[0_0_30px_rgba(var(--accent-rgb),0.6)] select-none"
        >
          🚀
        </motion.div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
    </div>
  );
}
