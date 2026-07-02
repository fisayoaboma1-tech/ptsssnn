import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { benefits, storyHighlights } from "./data";

export default function CompanyHistory() {
  return (
    <section className="py-28 relative bg-white overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(/shadow-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.75 }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative">
        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <ScrollReveal>
          <div className="text-center mb-16 relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.2" }}>
              History of PT Surveyor Indonesia
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <p className="text-gray-700 leading-8 mb-5">
              PT Surveyor Indonesia (PTSI) was established on <strong>August 1, 1991</strong>,
              as a joint venture between the Government of Indonesia, PT SUCOFINDO,
              and Société Générale de Surveillance (SGS). The company was created to
              support Indonesia's economic development by providing independent
              inspection services for imported capital goods and equipment before
              shipment to Indonesia.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              During its early years, PTSI focused primarily on Pre-Shipment
              Inspection (PSI), ensuring that imported goods complied with government
              regulations and international quality standards. This helped facilitate
              trade while improving transparency and efficiency in Indonesia's import
              process.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              After the completion of the government's PSI program in 1997, the
              company transformed its business model and expanded into a broader range
              of Testing, Inspection, Certification, Verification, Auditing, and
              Consulting services. It diversified its expertise across infrastructure,
              energy, mining, manufacturing, agriculture, transportation, finance,
              and public-sector projects.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              Throughout the following decades, PT Surveyor Indonesia strengthened its
              position as one of Indonesia's leading assurance companies by investing
              in technology, professional expertise, laboratory capabilities, and
              nationwide operations. The company introduced strategic business units,
              expanded its service portfolio, and adopted international management and
              quality standards.
            </p>

            <p className="text-gray-700 leading-8">
              Today, PT Surveyor Indonesia is a state-owned enterprise recognized as
              one of the country's leading providers of Inspection, Verification,
              Testing, Certification (IVTC), and compliance services. It serves
              government institutions, state-owned enterprises, and private companies,
              helping organizations meet regulatory requirements, improve operational
              quality, and ensure compliance with both Indonesian and international
              standards.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        <div className="mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Story</p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Brief history</h3>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {storyHighlights.map((block, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-white/60 backdrop-blur rounded-2xl border border-border/40 p-6 shadow-sm h-full">
                  <h4 className="font-semibold text-foreground text-lg mb-2">{block.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}