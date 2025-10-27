import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="RBCertification Logo" width={48} height={48} className="w-12 h-12" />
              <span className="text-xl font-bold text-gray-900">RBCertification</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted partner in ISO certifications, audits, and compliance training.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://rbcertification.ae/services.html#iso-certification"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  ISO Certification
                </a>
              </li>
              <li>
                <a
                  href="https://rbcertification.ae/services.html#audit"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  Audits & Assessments
                </a>
              </li>
              <li>
                <a
                  href="https://rbcertification.ae/services.html#training"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  Professional Training
                </a>
              </li>
              <li>
                <a
                  href="https://rbcertification.ae/services.html#custom-consultancy"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  F&B Architects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://rbcertification.ae/index.html"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://rbcertification.ae/about.html"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://rbcertification.ae/services.html"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://rbcertification.ae/industries.html"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  Our Clients
                </a>
              </li>
              <li>
                <a
                  href="https://rbcertification.ae/contact.html"
                  className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ask.us@rbcertification.ae"
                  className="flex items-start gap-2 text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>ask.us@rbcertification.ae</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+971543819040"
                  className="flex items-start gap-2 text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+971 543 819 040</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Meydan Grandstand, 6th Floor
                    <br />
                    Meydan Road, Nad Al Sheba
                    <br />
                    Dubai, U.A.E.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2025 RBCertification. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://rbcertification.ae/resources.html"
                className="text-gray-600 hover:text-[#5B9FBD] transition-colors text-sm"
              >
                Privacy & Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
