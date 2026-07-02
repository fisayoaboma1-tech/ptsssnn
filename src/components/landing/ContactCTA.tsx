import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  return (
    <section className="relative overflow-hidden py-0 sm:py-20 overflow-x-hidden" style={{ background: "#050d0a" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25 sm:opacity-25 pointer-events-none select-none"
        poster=""
      >
        <source src="https://res.cloudinary.com/dahp1ngcc/video/upload/v1782852692/From_Klickpin.com-_734438651746736277-pin-id-734438651746736277_vpa785.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#050d0a]/1 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 py-20 sm:py-28 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ lineHeight: "1.15" }}>
            Need Help? Contact Support
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto" style={{ textWrap: "pretty" }}>
            Our support center is here to help. Reach out to speak directly with our support agents and get the assistance you need.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+6285216412334"
              className="inline-flex items-center gap-3 rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-6 py-3 text-sm font-semibold hover:bg-[#fdb95e] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#FDAA3E]/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +62 852 1641 2334
            </a>
        
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
