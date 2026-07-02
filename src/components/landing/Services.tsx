import { ScrollReveal } from "./ScrollReveal";
import { services } from "./data";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="py-28 relative bg-white overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(/shadow-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.75 }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Services content */}
          <div className="flex-1">
            <ScrollReveal>
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Services</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>
                  Comprehensive compliance solutions
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg" style={{ textWrap: "pretty" }}>
                  We are your one-stop partner for all certification and compliance needs in Indonesia.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 70}>
                  <div className="group relative rounded-2xl border border-black/[0.04] bg-black/[0.03] p-5 hover:bg-black/[0.05] hover:border-black/[0.08] transition-all duration-300">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                        <s.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

          {/* Right: Why businesses choose us */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <ScrollReveal>
              <div className="rounded-xl bg-black/[0.03] border border-black/[0.06] shadow-xl overflow-hidden">
                <div className="border-b border-black/5 px-5 py-3 flex items-center gap-3 bg-black/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                  </div>
                  <div className="flex-1" />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-black/40">Why choose us</p>
                    <p className="text-lg font-semibold text-black/90 mt-0.5">Trusted compliance partner</p>
                  </div>

                  {[
                    { label: "KAN Accredited", value: "Yes" },
                    { label: "Industry Coverage", value: "Multiple sectors" },
                    { label: "Average Processing Time", value: "Fast track" },
                    { label: "Client Satisfaction", value: "98%" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-black/[0.02] px-4 py-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#FDAA3E]" />
                      <span className="flex-1 text-sm text-black/70">{item.label}</span>
                      <span className="text-sm font-medium text-black/90">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}