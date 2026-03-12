import { getDictionary } from "@/lib/i18n/getDictionary";
import { SmoothReveal } from "@/app/components/ui/SmoothReveal";
import { Hover3D } from "@/app/components/ui/Hover3D";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.about;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 shiny-crumpled-hologram pointer-events-none opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SmoothReveal delay={0.1} direction="down">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 max-w-4xl mx-auto text-balance">
              {t.hero.heading}
            </h1>
          </SmoothReveal>
          <SmoothReveal delay={0.2} direction="up">
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-medium">
              {t.hero.subheading}
            </p>
          </SmoothReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SmoothReveal>
              <h2 className="text-4xl font-serif font-bold mb-8 text-accent-foreground text-center">
                {t.story.heading}
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-serif">
                {t.story.content.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </SmoothReveal>
          </div>
        </div>
      </section>

      {/* Our Values - Grid */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <SmoothReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">{t.values.heading}</h2>
          </SmoothReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.values.list.map((value: {title: string, description: string}, i: number) => (
              <SmoothReveal key={i} delay={0.1 * i} direction="up">
                <Hover3D>
                  <div className="bg-card p-8 rounded-3xl border border-border h-full shadow-sm">
                    <h3 className="text-2xl font-serif font-bold mb-4 text-accent">{value.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                  </div>
                </Hover3D>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-32 relative overflow-hidden bg-primary-900 text-primary-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SmoothReveal>
            <h2 className="text-sm uppercase tracking-widest mb-6 opacity-80">{t.vision.heading}</h2>
            <p className="text-3xl md:text-5xl font-serif font-medium leading-tight max-w-4xl mx-auto text-balance">
              "{t.vision.content}"
            </p>
          </SmoothReveal>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SmoothReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">{t.team.heading}</h2>
          </SmoothReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.team.members.map((member: {name: string, role: string, bio: string}, i: number) => (
              <SmoothReveal key={i} delay={0.1 * i} direction="up">
                <div className="group rounded-3xl overflow-hidden border border-border bg-card">
                  <div className="aspect-[4/5] bg-neutral-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl text-neutral-400 bg-neutral-100">
                      👤
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                    <p className="text-sm uppercase tracking-wider text-foreground/60 mb-4">{member.role}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
