'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (lang: string) => {
    if (!pathname) return
    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`)
    router.push(newPath)
  }

  return (
    <div className="flex gap-1 bg-black/5 dark:bg-white/10 p-1 rounded-full items-center text-sm font-medium">
      <button
        onClick={() => switchLanguage('sq')}
        className={`px-3 py-1 rounded-full transition-colors relative ${currentLang === 'sq' ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
      >
        {currentLang === 'sq' && (
          <motion.div layoutId="lang-active" className="absolute inset-0 bg-background dark:bg-card shadow-sm rounded-full -z-10" />
        )}
        SQ
      </button>
      <button
        onClick={() => switchLanguage('it')}
        className={`px-3 py-1 rounded-full transition-colors relative ${currentLang === 'it' ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
      >
        {currentLang === 'it' && (
          <motion.div layoutId="lang-active" className="absolute inset-0 bg-background dark:bg-card shadow-sm rounded-full -z-10" />
        )}
        IT
      </button>
    </div>
  )
}
