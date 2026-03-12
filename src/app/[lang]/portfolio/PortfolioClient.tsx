"use client";

import { useState, use } from "react";
import { SmoothReveal } from "@/app/components/ui/SmoothReveal";
import { Hover3D } from "@/app/components/ui/Hover3D";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { PortfolioBackground } from "@/app/components/layout/PortfolioBackground";

// Assuming we still need to load dict client-side or pass it down.
// Since it's a client component, the best way in App Router is to pass dictionary as props.

export default function PortfolioClient({
  dict,
}: {
  dict: any;
}) {
  const t = dict.portfolio;
  const [activeFilter, setActiveFilter] = useState(t.filters[0]);

  const filteredProjects = activeFilter === t.filters[0] 
    ? t.projects 
    : t.projects.filter((p: any) => p.category.includes(activeFilter));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-background">
        <PortfolioBackground />
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

      {/* Filter & Projects Grid */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          
          <SmoothReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {t.filters.map((filter: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-foreground text-background shadow-md"
                      : "bg-background text-foreground/70 border border-border hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project: any, index: number) => (
              <SmoothReveal key={`${project.title}-${index}`} delay={0.1 * (index % 2)} direction="up">
                <Hover3D className="h-full">
                  <div className="bg-background rounded-3xl border border-border overflow-hidden h-full flex flex-col group shadow-sm transition-shadow hover:shadow-xl">
                    <div className="aspect-[4/3] relative bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                       <div className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${project.image}")` }} />
                       <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition-colors duration-500" />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{project.category}</span>
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-foreground mb-2 group-hover:text-accent-foreground transition-colors">{project.title}</h3>
                      <h4 className="text-lg font-medium text-foreground/70 italic mb-6">{project.brand}</h4>
                      
                      <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="pt-6 border-t border-border mt-auto flex flex-col sm:flex-row justify-between items-end gap-6">
                        <div className="w-full sm:w-auto">
                          <h5 className="text-sm font-semibold uppercase mb-3 text-foreground/90">Results</h5>
                          <ul className="space-y-2">
                            {project.results.map((res: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                                <span className="text-accent">✦</span> {res}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-foreground transition-colors"
                          >
                            <span>{t.hero.visitWebsite}</span>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                            >
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Hover3D>
              </SmoothReveal>
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-24 text-foreground/60 italic font-medium">
                No projects found in this category yet.
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
