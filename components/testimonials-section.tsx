import { Quote, Building2 } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "RBCertification guided us through ISO 9001 certification seamlessly. Their team was professional, knowledgeable, and made the entire process stress-free.",
      client: "Manufacturing Client",
      industry: "Manufacturing",
    },
    {
      quote:
        "Our hospitality business struggled with HACCP implementation. RBCertification not only trained our staff but also developed a practical compliance system that worked across all our outlets.",
      client: "Hospitality Chain Client",
      industry: "Hospitality",
    },
    {
      quote:
        "The IRCA-certified lead auditor training from RBCertification was an eye-opener. The trainers used real-world case studies, making the sessions engaging and practical.",
      client: "Training Participant",
      industry: "Professional Development",
    },
  ]

  const trustedClients = ["FMCG Brand", "QSR Chain", "Healthcare", "Energy Co.", "Retail Group", "Tech Firm"]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#4A90A4] mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from organizations we've helped achieve certification excellence
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#4A90A4] transition-all duration-300 hover:shadow-lg"
            >
              <Quote className="w-10 h-10 text-[#4A90A4] mb-6 opacity-50" />
              <p className="text-gray-700 leading-relaxed mb-6 text-balance">"{testimonial.quote}"</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{testimonial.client}</p>
                <p className="text-sm text-gray-500 mt-1">{testimonial.industry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Clients Section */}
        <div className="bg-white rounded-2xl p-12 border border-gray-200">
          <div className="text-center mb-10">
            <Building2 className="w-12 h-12 text-[#4A90A4] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-3xl md:text-4xl font-light text-[#4A90A4] mb-3">Our Trusted Clients</h3>
            <p className="text-gray-600">Partnering with industry leaders across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustedClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 border border-gray-200 rounded-xl hover:border-[#4A90A4] hover:bg-gray-50 transition-all duration-300"
              >
                <p className="text-center font-medium text-gray-700 text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
