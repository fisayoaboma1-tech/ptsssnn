import { ScrollReveal } from "@/components/landing/ScrollReveal";
import Link from "next/link";

export default function ServicesFullPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 relative bg-white overflow-x-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(/shadow-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", opacity: 0.75 }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-5 relative">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Services</p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>
                All Services
              </h1>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg" style={{ textWrap: "pretty" }}>
                Full list of compliance and certification services we offer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            <ServiceCard title="SNI Certification" desc="Complete support for Indonesian National Standard certification across product categories." />
            <ServiceCard title="Laboratory Testing" desc="Accredited testing and calibration to verify product safety, performance, and compliance." />
            <ServiceCard title="Halal Certification" desc="Guidance through halal certification requirements and liaison with authorities." />
            <ServiceCard title="Product Inspection" desc="On-site inspections and audits to ensure manufacturing and quality standards are met." />
            <ServiceCard title="Regulatory Consulting" desc="Expert advice on Indonesian regulations and how to keep products compliant over time." />
            <ServiceCard title="Documentation Support" desc="Preparation and review of technical files and certification paperwork." />
          </div>

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <ScrollReveal>
      <div className="group relative rounded-2xl border border-black/[0.04] bg-black/[0.03] p-5 hover:bg-black/[0.05] hover:border-black/[0.08] transition-all duration-300">
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300" />
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}