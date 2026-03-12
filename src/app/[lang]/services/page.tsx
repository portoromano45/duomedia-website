import { getDictionary } from "@/lib/i18n/getDictionary";
import { SmoothReveal } from "@/app/components/ui/SmoothReveal";
import { Hover3D } from "@/app/components/ui/Hover3D";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.services;

  const services = [
    t.social,
    t.copywriting,
    t.content,
    t.voice,
    t.web
  ];

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
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-medium text-balance">
              {t.hero.subheading}
            </p>
          </SmoothReveal>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-32">
            {services.map((service: any, index: number) => (
              <SmoothReveal key={index} delay={0.1} direction={index % 2 === 0 ? "right" : "left"}>
                <div className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent-foreground text-2xl mb-2">
                       {index === 0 ? "📱" : index === 1 ? "🖋️" : index === 2 ? "📸" : index === 3 ? "🎙️" : "💻"}
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-foreground">{service.title}</h2>
                    <h3 className="text-xl font-medium text-accent-foreground italic">{service.tagline}</h3>
                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                      {service.description.split('\n\n').map((para: string, i: number) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    <div className="pt-6">
                      <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-foreground/60">What we deliver</h4>
                      <ul className="space-y-3">
                        {service.deliverables.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-foreground/80">
                            <span className="text-accent mt-1">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.useCase && (
                      <div className="mt-8 p-6 bg-background rounded-2xl border border-border italic text-foreground/70">
                        <p className="mb-2"><strong>Case:</strong> {service.useCase.brand}</p>
                        <p className="mb-2"><strong>Approach:</strong> {service.useCase.approach}</p>
                        <p className="text-accent-foreground font-medium"><strong>Result:</strong> {service.useCase.result}</p>
                      </div>
                    )}
                  </div>

                  {/* Visual / Image Placeholder */}
                  <div className="flex-1 w-full">
                    <Hover3D>
                      <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-border group">
                        <div className="absolute inset-0 bg-primary-800/20 mix-blend-multiply group-hover:bg-primary-900/40 transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">
                          Image Placeholder
                        </div>
                      </div>
                    </Hover3D>
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
