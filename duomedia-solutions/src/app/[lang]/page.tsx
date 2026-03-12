import { getDictionary } from "@/lib/i18n/getDictionary";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { SmoothReveal } from "@/app/components/ui/SmoothReveal";
import { Hover3D } from "@/app/components/ui/Hover3D";
import { ParallaxSection } from "@/app/components/ui/ParallaxSection";
import { HeroBackground } from "@/app/components/layout/HeroBackground";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <SmoothReveal delay={0.1} direction="down">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 max-w-4xl text-balance">
              {t.hero.headline}
            </h1>
          </SmoothReveal>

          <SmoothReveal delay={0.2} direction="up">
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 text-balance">
              {t.hero.subheadline}
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.3} direction="up" className="flex flex-col sm:flex-row gap-4">
            <Link href={`/${lang}/contact`}>
              <MagneticButton className="bg-foreground text-background px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
                {t.hero.cta1}
              </MagneticButton>
            </Link>
            <Link href={`/${lang}/portfolio`}>
              <button className="px-8 py-4 rounded-full border border-border text-foreground text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors w-full sm:w-auto font-medium">
                {t.hero.cta2}
              </button>
            </Link>
          </SmoothReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-card border-t border-border relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SmoothReveal delay={0.1}>
                <h2 className="text-4xl font-serif font-bold mb-8 text-foreground">
                  {t.whoWeAre.heading}
                </h2>
              </SmoothReveal>
              <SmoothReveal delay={0.2}>
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed font-medium">
                  <p>{t.whoWeAre.p1}</p>
                  <p>{t.whoWeAre.p2}</p>
                  <p>{t.whoWeAre.p3}</p>
                  <p className="pt-4 font-semibold text-accent-foreground">
                    {t.whoWeAre.p4}
                  </p>
                </div>
              </SmoothReveal>
            </div>
            
             <SmoothReveal delay={0.3} direction="left">
               <div className="grid grid-cols-2 gap-6">
                 {t.whoWeAre.stats.map((stat, i) => {
                   const split = stat.split(" ");
                   const number = split[0];
                   const text = split.slice(1).join(" ");
                   return (
                     <Hover3D key={i}>
                       <div className="bg-background rounded-2xl p-6 border border-border shadow-sm h-full flex flex-col justify-center">
                         <span className="text-4xl font-serif font-bold text-accent mb-2 block">{number}</span>
                         <span className="text-sm font-medium text-foreground/70 uppercase tracking-wider">{text}</span>
                       </div>
                     </Hover3D>
                   )
                 })}
               </div>
             </SmoothReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <SmoothReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.whatWeDo.heading}</h2>
            <p className="text-lg text-foreground/60">{t.whatWeDo.subheading}</p>
          </SmoothReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.whatWeDo.services.map((service, index) => (
              <SmoothReveal key={index} delay={0.1 * index} direction="up">
                <Hover3D>
                  <div className="group bg-card border border-border rounded-2xl p-8 h-full transition-shadow hover:shadow-xl hover:border-accent/40 flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-xl">
                      {index === 0 ? "📱" : index === 1 ? "🖋️" : index === 2 ? "📸" : index === 3 ? "🎙️" : "💻"}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent-foreground transition-colors">{service.title}</h3>
                    <p className="text-foreground/80 mb-6 flex-grow">{service.description}</p>
                    <p className="text-sm text-foreground/50 border-t border-border pt-4">{service.details}</p>
                  </div>
                </Hover3D>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work (Parallax) */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <SmoothReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.featuredWork.heading}</h2>
            <p className="text-lg text-foreground/60">{t.featuredWork.subheading}</p>
          </SmoothReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.featuredWork.projects.map((project, index) => (
              <ParallaxSection key={index} speed={0.05} className="rounded-3xl h-full">
                <div className="relative h-[450px] w-full bg-neutral-200 dark:bg-neutral-800 rounded-3xl overflow-hidden group">
                  <div className="absolute inset-0 bg-black/60 mix-blend-multiply group-hover:bg-black/70 transition-colors duration-500 z-10" />
                  
                  {/* Project Background Image */}
                  <div className="absolute inset-0 w-full h-full bg-cover bg-top transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${project.image}")` }} />
                  
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 text-white">
                    <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 w-full max-w-sm">
                      <SmoothReveal delay={0.2}>
                        <span className="text-xs font-medium uppercase tracking-widest mb-4 block opacity-90 drop-shadow-md">{project.category}</span>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 drop-shadow-lg">{project.title}</h3>
                        <p className="text-base opacity-90 mx-auto drop-shadow-md">{project.result}</p>
                      </SmoothReveal>
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 overflow-hidden bg-background">
        <div className="container mx-auto px-4 text-center">
          <SmoothReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.testimonials.heading}</h2>
            <p className="text-lg text-foreground/60">{t.testimonials.subheading}</p>
          </SmoothReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.list.map((item, index) => (
              <SmoothReveal key={index} delay={0.1 * index} direction="up">
                <div className="bg-card border border-border p-8 rounded-2xl h-full flex flex-col shadow-sm relative">
                  <div className="text-4xl text-accent/30 absolute top-4 left-6 font-serif">"</div>
                  <p className="text-foreground/80 italic mb-8 relative z-10 flex-grow pt-4">"{item.quote}"</p>
                  <p className="font-semibold text-sm uppercase tracking-wider text-accent-foreground">{item.author}</p>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-card border-t border-border overflow-hidden">
        <div className="absolute inset-0 shiny-crumpled-hologram pointer-events-none opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <SmoothReveal>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 max-w-3xl mx-auto text-balance">
              {t.cta.heading}
            </h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              {t.cta.subheading}
            </p>
            <Link href={`/${lang}/contact`}>
              <MagneticButton className="bg-foreground text-background px-10 py-5 rounded-full text-xl shadow-lg hover:shadow-xl transition-shadow">
                {t.cta.button}
              </MagneticButton>
            </Link>
          </SmoothReveal>
        </div>
      </section>
    </div>
  );
}
