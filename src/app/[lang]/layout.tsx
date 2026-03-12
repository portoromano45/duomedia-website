import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { ThemeProvider } from '@/app/components/providers/ThemeProvider'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { CookieConsent } from '@/app/components/layout/CookieConsent'
import { getDictionary } from '@/lib/i18n/getDictionary'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-cormorant' })

export const metadata: Metadata = {
  title: 'DuoMedia Solutions',
  description: 'Create with Purpose. Grow with Passion.',
}

export async function generateStaticParams() {
  return [{ lang: 'sq' }, { lang: 'it' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as 'sq' | 'it';
  const dict = await getDictionary(lang);
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} min-h-screen flex flex-col font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-white`}>
        <ThemeProvider>
          <Header lang={lang} />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer lang={lang} />
          <CookieConsent dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  )
}
