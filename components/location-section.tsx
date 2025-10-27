export function LocationSection() {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Global <span className="text-[#5B9FBD]">Certification Reach</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                RBCertification serves organizations across the Middle East, Asia, Africa, and beyond. With our
                headquarters in Dubai, UAE, we deliver internationally recognized ISO certifications, compliance audits,
                and professional training to businesses of all sizes—from startups to multinational corporations across
                diverse industries including FMCG, QSR, hospitality, healthcare, energy, and manufacturing.
              </p>
            </div>
  
            {/* Right Map Visualization */}
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
              <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Dotted world map representation */}
                <g opacity="0.3">
                  {/* Middle East Region */}
                  {Array.from({ length: 80 }).map((_, i) => (
                    <circle
                      key={`me-${i}`}
                      cx={350 + (i % 10) * 8}
                      cy={200 + Math.floor(i / 10) * 8}
                      r="1.5"
                      fill="#5B9FBD"
                    />
                  ))}
                  {/* Asia Region */}
                  {Array.from({ length: 120 }).map((_, i) => (
                    <circle
                      key={`asia-${i}`}
                      cx={450 + (i % 15) * 8}
                      cy={180 + Math.floor(i / 15) * 8}
                      r="1.5"
                      fill="#5B9FBD"
                    />
                  ))}
                  {/* Africa Region */}
                  {Array.from({ length: 100 }).map((_, i) => (
                    <circle
                      key={`africa-${i}`}
                      cx={320 + (i % 10) * 8}
                      cy={280 + Math.floor(i / 10) * 8}
                      r="1.5"
                      fill="#5B9FBD"
                    />
                  ))}
                  {/* Europe Region */}
                  {Array.from({ length: 60 }).map((_, i) => (
                    <circle
                      key={`europe-${i}`}
                      cx={340 + (i % 10) * 8}
                      cy={140 + Math.floor(i / 10) * 8}
                      r="1.5"
                      fill="#5B9FBD"
                    />
                  ))}
                </g>
  
                {/* Location Markers */}
                {/* Dubai - Main Office */}
                <g>
                  <circle cx="380" cy="240" r="8" fill="#5B9FBD" opacity="0.2" />
                  <circle cx="380" cy="240" r="6" fill="#5B9FBD" />
                  <circle cx="380" cy="240" r="3" fill="white" />
                </g>
  
                {/* Other key locations */}
                <circle cx="420" cy="220" r="5" fill="#5B9FBD" />
                <circle cx="460" cy="250" r="5" fill="#5B9FBD" />
                <circle cx="340" cy="320" r="5" fill="#5B9FBD" />
                <circle cx="500" cy="280" r="5" fill="#5B9FBD" />
                <circle cx="360" cy="180" r="5" fill="#5B9FBD" />
  
                {/* Connecting lines */}
                <line x1="380" y1="240" x2="420" y2="220" stroke="#5B9FBD" strokeWidth="1" opacity="0.3" />
                <line x1="380" y1="240" x2="460" y2="250" stroke="#5B9FBD" strokeWidth="1" opacity="0.3" />
                <line x1="380" y1="240" x2="340" y2="320" stroke="#5B9FBD" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    )
  }
  