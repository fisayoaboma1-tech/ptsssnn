import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-5 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="Solusi SNI" className="h-7 w-auto" />
              <span className="font-semibold text-foreground text-sm">
                PT <span className="text-lg font-bold">SS</span>N
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for SNI certification, laboratory testing, and compliance solutions in Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why Us</a></li>
              <li><a href="#agency" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="tel:+6285216412334" className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>+62 852 1641 2334</span>
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link href="mailto:support@ptssn.id" className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>support@ptssn.id</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:kep@ptssn.id" className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>kep@ptssn.id</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:kemarernawaty@ptssn.id" className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>kemarernawaty@ptssn.id</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Address */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Support</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Need help? Our support center is here to assist you directly with your certification needs.</p>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>OCBD Park, Jl. Cahaya Raya Blok H10 No. 11, Kawasan Industri Sentul, Bogor, Jawa Barat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PT. Solusi Sertifikasi Nasional Indonesia</p>
          <p className="text-xs text-muted-foreground">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
