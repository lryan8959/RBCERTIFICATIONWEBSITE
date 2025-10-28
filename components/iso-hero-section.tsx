"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ISOHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#d4dfe5]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#5b8ba8] mb-8 leading-tight">
          ISO Certification
        </h1>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            We deliver comprehensive ISO certification, from in-depth gap analysis to seamless audit readiness and
            certification completion. Our expert team aligns every process, policy, and document with the highest global
            standards.
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
              Get Started Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
