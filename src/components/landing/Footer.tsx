import Link from "next/link";

const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Solusi SNI" className="h-7 w-auto" />
            <span className="font-semibold text-foreground text-sm">PT <span className="text-lg font-bold">SS</span>N</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#agency" className="hover:text-foreground transition-colors">About</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Clients</a>
            <Link href="/login" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PT. Solusi Sertifikasi Nasional Indonesia</p>
        </div>
      </div>
    </footer>
  );
}