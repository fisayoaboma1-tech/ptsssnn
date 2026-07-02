import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Solusi SNI" className="h-7 w-auto" />
            <span className="font-semibold text-foreground text-sm">PT <span className="text-lg font-bold">SS</span>N</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#agency" className="hover:text-foreground transition-colors">About</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Clients</a>
            <Link href="/login" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="text-center space-y-3 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Need Help? Contact Support</p>
            <p>Our support center is here to help. Reach out to speak directly with our support agents and get the assistance you need.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="tel:+6285216412334" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +62 852 1641 2334
              </Link>
              <Link href="mailto:info@ptssn.co.id" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@ptssn.co.id
              </Link>
              <Link href="mailto:support@ptssn.id" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                support@ptssn.id
              </Link>
              <Link href="mailto:kep@ptssn.id" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                kep@ptssn.id
              </Link>
              <Link href="mailto:kemarernawaty@ptssn.id" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                kemarernawaty@ptssn.id
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>OCBD Park, Jl. Cahaya Raya Blok H10 No. 11, Kawasan Industri Sentul, Bogor, Jawa Barat</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PT. Solusi Sertifikasi Nasional Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
