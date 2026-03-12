import { getDictionary } from "@/lib/i18n/getDictionary";
import { SmoothReveal } from "@/app/components/ui/SmoothReveal";
import { MagneticButton } from "@/app/components/ui/MagneticButton";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.contact;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-background border-b border-border">
        <div className="absolute inset-0 shiny-crumpled-hologram pointer-events-none opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SmoothReveal delay={0.1} direction="down">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 max-w-4xl mx-auto text-balance">
              {t.hero.heading}
            </h1>
          </SmoothReveal>
          <SmoothReveal delay={0.2} direction="up">
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-medium text-balance">
              {t.hero.subheading}
            </p>
          </SmoothReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Contact Info & FAQ */}
            <div className="space-y-16">
              <SmoothReveal direction="right">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-8">Contact Info</h2>
                  <div className="space-y-6 text-lg font-medium">
                    <div className="flex flex-col">
                      <span className="text-sm uppercase tracking-wider text-foreground/50 mb-1">Email</span>
                      <a href={`mailto:${t.info.email}`} className="text-accent hover:text-accent-foreground transition-colors font-serif text-2xl">
                        {t.info.email}
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm uppercase tracking-wider text-foreground/50 mb-1">Instagram</span>
                      <a href="https://instagram.com/duomediasolutions" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                        {t.info.instagram}
                      </a>
                    </div>
                    <div className="pt-4 border-t border-border mt-6">
                      <p className="text-foreground/70 italic flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        {t.info.response}
                      </p>
                    </div>
                  </div>
                </div>
              </SmoothReveal>

              <SmoothReveal delay={0.2} direction="right">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-8">{t.faq.heading}</h2>
                  <div className="space-y-6">
                    <div className="bg-background rounded-2xl p-6 border border-border">
                      <h4 className="font-semibold text-lg mb-2">{t.faq.q1}</h4>
                      <p className="text-foreground/80">{t.faq.a1}</p>
                    </div>
                    <div className="bg-background rounded-2xl p-6 border border-border">
                      <h4 className="font-semibold text-lg mb-2">{t.faq.q2}</h4>
                      <p className="text-foreground/80">{t.faq.a2}</p>
                    </div>
                    <div className="bg-background rounded-2xl p-6 border border-border">
                      <h4 className="font-semibold text-lg mb-2">{t.faq.q3}</h4>
                      <p className="text-foreground/80">{t.faq.a3}</p>
                    </div>
                    <div className="bg-background rounded-2xl p-6 border border-border">
                      <h4 className="font-semibold text-lg mb-2">{t.faq.q4}</h4>
                      <p className="text-foreground/80">{t.faq.a4}</p>
                    </div>
                  </div>
                </div>
              </SmoothReveal>
            </div>

            {/* Right: Contact Form */}
            <SmoothReveal delay={0.1} direction="left">
              <div className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <form className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.name} *</label>
                      <input type="text" required className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.email} *</label>
                      <input type="email" required className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.company}</label>
                      <input type="text" className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.website}</label>
                      <input type="url" className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.form.service}</label>
                    <select className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none relative">
                      {t.form.services.map((srv: string, i: number) => (
                        <option key={i} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.budget}</label>
                      <select className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                        <option>&lt; €1,000</option>
                        <option>€1,000 - €3,000</option>
                        <option>€3,000 - €5,000</option>
                        <option>€5,000 - €10,000</option>
                        <option>€10,000+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.form.timeline}</label>
                      <select className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                        {t.form.timelines.map((tl: string, i: number) => (
                          <option key={i} value={tl}>{tl}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.form.message} *</label>
                    <textarea required rows={5} className="w-full bg-card border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                  </div>

                  <MagneticButton className="w-full py-5 bg-foreground text-background text-lg font-medium shadow-md hover:shadow-lg transition-shadow rounded-xl">
                    {t.form.submit}
                  </MagneticButton>
                  
                </form>
              </div>
            </SmoothReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
