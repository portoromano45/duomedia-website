import { SmoothReveal } from "@/app/components/ui/SmoothReveal";

export function PrivacyContent({ dict }: { dict: any }) {
  const t = dict.privacyPolicy;

  return (
    <article className="max-w-3xl mx-auto py-32 px-6">
      <SmoothReveal direction="down">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{t.title}</h1>
        <p className="text-foreground/50 text-sm font-medium mb-16">{t.lastUpdated}</p>
      </SmoothReveal>

      <div className="space-y-16">
        {t.sections.map((section: any, index: number) => (
          <SmoothReveal key={index} delay={index * 0.1}>
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-accent">{section.title}</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed font-medium">
                  {section.content}
                </p>
              </div>
            </section>
          </SmoothReveal>
        ))}
      </div>
    </article>
  );
}
