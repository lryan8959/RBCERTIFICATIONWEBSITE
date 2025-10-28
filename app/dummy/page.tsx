import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ISOHeroSection } from "@/components/iso-hero-section"
import { ISOStandardsSection } from "@/components/iso-standards-section"

export default function ISOCertificationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ISOHeroSection />
      <ISOStandardsSection />
      <Footer />
    </main>
  )
}
