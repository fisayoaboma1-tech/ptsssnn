import { useEffect, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { benefits, timeline, storyHighlights } from "./data";

export function AboutUs() {
  const bgImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782831713/closeup-working-table-workplace-office_1_iby4tj.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782831718/closeup-hands-passing-contract-unrecognizable-businessman_1_vadubj.jpg",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [bgImages.length]);

  return (
    <section id="about-us" className="py-28 bg-white border-y border-border/30 relative overflow-hidden">
      {bgImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: i === idx ? 0.25 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 pointer-events-none bg-black/5" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-5 relative">
        <ScrollReveal>
          <div className="text-center mb-16 relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.2" }}>
              Empowering businesses with<br className="hidden sm:block" /> trusted compliance solutions
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are a leading certification and testing consultancy dedicated to helping businesses navigate complex regulatory landscapes. With years of experience and a commitment to excellence, we deliver comprehensive solutions that ensure your products meet the highest standards of quality and compliance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 150}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/90 to-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-xl font-bold shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow duration-300">
                  {s.num}
                </div>
                <h3 className="font-semibold text-foreground text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Timeline</p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Our heritage of excellence</h3>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary/20" />
          <div className="space-y-8">
              {timeline.filter(item => parseInt(item.year) < 1950).map((item, i) => (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12">
                    <div className={`md:text-right ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                    <div className={`hidden md:flex items-center ${i % 2 === 0 ? "md:order-2 md:justify-start" : "md:order-1 md:justify-end"}`}>
                      <div className="w-3 h-3 rounded-full bg-primary shadow-md shadow-primary/30" />
                    </div>
                  </div>
                  {item.year === "1942–1945" && (
                    <ScrollReveal>
                      <div className="text-center mt-6">
                        <a href="/aboutfull" className="inline-flex items-center gap-2 rounded-xl bg-primary/10 text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/20 transition-colors">
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </a>
                      </div>
                    </ScrollReveal>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}