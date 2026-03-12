"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ThemeToggle } from "../ui/ThemeToggle";

export function MobileMenu({ dict, lang }: { dict: any; lang: "sq" | "it" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      } as const,
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } as const,
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-[110] p-2 text-foreground focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between items-center">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-current rounded-full"
          />
        </div>
      </button>

      {/* Menu Overlay - Rendered in Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-[9999] bg-background backdrop-blur-3xl flex flex-col pt-32 px-8 shadow-2xl"
            >
              {/* Close Button Inside Menu */}
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 p-2 text-foreground focus:outline-none"
                aria-label="Close Menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <nav className="flex flex-col gap-5">
                <motion.div variants={itemVariants}>
                  <Link
                    href={`/${lang}/about`}
                    onClick={closeMenu}
                    className="text-lg font-sans font-medium hover:text-accent transition-colors"
                  >
                    {dict.nav.about}
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    href={`/${lang}/services`}
                    onClick={closeMenu}
                    className="text-lg font-sans font-medium hover:text-accent transition-colors"
                  >
                    {dict.nav.services}
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    href={`/${lang}/portfolio`}
                    onClick={closeMenu}
                    className="text-lg font-sans font-medium hover:text-accent transition-colors"
                  >
                    {dict.nav.portfolio}
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    href={`/${lang}/values`}
                    onClick={closeMenu}
                    className="text-lg font-sans font-medium hover:text-accent transition-colors"
                  >
                    {dict.nav.values}
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants} className="pt-6 mt-2 border-t border-border">
                  <Link
                    href={`/${lang}/contact`}
                    onClick={closeMenu}
                    className="inline-block text-base font-sans font-bold px-6 py-3 rounded-full bg-foreground text-background"
                  >
                    {dict.nav.contact}
                  </Link>
                </motion.div>
              </nav>

              <motion.div 
                variants={itemVariants} 
                className="mt-auto pb-12 flex items-center justify-between"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/40">Settings</span>
                  <div className="flex items-center gap-4">
                    <LanguageSwitcher currentLang={lang} />
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>

              {/* Background decorative element */}
              <div className="absolute bottom-0 right-0 w-64 h-64 shiny-crumpled-hologram opacity-20 pointer-events-none rounded-tl-full" />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
