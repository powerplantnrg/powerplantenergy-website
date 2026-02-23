/*
 * SOVEREIGN BOTANICA — Mission / About Section
 * Design: Light specimen-field background, two-column grid
 * Typography: Instrument Serif for statement, Work Sans for body
 * Colors: --sovereign-canopy, --transformation accent
 */

export default function MissionSection() {
  return (
    <section id="about" style={{ padding: "7rem 0" }}>
      <div className="container-ppe">
        {/* Section Label */}
        <div
          className="section-label heading-section"
          style={{ color: "var(--transformation)" }}
        >
          Our Mission
        </div>

        {/* Two Column Grid */}
        <div className="mission-grid">
          {/* Left: Statement */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                lineHeight: 1.35,
                color: "var(--sovereign-canopy)",
              }}
            >
              We are building Australia's first vertically integrated{" "}
              <em style={{ color: "var(--transformation)", fontStyle: "italic" }}>
                bamboo-to-battery
              </em>{" "}
              and{" "}
              <em style={{ color: "var(--transformation)", fontStyle: "italic" }}>
                bamboo-to-fuel
              </em>{" "}
              platform — securing sovereign supply chains for the industries that
              define our future.
            </p>
          </div>

          {/* Right: Body + Founder */}
          <div>
            <p
              className="body-md"
              style={{ color: "rgba(26,26,46,0.65)" }}
            >
              Power Plant Energy Pty Ltd was founded in 2020 with a singular
              vision: to harness sustainable biomass feedstock to produce the
              critical materials Australia needs — without relying on foreign
              supply chains vulnerable to geopolitical disruption.
            </p>
            <p
              className="body-md"
              style={{ marginTop: "1rem", color: "rgba(26,26,46,0.65)" }}
            >
              Our Burdekin Battery Chemicals Development Facility represents the
              convergence of agricultural innovation, advanced chemical
              processing, and national security imperatives. From sustainable
              aviation fuel to battery-grade graphite, every product strengthens
              Australia's sovereign capability.
            </p>

            {/* Founder */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--rule)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--sovereign-canopy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "var(--white)",
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                }}
              >
                AN
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Aaron Newson
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "rgba(26,26,46,0.5)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Founder &amp; Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
