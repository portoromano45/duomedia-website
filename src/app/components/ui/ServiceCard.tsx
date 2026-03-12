'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

export function ServiceCard({ title, description, index }: { title: string, description: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 bg-card-bg rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent/30 transition-colors group h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
        <span className="font-serif italic text-xl">{index + 1}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </motion.div>
  )
}
