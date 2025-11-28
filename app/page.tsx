"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesGrid from "@/components/services-grid"
import FeaturesSection from "@/components/features-section"
import HowItWorks from "@/components/how-it-works"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ServicesGrid />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
