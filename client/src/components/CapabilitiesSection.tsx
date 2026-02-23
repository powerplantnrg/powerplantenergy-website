/*
 * SOVEREIGN BOTANICA — Capabilities Section
 * Design: White background, 3-column card grid with hover effects
 * Typography: Big Shoulders Display headings, Work Sans body
 * Colors: --sovereign-canopy titles, ghost numbers at 8% opacity
 */

const capabilities = [
  {
    number: "01",
    title: "Sustainable Aviation Fuel",
    desc: "Converting bamboo biomass into drop-in sustainable aviation fuel through advanced pyrolysis and Hydrothermal liquefaction. Meeting ASTM D7566 standards for direct use in existing jet engines with up to 80% lifecycle emissions reduction.",
    tag: "SAF · ASTM D7566",
  },
  {
    number: "02",
    title: "Battery-Grade Graphite",
    desc: "Producing high-purity synthetic graphite from bamboo-derived biochar — a critical anode material for lithium-ion batteries. Addressing Australia's strategic vulnerability in a mineral currently dominated by a single foreign supplier.",
    tag: "Critical Mineral · Anode Material",
  },
  {
    number: "03",
    title: "Defence Energy Capability",
    desc: "Providing sovereign fuel and energy storage solutions aligned with AUKUS requirements and Defence Strategic Review priorities. Ensuring Australia's armed forces operate on domestically produced, secure energy supply chains.",
    tag: "AUKUS · Defence Review",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      style={{ padding: "7rem 0", background: "var(--white)" }}
    >
      <div className="container-ppe">
        {/* Section Label */}
        <div
          className="section-label heading-section"
          style={{ color: "var(--transformation)" }}
        >
          Core Capabilities
        </div>

        {/* Title */}
        <h2
          className="display-lg"
          style={{
            marginBottom: "1.5rem",
            color: "var(--sovereign-canopy)",
          }}
        >
          Three Pillars of
          <br />
          Sovereign Production
        </h2>

        {/* Intro */}
        <p
          className="body-lg"
          style={{
            maxWidth: "640px",
            color: "rgba(26,26,46,0.65)",
            marginBottom: "3.5rem",
          }}
        >
          Each capability addresses a critical gap in Australia's domestic supply
          chain — from aviation fuel security to defence energy independence.
        </p>

        {/* Cards Grid */}
        <div className="capabilities-grid">
          {capabilities.map((cap) => (
            <div key={cap.number} className="capability-card">
              {/* Ghost Number */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "rgba(27,77,62,0.08)",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                }}
              >
                {cap.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  color: "var(--sovereign-canopy)",
                }}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(26,26,46,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {cap.desc}
              </p>

              {/* Tag */}
              <span
                style={{
                  display: "inline-block",
                  marginTop: "1.5rem",
                  padding: "0.3rem 0.8rem",
                  background: "rgba(27,77,62,0.06)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--sovereign-canopy)",
                }}
              >
                {cap.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .capability-card {
          background: var(--white);
          padding: 2.5rem 2rem;
          border: 1px solid var(--rule);
          position: relative;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .capability-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(26,26,46,0.08);
        }
        @media (max-width: 1024px) {
          .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .capabilities-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
