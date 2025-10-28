"use client"

import {
  ArrowRight,
  Shield,
  Leaf,
  Server,
  Utensils,
  Lock,
  Package,
  Droplet,
  HardHat,
  Zap,
  ClipboardCheck,
  Award,
  FileCheck,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const isoStandards = [
  {
    icon: Shield,
    title: "ISO 9001: Quality Management System",
    description: "Comprehensive quality management system certification for UAE businesses.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Leaf,
    title: "ISO 14001: Environmental Management",
    description: "Reduce environmental impact, ensure compliance, and promote sustainable practices.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Server,
    title: "ISO 20000: IT Service Management",
    description: "Optimize IT service delivery, reliability, and customer support performance.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Utensils,
    title: "ISO 22000: Food Safety Management",
    description: "Ensure safe food supply chains, minimize risks, and protect consumer health.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Lock,
    title: "ISO 27001: Information Security Management",
    description: "Safeguard data, mitigate cyber risks, and strengthen information security.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Package,
    title: "ISO 28000: Supply Chain Security",
    description: "Protect assets, manage risks, and enhance global supply chain resilience.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Droplet,
    title: "ISO 29001: Petroleum, Petrochemical & Gas Industry Quality",
    description: "Maintain high standards in oil & gas operations with risk-focused quality systems.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: HardHat,
    title: "ISO 45001: Occupational Health & Safety",
    description: "Protect employees, reduce workplace hazards, and improve safety performance.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Zap,
    title: "ISO 50001: Energy Management",
    description: "Improve energy efficiency, reduce costs, and achieve sustainability goals.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: ClipboardCheck,
    title: "HACCP: Hazard Analysis & Critical Control Points",
    description: "Identify, monitor, and control food safety hazards across production.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: Award,
    title: "HALAL Certification",
    description: "Demonstrate compliance with Halal requirements for global markets.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: FileCheck,
    title: "FSSC 22000: Food Safety System Certification",
    description: "Align with GFSI-recognized standards to ensure global food safety compliance.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    icon: CheckCircle,
    title: "BRCGS: Food & Packaging",
    description: "Meet international benchmarks for food quality, safety, and packaging integrity.",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
]

export function ISOStandardsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#5b8ba8] mb-4">Standards We Cover</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From quality management to information security, we provide expert certification services across all major
            ISO standards and industry-specific frameworks.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isoStandards.map((standard, index) => {
            const Icon = standard.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-xl hover:border-[#5b8ba8] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5b8ba8]/10 flex items-center justify-center group-hover:bg-[#5b8ba8] transition-colors">
                    <Icon className="w-6 h-6 text-[#5b8ba8] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{standard.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{standard.description}</p>

                {/* Read More Link */}
                <a
                  href={standard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#5b8ba8] hover:text-[#4a7590] font-medium text-sm group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">Not sure which certification is right for your business?</p>
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 py-6 text-base bg-[#5b8ba8] hover:bg-[#4a7590] text-white transition-all duration-300"
            asChild
          >
            <a href="https://rbcertification.ae/contact.html" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
