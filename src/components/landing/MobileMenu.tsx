"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, BriefcaseBusiness, Info, Headset, ArrowRight } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setClosing(false);
    } else if (mounted) {
      setClosing(true);
      const timer = setTimeout(() => {
        setMounted(false);
        setClosing(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!mounted || closing) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mounted, closing, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  const drawerStyle: React.CSSProperties = closing
    ? { animation: "slideOut 500ms ease-in-out forwards" }
    : { animation: "slideIn 500ms ease-in-out forwards" };

   return (
     <div className="fixed inset-0 z-[9999] flex md:hidden" role="dialog" aria-modal="true">
       {/* Backdrop */}
       <div
         className="absolute inset-0 bg-black/70 backdrop-blur-md"
         onClick={!closing ? onClose : undefined}
       />

      {/* Drawer */}
      <div
        className="relative ml-auto w-[320px] max-w-[90vw] h-full bg-white/95 border-l border-gray-200 shadow-2xl flex flex-col"
        style={drawerStyle}
      >
        {/* Decorative background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(/shadow-bg.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-black/5">
            <Link href="/" className="flex items-center gap-2.5" onClick={onClose}>
              <img src={LOGO_URL} alt="Solusi SNI" className="h-6 w-auto" />
              <span className="text-base font-semibold text-gray-800 tracking-tight">
                PT <span className="text-xl font-bold">SS</span>N
              </span>
            </Link>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col py-4 overflow-y-auto">
            <p className="px-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">
              Navigation
            </p>

            {[
              { href: "#services", label: "Services", Icon: BriefcaseBusiness },
              { href: "/aboutfull", label: "About", Icon: Info },
              { href: "/contactdetails", label: "Contact", Icon: Headset },
            ].map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-6 py-3.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-black/[0.03] transition-colors"
                >
                  <item.Icon className="w-4 h-4 text-[#FDAA3E] flex-shrink-0" />
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-6 py-3.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-black/[0.03] transition-colors"
                >
                  <item.Icon className="w-4 h-4 text-[#FDAA3E] flex-shrink-0" />
                  {item.label}
                </Link>
              )
            )}

            <div className="border-t border-black/5 my-4 mx-6" />

            <p className="px-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">
              Contact Info
            </p>

            <Link
              href="tel:+6285216412334"
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-3.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-black/[0.03] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FDAA3E] flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +62 852 1641 2334
            </Link>

            <Link
              href="mailto:support@ptssn.id"
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-3.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-black/[0.03] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FDAA3E] flex-shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              support@ptssn.id
            </Link>

            <Link
              href="mailto:kep@ptssn.id"
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-3.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-black/[0.03] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FDAA3E] flex-shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              kep@ptssn.id
            </Link>

            <Link
              href="mailto:kemarernawaty@ptssn.id"
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-3.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-black/[0.03] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FDAA3E] flex-shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              kemarernawaty@ptssn.id
            </Link>

            <div className="border-t border-black/5 my-4 mx-6" />

            <div className="px-6">
              <Link
                href="/contactdetails"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-6 py-3 text-sm font-semibold hover:bg-[#fdb95e] transition-all duration-200 active:scale-[0.97]"
              >
                Start certification
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}