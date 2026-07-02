import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";

export function Header2() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src={LOGO_URL} alt="Solusi SNI" className="h-7 w-auto" />
          <span className="text-xl font-semibold text-gray-900 md:tracking-tight md:text-xl md:font-semibold">PT <span className="text-2xl font-bold text-gray-900">SS</span>N</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-gray-900 hover:text-gray-700 transition-colors">Services</a>
          <a href="#why-us" className="text-gray-900 hover:text-gray-700 transition-colors">Why Us</a>
          <a href="#agency" className="text-gray-900 hover:text-gray-700 transition-colors">About</a>
          <a href="#reviews" className="text-gray-900 hover:text-gray-700 transition-colors">Clients</a>
          <a href="#contact" className="text-gray-900 hover:text-gray-700 transition-colors">Contact</a>
        </div>

        <button
          className="inline-flex items-center gap-1.5 rounded-xl border border-gray-900/30 bg-white/80 text-gray-900 hover:bg-gray-50 backdrop-blur-sm transition-all duration-200 active:scale-[0.97] px-5 py-2.5 text-sm font-medium"
        >
          Menu
          <Menu className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu open={false} onClose={() => {}} />
    </nav>
  );
}