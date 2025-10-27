"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to achieve ISO certification?",
    answer: "Typically, 3–6 months depending on company size, complexity, and readiness.",
  },
  {
    question: "Do you provide end-to-end support for certification?",
    answer:
      "Yes. From gap assessment and documentation to training, audits, and certification support, we cover the entire journey.",
  },
  {
    question: "Can we get IRCA-certified training through RBCertification?",
    answer:
      "Absolutely. We offer IRCA & Exemplar Global certified Lead Auditor and Internal Auditor trainings for multiple ISO standards.",
  },
  {
    question: "Are your consultants industry-experienced?",
    answer:
      "Yes. Our consultants are IRCA-certified auditors with hands-on experience in FMCG, QSR, Hospitality, Healthcare, Energy, and Manufacturing sectors.",
  },
  {
    question: "Do you provide customized consultancy?",
    answer:
      "Yes. We tailor solutions based on your sector (QSR, FMCG, HORECA, Retail, Oil & Gas, etc.) to meet unique challenges.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      {/* Decorative Wave SVG Background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1923 401"
          fill="none"
          className="absolute bottom-0 left-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M2.53003 1.57004C137.34 1.57004 222.02 1.05004 298.37 8.79004C387.96 17.88 435.17 45.34 471.48 73.97C493.43 91.27 528.42 125.15 549.17 139.93C573.11 156.97 601.56 169.35 631.3 179.85C656.33 188.69 665.01 195.64 692.42 204.42C729.78 216.38 736.7 186.12 775.93 186.12C815.16 186.12 815.16 219.77 854.38 219.77C893.6 219.77 893.61 181.53 932.83 181.53C972.05 181.53 972.06 217.53 1011.29 217.53C1050.52 217.53 1050.52 181.53 1089.75 181.53C1128.98 181.53 1131.78 213.67 1171.01 213.67C1210.24 213.67 1206.4 189.99 1252.61 189.61C1306.09 189.17 1341.11 183.14 1379.96 156.42C1418.11 130.18 1437.1 88.03 1526.73 43.45C1567.53 23.16 1626.52 1.57004 1704.12 1.57004H1922.54"
            stroke="#0275BD"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            className="animate-wave-1"
          />
          <path
            d="M2.53003 97.98C137.34 97.98 221.75 100.89 298.37 105.2C398.24 110.82 461.38 134.7 483.11 144.84C527.89 165.74 589.31 185.78 629.38 195.74C667.45 205.2 682.83 201.15 737.17 187.17C766.79 179.55 781.7 217.44 822.44 217.32C857.74 217.22 863.15 183.22 902.38 183.22C932.84 183.22 940.24 217.52 979.47 217.52C1018.7 217.52 1028.64 181.52 1057.93 181.52C1097.16 181.52 1099.4 216.06 1138.63 216.06C1177.86 216.06 1183.18 184.03 1228.87 190.87C1287.66 199.66 1281.75 208.69 1358.83 186.45C1408.48 172.13 1451.45 145.87 1488.21 132.98C1531.21 117.9 1626.52 99.67 1704.13 99.67H1922.55"
            stroke="#5DB9F3"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            className="animate-wave-2"
          />
          <path
            d="M0 200.34C134.81 200.34 219.1 200.56 295.84 200.56C396.44 200.56 549.6 201.75 595.95 201.75C635.18 201.75 651.92 203.45 706.27 189.47C735.89 181.85 747.87 212.24 789.01 217.33C824.04 221.66 829.72 181.23 868.95 181.23C899.41 181.23 913.27 219.53 946.04 219.53C980.73 219.53 995.21 181.53 1024.5 181.53C1063.73 181.53 1065.97 216.07 1105.2 216.07C1144.43 216.07 1149.75 184.04 1195.44 190.88C1254.23 199.67 1248.32 208.7 1325.4 186.46C1375.05 172.14 1418.02 145.88 1454.78 132.99C1497.78 117.91 1593.09 99.68 1670.7 99.68H1889.12"
            stroke="#8CDDC6"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            className="animate-wave-3"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-800 md:text-5xl">
            Frequently Asked <span className="font-normal text-sky-600">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Get answers to common questions about ISO certification, audits, and training programs
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-lg font-medium text-slate-800">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-sky-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-slate-100 bg-slate-50 p-6">
                  <p className="leading-relaxed text-slate-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="https://rbcertification.ae/contact.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-800 bg-transparent px-8 py-3 font-medium text-slate-800 transition-all hover:bg-slate-800 hover:text-white"
          >
            <span>Have More Questions?</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
