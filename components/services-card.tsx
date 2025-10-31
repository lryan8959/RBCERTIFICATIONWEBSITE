"use client"

import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "iso-certification",
    title: "ISO Certification",
    badge: "Standards Excellence",
    description:
      "Comprehensive ISO certification services including ISO 9001, 14001, 27001, 22000, and more. We guide you through every step of the certification process.",
    image: "/professional-business-certification-documents-qual.jpg",
    link: "https://rbcertification.ae/services.html#iso-certification",
  },
  {
    id: "audit",
    title: "Audits & Assessments",
    badge: "Compliance Assurance",
    description:
      "Expert gap assessments, internal audits, supplier evaluations, and comprehensive compliance risk assessments to ensure your operations meet industry standards.",
    image: "/business-audit-inspection-checklist-professional-a.jpg",
    link: "https://rbcertification.ae/services.html#audits",
  },
  {
    id: "training",
    title: "Professional Training",
    badge: "Knowledge Development",
    description:
      "Internationally accredited courses including Lead Auditor, Lead Implementer, and Internal Auditing programs designed to elevate your team's expertise.",
    image: "/professional-training-classroom-business-education.jpg",
    link: "https://rbcertification.ae/services.html#training",
  },
  {
    id: "custom-consultancy",
    title: "The F&B Architects",
    badge: "Franchise Solutions",
    description:
      "End-to-end franchise consulting, market entry strategies, and master franchisee licensing. We connect your F&B business to global opportunities.",
    image: "/modern-restaurant-food-business-consulting-profess.jpg",
    link: "https://rbcertification.ae/services.html#custom-consultancy",
  },
]

export function ServicesCard() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#e8f0f5] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#5b8ba8] mb-6 leading-tight">
            Our Core Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <a key={service.id} href={service.link} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="bg-[#e8f0f5]/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Badge */}
                <div className="p-6 pb-4">
                  <span className="inline-block px-4 py-2 bg-[#5b8ba8]/10 text-[#5b8ba8] text-sm font-medium rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="px-6 pb-6">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
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
          ))}
        </div>
      </div>
    </section>
  )
}
