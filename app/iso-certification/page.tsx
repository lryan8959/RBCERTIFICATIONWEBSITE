import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { FaqSection } from "@/components/faq-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { ServicesCard } from "@/components/services-card"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesCard />
      <AboutSection/>
      <TestimonialsSection />
      <CaseStudiesSection />
      <FaqSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
