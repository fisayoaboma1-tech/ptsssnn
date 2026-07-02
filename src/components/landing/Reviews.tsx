import { ScrollReveal } from "./ScrollReveal";
import { reviews } from "./data";
import { Star, StarHalf } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="py-28 relative bg-white overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(/shadow-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.75 }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-5 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Client Success Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>
              Trusted by Indonesian businesses
            </h2>
          </div>
        </ScrollReveal>
      
        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 80}>
              <div className="rounded-2xl border border-border/50 bg-card p-6 hover:shadow-md hover:border-border transition-all duration-200">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: Math.floor(r.rating) }).map((_, j) => (
                    <Star key={`full-${j}`} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                  {r.rating % 1 !== 0 && (
                    <svg key="half" viewBox="0 0 24 24" className="w-4 h-4">
                      <defs>
                        <linearGradient id="halfGrad">
                          <stop offset="50%" stopColor="#D4AF37" />
                          <stop offset="50%" stopColor="#E5E7EB" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="url(#halfGrad)"
                        stroke="#D4AF37"
                        strokeWidth="1"
                      />
                    </svg>
                  )}
                  {Array.from({ length: 5 - Math.ceil(r.rating) }).map((_, j) => (
                    <Star key={`empty-${j}`} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">{r.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
