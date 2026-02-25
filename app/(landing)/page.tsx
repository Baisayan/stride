"use client";
import CtaSection from "@/components/landing/Cta";
import FaqSection from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
}
