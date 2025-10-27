"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "https://rbcertification.ae/index.html" },
  { name: "About Us", href: "https://rbcertification.ae/about.html" },
  { name: "Services", href: "https://rbcertification.ae/services.html" },
  { name: "Our Clients", href: "https://rbcertification.ae/industries.html" },
  { name: "Testimonials", href: "https://rbcertification.ae/testimonials.html" },
  { name: "Resources", href: "https://rbcertification.ae/resources.html" },
  { name: "Contact Us", href: "https://rbcertification.ae/contact.html" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/85 backdrop-blur-md" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="https://rbcertification.ae/index.html" className="flex-shrink-0 z-10">
            <Image
              src="/logo.png"
              alt="VRD Logo"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-16 lg:h-16"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}

            <Button
              variant="outline"
              className="rounded-full px-6 py-2 border-gray-300 hover:bg-gray-50 bg-white/50 backdrop-blur-sm ml-2"
              asChild
            >
              <a href="https://rbcertification.ae/contact.html" target="_blank" rel="noopener noreferrer">
                Inquire Now
              </a>
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-4 py-2 text-sm border-gray-300 bg-white/50 backdrop-blur-sm"
              asChild
            >
              <a href="https://rbcertification.ae/contact.html" target="_blank" rel="noopener noreferrer">
                Inquire Now
              </a>
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
