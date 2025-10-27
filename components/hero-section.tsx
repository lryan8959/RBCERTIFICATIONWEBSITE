"use client"

import type React from "react"

import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const searchableServices = [
  {
    keywords: ["iso", "certification", "9001", "14001", "27001", "22000", "standards"],
    url: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    keywords: ["audit", "assessment", "gap", "internal", "supplier", "compliance", "haccp", "gmp"],
    url: "https://rbcertification.ae/services.html#audits",
  },
  {
    keywords: ["training", "course", "auditor", "implementer", "education", "learning", "corporate"],
    url: "https://rbcertification.ae/services.html#training",
  },
  {
    keywords: ["fnb", "f&b", "franchise", "food", "beverage", "restaurant", "consulting", "architects"],
    url: "https://rbcertification.ae/services.html#custom-consultancy",
  },
]

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchQuery.toLowerCase().trim()

    if (!query) return

    // Find matching service
    const matchedService = searchableServices.find((service) =>
      service.keywords.some((keyword) => query.includes(keyword) || keyword.includes(query)),
    )

    if (matchedService) {
      window.open(matchedService.url, "_blank")
    } else {
      // Default to services page if no match
      window.open("https://rbcertification.ae/services.html", "_blank")
    }

    setSearchQuery("")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#d4dfe5]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="mb-12 max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our services... (ISO, Audit, Training, F&B)"
              className="w-full px-6 py-4 pr-14 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 focus:border-[#5b8ba8] focus:outline-none text-gray-700 placeholder:text-gray-400 shadow-lg transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-[#5b8ba8] hover:bg-[#4a7590] text-white rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#5b8ba8] mb-8 leading-tight">
          <span className="block">Achieve Excellence</span>
          <span className="block">Through Certified</span>
          <span className="block">Compliance</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#4a5568] mb-10">
          Certify with Confidence. Compete with Strength.
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Your strategic partner in ISO certifications, compliance audits, and professional training. We guide
            organizations of all sizes through the journey to{" "}
            <span className="font-semibold text-gray-900">international standards excellence</span>, delivering
            comprehensive solutions that drive <span className="font-semibold text-gray-900">operational success</span>{" "}
            and sustainable growth.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base border-2 border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 group bg-transparent"
            asChild
          >
            <a href="https://rbcertification.ae/contact.html" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Get Free Assessment
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
