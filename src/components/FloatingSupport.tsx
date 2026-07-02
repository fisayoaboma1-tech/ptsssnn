"use client";

import Link from "next/link";
import { Headset } from "lucide-react";

export default function FloatingSupport() {
  return (
    <Link href="/contactdetails" className="fixed bottom-6 right-6 z-50">
      <button
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-white/90 hover:bg-white transition-colors duration-200"
        aria-label="Support"
      >
        <Headset className="w-6 h-6 text-black" />
      </button>
    </Link>
  );
}
