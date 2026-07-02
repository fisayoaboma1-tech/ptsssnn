"use client";

import { Hero, Services, AboutUs, Reviews, Contact, Footer, Header } from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}