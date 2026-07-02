import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
const heroBg = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782823046/a_siivgg.jpg";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28" style={{ background: "#050d0a" }}>
      {/* Reuse hero bg for visual cohesion */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d0a] via-transparent to-[#050d0a] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ lineHeight: "1.15" }}>
            Ready to achieve compliance?
          </h2>
          <p className="mt-4 text-white max-w-md mx-auto" style={{ textWrap: "pretty" }}>
            Partner with PT. Solusi Sertifikasi Nasional Indonesia and ensure your products meet all national standards.
          </p>
          <a
            href="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-8 py-4 text-sm font-semibold hover:bg-[#fdb95e] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#FDAA3E]/25"
          >
            Start your certification
            <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}