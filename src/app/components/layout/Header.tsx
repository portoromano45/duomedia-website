import Link from 'next/link'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { MobileMenu } from './MobileMenu'

export async function Header({ lang }: { lang: 'sq' | 'it' }) {
  const dict = await getDictionary(lang)
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-black/5 dark:border-white/5 transition-colors">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-2xl font-serif font-bold tracking-tighter shrink-0">
          DuoMedia<span className="text-accent">.</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href={`/${lang}/about`} className="hover:text-accent transition-colors">{dict.nav.about}</Link>
          <Link href={`/${lang}/services`} className="hover:text-accent transition-colors">{dict.nav.services}</Link>
          <Link href={`/${lang}/portfolio`} className="hover:text-accent transition-colors">{dict.nav.portfolio}</Link>
          <Link href={`/${lang}/values`} className="hover:text-accent transition-colors">{dict.nav.values}</Link>
        </nav>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={`/${lang}/contact`} className="hidden md:block text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:scale-105 transition-transform">
            {dict.nav.contact}
          </Link>
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <MobileMenu dict={dict} lang={lang} />
        </div>
      </div>
    </header>
  )
}
