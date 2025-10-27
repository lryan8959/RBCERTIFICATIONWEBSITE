import { Shield, Globe, Award, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Multi-Standard Expertise",
      description: "Specialized in ISO 9001, 14001, 45001, 22000, 27001, 50001 and more",
    },
    {
      icon: Globe,
      title: "Globally Recognized",
      description: "USAS accredited and IAF MLA signatory for worldwide acceptance",
    },
    {
      icon: Award,
      title: "End-to-End Solutions",
      description: "Comprehensive certification, auditing, and compliance training services",
    },
    {
      icon: Users,
      title: "Trusted Authority",
      description: "Serving diverse industries across international markets with proven results",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#4A90A4] mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in ISO certifications, audits, and compliance training
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/professional-business-team-reviewing-quality-manag.jpg"
              alt="Professional certification consultation"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-[#4A90A4] leading-tight">
                Building Excellence Through Certified Compliance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a globally recognized certification body, we specialize in delivering{" "}
                <span className="font-semibold text-gray-900">
                  ISO certifications, compliance audits, and professional training
                </span>{" "}
                that empower organizations to achieve international standards with confidence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our accreditation with USAS and affiliation with IAF MLA signatories ensures your certifications are
                recognized worldwide, giving you the competitive edge to{" "}
                <span className="font-semibold text-gray-900">
                  build credibility, strengthen operations, and drive sustainable growth.
                </span>
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-xl hover:border-[#4A90A4] transition-colors duration-300"
                >
                  <feature.icon className="w-8 h-8 text-[#4A90A4] mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
