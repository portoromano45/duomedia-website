"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export function CookieConsent({ dict }: { dict: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const params = useParams();
  const lang = params.lang as string;
  const t = dict.cookieConsent;

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[10000]"
        >
          <div className="bg-background/80 backdrop-blur-xl border border-border p-6 rounded-3xl shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-xl text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
                </div>
                <p className="text-sm font-medium leading-relaxed text-foreground/80">
                  {t.message}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 bg-foreground text-background text-sm font-bold rounded-xl transition-transform active:scale-95 hover:bg-foreground/90"
                >
                  {t.accept}
                </button>
                <button
                  onClick={handleDecline}
                  className="px-5 py-2.5 bg-background border border-border text-foreground/70 text-sm font-bold rounded-xl transition-colors hover:bg-accent/5"
                >
                  {t.decline}
                </button>
                <Link
                  href={`/${lang}/privacy-policy`}
                  className="text-xs font-semibold text-accent hover:underline ml-auto"
                >
                  {t.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
