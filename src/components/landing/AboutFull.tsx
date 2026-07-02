import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { benefits, storyHighlights } from "./data";

export function AboutFull() {
  return (
    <section id="about-full" className="py-16 bg-white relative">
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
              History of PT Pindad
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <p className="text-gray-700 leading-7 mb-6">
              PT Pindad (Persero) is Indonesia's state-owned defense manufacturer,
              with a history spanning more than two centuries. Its origins date back
              to <strong>1808</strong>, when the Dutch colonial government established
              a military workshop called <strong>Constructie Winkel</strong> to repair
              and manufacture military equipment.
            </p>

            <p className="text-gray-700 leading-7 mb-6">
              In the early 20th century, the facility was relocated to
              <strong> Bandung</strong>, where it expanded its production capabilities.
              During the Japanese occupation of Indonesia between 1942 and 1945, the
              factory continued operating under a different administration.
            </p>

            <p className="text-gray-700 leading-7 mb-6">
              Following Indonesia's independence, the factory was transferred to the
              Indonesian government in <strong>1950</strong> and became
              <strong> Pabrik Senjata dan Mesiu (PSM)</strong>, focusing on producing
              weapons and ammunition for the nation's armed forces.
            </p>

            <p className="text-gray-700 leading-7 mb-6">
              In <strong>1962</strong>, the organization was renamed
              <strong> Perindustrian TNI Angkatan Darat (Pindad)</strong>, serving as
              the Indonesian Army's primary defense manufacturing facility. Over the
              following decades, its capabilities expanded beyond firearms to include
              military vehicles, ammunition, and heavy engineering products.
            </p>

            <p className="text-gray-700 leading-7 mb-6">
              The modern company was officially established in
              <strong> 1983</strong> as <strong>PT Pindad (Persero)</strong>, a
              state-owned enterprise dedicated to developing Indonesia's domestic
              defense industry. Since then, Pindad has become one of Southeast Asia's
              leading defense manufacturers.
            </p>

            <p className="text-gray-700 leading-7">
              Today, PT Pindad produces a wide range of products, including assault
              rifles, ammunition, armored personnel carriers, tactical vehicles, and
              industrial machinery. The company continues to play a key role in
              strengthening Indonesia's defense capabilities while supporting national
              industrial development.
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