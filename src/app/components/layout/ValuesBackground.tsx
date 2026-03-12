"use client";

import { motion } from "framer-motion";

export function ValuesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      {/* Base Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(var(--accent-rgb),0.3),transparent_70%)]" />
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--border-rgb),0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--border-rgb),0.3)_1px,transparent_1px)] bg-[size:8rem_8rem]" />

      {/* 3. Geometric Clusters & Diamond Emoji - Adjusted for Values (Center Top) */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 opacity-70">
         {[...Array(4)].map((_, i) => (
          <motion.div
            key={`social-${i}`}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [45, 90, 45],
            }}
            transition={{ duration: 8 + i, repeat: Infinity, delay: i * 1.5 }}
            className="absolute bg-gradient-to-b from-accent/40 to-transparent border border-accent/60 backdrop-blur-md shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)]"
            style={{ 
              width: `${100 + i * 40}px`, 
              height: `${100 + i * 40}px`,
              left: `-${(i * 20)}px`,
              top: `${i * 10}px`
            }}
          />
        ))}
        {/* Diamond/Gem Emoji for Values */}
        <motion.div 
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 left-10 text-9xl text-accent drop-shadow-[0_0_50px_rgba(var(--accent-rgb),0.8)] select-none"
        >
          💎
        </motion.div>
      </div>

       {/* 2. Audio Waves - Adjusted for Values (Bottom spreading across) */}
       <div className="absolute bottom-[20%] left-[5%] right-[5%] flex justify-between items-end gap-2 opacity-50 h-32">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            animate={{ 
              height: [20, 50 + Math.random() * 80, 20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 1.5 + Math.random() * 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05
            }}
            className="w-2 bg-gradient-to-t from-accent/40 via-accent to-accent/60 rounded-full shadow-[0_0_20px_rgba(var(--accent-rgb),0.6)]"
          />
        ))}
      </div>

      {/* 5. Glowing Prism - Soft aura around values */}
      <motion.div
        animate={{
          rotate: [0, -360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-20%] w-full h-[150%] bg-[conic-gradient(from_0deg,transparent,rgba(var(--accent-rgb),0.5),transparent)] blur-[150px]"
      />

      {/* Bottom fade to content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
    </div>
  );
}
