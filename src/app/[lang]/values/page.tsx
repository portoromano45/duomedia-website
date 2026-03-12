import { getDictionary } from "@/lib/i18n/getDictionary";
import { SmoothReveal } from "@/app/components/ui/SmoothReveal";
import { ParallaxSection } from "@/app/components/ui/ParallaxSection";

export default async function ValuesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.values;

  const values = [
    t.authenticity,
    t.intention,
    t.humanity,
    t.collaboration
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 shiny-crumpled-hologram pointer-events-none opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center border-b border-border pb-16">
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

      {/* Values Detailed List */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-32">
            {values.map((val: any, index: number) => (
              <SmoothReveal key={index} delay={0.1} direction="up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                  
                  {/* Visual / Parallax Placeholder */}
                  <div className="w-full">
                    <ParallaxSection speed={0.15}>
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-border">
                        <div className="absolute inset-0 bg-primary-800/20 mix-blend-multiply flex items-center justify-center text-6xl opacity-30">
                          ✦
                        </div>
                      </div>
                    </ParallaxSection>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-8 sticky top-32">
                    <div className="space-y-4">
                      <span className="text-accent uppercase tracking-widest font-bold text-sm">Value {index + 1}</span>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{val.title}</h2>
                      <h3 className="text-2xl font-serif font-medium text-accent-foreground italic">"{val.statement}"</h3>
                    </div>
                    
                    <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-serif">
                      {val.description.split('\n\n').map((para: string, i: number) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border">
                      <ul className="space-y-4">
                        {val.points.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-4 text-foreground/90 font-medium">
                            <span className="text-accent mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
