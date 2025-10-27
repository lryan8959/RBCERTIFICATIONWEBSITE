import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Food Manufacturer (ISO 22000)",
      category: "Food Safety",
      image: "/food-manufacturing-facility-quality-control-iso-cert.jpg",
      challenge: "Lack of structured food safety system",
      solution: "Implemented HACCP & ISO 22000 framework with staff training",
      result: "Achieved certification in 6 months, reduced food safety complaints by 40%",
    },
    {
      title: "IT & Software Firm (ISO 27001)",
      category: "Information Security",
      image: "/cybersecurity-data-protection-it-security-professio.jpg",
      challenge: "Cybersecurity risks and client concerns",
      solution: "implementation of ISO 27001  & internal auditor training",
      result: "Enhanced data security, gained 3 new international clients within a year",
    },
    {
      title: "Hospitality Chain (HACCP Implementation)",
      category: "Food Safety",
      image: "/modern-hotel-restaurant-hospitality-food-service-qua.jpg",
      challenge: "Multi-location food safety inconsistencies",
      solution: "Centralized HACCP system, staff awareness sessions",
      result: "Improved guest satisfaction and compliance across 12 outlets",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-4">
            Case Studies with Measurable Outcomes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from organizations that transformed their compliance journey with our expertise
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{study.title}</h3>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Solution:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>

                {/* Result */}
                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="flex items-start gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <h4 className="text-sm font-semibold text-primary">Result:</h4>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed pl-6">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
