export function MarqueeSection() {
    const items = [
      "Proven Expertise Delivering Exceptional Results",
      "10+ Years of Experience",
      "500+ System Implementations",
      "750+ Satisfied Clients",
      "ISO Certification Specialists",
      "Compliance Audit Experts",
      "Professional Training Programs",
      "International Standards Excellence",
      "Trusted Certification Partner",
    ]
  
    return (
      <section className="relative overflow-hidden bg-[#e8ecef] py-6">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set of items */}
            {items.map((item, index) => (
              <div key={`first-${index}`} className="marquee-item">
                <span className="text-[#4a5568] text-lg md:text-xl font-light">{item}</span>
                <span className="text-[#93b5d1] mx-6 md:mx-8 text-2xl">✦</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {items.map((item, index) => (
              <div key={`second-${index}`} className="marquee-item">
                <span className="text-[#4a5568] text-lg md:text-xl font-light">{item}</span>
                <span className="text-[#93b5d1] mx-6 md:mx-8 text-2xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  