"use client";

import { AboutFull, Header2 } from "@/components/landing";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AboutFullPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header2 />
      <div className="max-w-6xl mx-auto px-5 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <AboutFull />
    </div>
  );
}
