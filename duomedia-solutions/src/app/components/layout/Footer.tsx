import Link from 'next/link'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

export async function Footer({ lang }: { lang: 'sq' | 'it' }) {
  const dict = await getDictionary(lang)
  
  return (
    <footer className="w-full py-16 mt-auto bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href={`/${lang}`} className="text-2xl font-serif font-bold tracking-tighter mb-4 inline-block">
              DuoMedia<span className="text-accent">.</span>
            </Link>
            <p className="font-serif text-lg italic text-foreground/80 leading-relaxed max-w-sm">
              "{dict.footer.tagline}"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground/90 uppercase tracking-wider text-sm">Menu</h4>
            <nav className="flex flex-col gap-3 text-sm text-foreground/70">
              <Link href={`/${lang}`} className="hover:text-accent transition-colors">{dict.nav.home}</Link>
              <Link href={`/${lang}/about`} className="hover:text-accent transition-colors">{dict.nav.about}</Link>
              <Link href={`/${lang}/services`} className="hover:text-accent transition-colors">{dict.nav.services}</Link>
              <Link href={`/${lang}/values`} className="hover:text-accent transition-colors">{dict.nav.values}</Link>
              <Link href={`/${lang}/portfolio`} className="hover:text-accent transition-colors">{dict.nav.portfolio}</Link>
              <Link href={`/${lang}/contact`} className="hover:text-accent transition-colors">{dict.nav.contact}</Link>
            </nav>
          </div>

          {/* Services List */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground/90 uppercase tracking-wider text-sm">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-foreground/70">
              <li>Social Media</li>
              <li>Copywriting</li>
              <li>Content Creation</li>
              <li>Voice-Over</li>
              <li>Websites</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground/90 uppercase tracking-wider text-sm">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-foreground/70 mb-6">
              <a href="mailto:duomediasolutions@gmail.com" className="hover:text-accent transition-colors">duomediasolutions@gmail.com</a>
              <a href="https://instagram.com/duomediasolutions" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@duomediasolutions</a>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-foreground/60">{dict.footer.newsletterTitle}</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background border border-border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:border-accent transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  {dict.footer.subscribe}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-foreground/60">{dict.footer.copyright}</p>
            <Link 
              href={`/${lang}/privacy-policy`} 
              className="text-sm text-foreground/40 hover:text-accent transition-colors"
            >
              {dict.footer.privacyLink}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
