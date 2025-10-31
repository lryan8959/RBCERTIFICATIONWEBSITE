"use client"

import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "iso-9001",
    title: "ISO 9001: Quality Management System",
    badge: "Quality Management",
    description: "Comprehensive quality management system certification for UAE businesses.",
    image: "/professional-business-certification-documents-qual.jpg",
    link: "https://rbcertification.ae/9001.html",
  },
  {
    id: "iso-14001",
    title: "ISO 14001: Environmental Management",
    badge: "Environmental",
    description: "Reduce environmental impact, ensure compliance, and promote sustainable practices.",
    image: "/environmental-sustainability-green-business.jpg",
    link: "https://rbcertification.ae/14001.html",
  },
  {
    id: "iso-20000",
    title: "ISO 20000: IT Service Management",
    badge: "IT Services",
    description: "Optimize IT service delivery, reliability, and customer support performance.",
    image: "/it-service-management-technology.jpg",
    link: "https://rbcertification.ae/20000.html",
  },
  {
    id: "iso-22000",
    title: "ISO 22000: Food Safety Management",
    badge: "Food Safety",
    description: "Ensure safe food supply chains, minimize risks, and protect consumer health.",
    image: "/food-safety-management-quality-control.jpg",
    link: "https://rbcertification.ae/22000.html",
  },
  {
    id: "iso-27001",
    title: "ISO 27001: Information Security Management",
    badge: "Cybersecurity",
    description: "Safeguard data, mitigate cyber risks, and strengthen information security.",
    image: "/cybersecurity-data-protection-it-security-professio.jpg",
    link: "https://rbcertification.ae/27001.html",
  },
  {
    id: "iso-28000",
    title: "ISO 28000: Supply Chain Security",
    badge: "Supply Chain",
    description: "Protect assets, manage risks, and enhance global supply chain resilience.",
    image: "/supply-chain-logistics-security.jpg",
    link: "https://rbcertification.ae/28000.html",
  },
  {
    id: "iso-29001",
    title: "ISO 29001: Petroleum, Petrochemical & Gas Industry Quality",
    badge: "Oil & Gas",
    description: "Maintain high standards in oil & gas operations with risk-focused quality systems.",
    image: "/oil-gas-petroleum-industry.jpg",
    link: "https://rbcertification.ae/29001.html",
  },
  {
    id: "iso-45001",
    title: "ISO 45001: Occupational Health & Safety",
    badge: "Health & Safety",
    description: "Protect employees, reduce workplace hazards, and improve safety performance.",
    image: "/business-audit-inspection-checklist-professional-a.jpg",
    link: "https://rbcertification.ae/45001.html",
  },
  {
    id: "iso-50001",
    title: "ISO 50001: Energy Management",
    badge: "Energy Efficiency",
    description: "Improve energy efficiency, reduce costs, and achieve sustainability goals.",
    image: "/energy-management-efficiency-sustainability.jpg",
    link: "https://rbcertification.ae/50001.html",
  },
  {
    id: "haccp",
    title: "HACCP: Hazard Analysis & Critical Control Points",
    badge: "Food Safety",
    description: "Identify, monitor, and control food safety hazards across production.",
    image: "/food-manufacturing-facility-quality-control-iso-cert.jpg",
    link: "https://rbcertification.ae/haccp.html",
  },
  {
    id: "halal",
    title: "HALAL Certification",
    badge: "Halal Compliance",
    description: "Demonstrate compliance with Halal requirements for global markets.",
    image: "/halal-certification-food-compliance.jpg",
    link: "https://rbcertification.ae/halal.html",
  },
  {
    id: "fssc-22000",
    title: "FSSC 22000: Food Safety System Certification",
    badge: "Food Safety",
    description: "Align with GFSI-recognized standards to ensure global food safety compliance.",
    image: "/food-packaging-quality-standards.jpg",
    link: "https://rbcertification.ae/fssc.html",
  },
  {
    id: "brcgs",
    title: "BRCGS: Food & Packaging",
    badge: "Quality Standards",
    description: "Meet international benchmarks for food quality, safety, and packaging integrity.",
    image: "/food-packaging-quality-standards.jpg",
    link: "https://rbcertification.ae/brcgs.html",
  },
]

export function ServicesSection() {
  console.log("[v0] ServicesSection rendering with individual links for each card")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#e8f0f5] to-white">
      <div className="max-w-7xl mx-auto">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => {
            console.log(`[v0] Rendering card for ${service.id} with link: ${service.link}`)

            return (
              <a
                key={service.id}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                onClick={() => console.log(`[v0] Clicked ${service.id}, redirecting to: ${service.link}`)}
              >
                <div className="bg-[#e8f0f5]/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="p-6 pb-4">
                    <span className="inline-block px-4 py-2 bg-[#5b8ba8]/10 text-[#5b8ba8] text-sm font-medium rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#5b8ba8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-[#5b8ba8] font-medium group-hover:translate-x-2 transition-transform">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
