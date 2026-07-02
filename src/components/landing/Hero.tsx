import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_IMAGES } from "./data";

const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <>{children}</>;
}

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!HERO_IMAGES.length) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pb-24 pt-0 lg:pb-32 lg:pt-8 xl:pb-40 xl:pt-12" style={{ background: "#050d0a" }}>
      {/* Background slideshow */}
      {HERO_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width={1920}
          height={1080}
          aria-hidden="true"
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-1000 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Left-side gradient for text legibility */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to right, rgba(5,13,10,0.5), rgba(5,13,10,0.13), transparent)` }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.26), transparent, rgba(5,13,10,0))` }} />

      {/* Slideshow indicator dots */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-28 lg:pt-32 flex items-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              i === idx ? "w-6 bg-white" : "w-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hero content — left aligned */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-24 pb-12">
        <div className="max-w-xl">
          <ScrollReveal delay={80}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-left" style={{ lineHeight: "1.08" }}>
              Your Partner in<br />Product Certification
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-lg text-white text-left" style={{ textWrap: "pretty", lineHeight: "1.6" }}>
              PT. Solusi Sertifikasi Nasional Indonesia provides comprehensive compliance solutions, including SNI certification, laboratory testing, and halal certification, to help your business thrive in the Indonesian market.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/contactdetails"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-7 py-3.5 text-sm font-bold hover:bg-[#fdb95e] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#FDAA3E]/25"
              >
                Start your certification
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}