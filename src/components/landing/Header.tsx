import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/10 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Solusi SNI" className="h-7 w-auto" />
            <span className={`text-xl font-semibold ${scrolled ? "text-gray-900" : "text-white"} md:tracking-tight md:text-xl md:font-semibold`}>PT <span className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>SS</span>N</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className={`${scrolled ? "text-gray-900 hover:text-gray-700" : "text-white hover:text-white/70"} transition-colors`}>Services</a>
            <a href="#agency" className={`${scrolled ? "text-gray-900 hover:text-gray-700" : "text-white hover:text-white/70"} transition-colors`}>About</a>
            <a href="#contact" className={`${scrolled ? "text-gray-900 hover:text-gray-700" : "text-white hover:text-white/70"} transition-colors`}>Contact</a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className={`inline-flex items-center gap-1.5 rounded-xl border backdrop-blur-sm transition-all duration-200 active:scale-[0.97] px-5 py-2.5 text-sm font-medium ${
              scrolled
                ? "border-gray-900/30 bg-white/10 text-gray-900 hover:bg-white/20"
                : "border-white/30 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Menu
            <Menu className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay - rendered outside nav to avoid z-index stacking context */}
      {menuOpen && <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />}
    </>
  );
}