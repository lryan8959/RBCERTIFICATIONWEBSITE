import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ISOHeroSection } from "@/components/iso-hero-section"
import { ServicesCard } from "@/components/services-card"
import { ServicesSection } from "@/components/services-section"

export default function ISOCertificationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ISOHeroSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
