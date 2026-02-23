/*
 * SOVEREIGN BOTANICA — Defence & Security Section
 * Design: Dark background, 2-column layout with features + sidebar
 * Typography: Big Shoulders Display headings, IBM Plex Mono labels
 * Colors: --carbon-ground bg, --transformation accents
 */

const features = [
  {
    icon: "01",
    title: "Sovereign Fuel Security",
    desc: "Domestically produced SAF eliminates reliance on imported petroleum supply chains vulnerable to disruption. Direct fuel sovereignty for ADF aviation operations.",
  },
  {
    icon: "02",
    title: "Critical Minerals Independence",
    desc: "Battery-grade graphite produced on Australian soil addresses the strategic vulnerability of depending on a single foreign supplier for this essential anode material.",
  },
  {
    icon: "03",
    title: "AUKUS Alignment",
    desc: "Our capabilities directly support AUKUS Pillar II advanced capability requirements — ensuring interoperability with allied forces through secure, domestic supply chains.",
  },
  {
    icon: "04",
    title: "Regional Resilience",
    desc: "North Queensland production provides geographic diversification and proximity to key Indo-Pacific operations — reducing logistical vulnerability in the northern approaches.",
  },
];

const sidebarItems = [
  { label: "Framework", value: "AUKUS Pillar II" },
  { label: "Policy", value: "DSR 2024" },
  { label: "Strategy", value: "Critical Minerals" },
  { label: "Ownership", value: "100% Australian" },
  { label: "Location", value: "Queensland" },
  { label: "Security", value: "Domestic Only" },
];

export default function DefenceSection() {
  return (
    <section
      id="defence"
      style={{
        padding: "7rem 0",
        background: "var(--carbon-ground)",
        color: "var(--white)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="container-ppe">
        {/* Section Label */}
        <div
          className="section-label heading-section"
          style={{ color: "var(--transformation)" }}
        >
          Defence &amp; Security
        </div>

        {/* Title */}
        <h2
          className="display-lg"
          style={{ marginBottom: "1.5rem" }}
        >
          Powering Australia's
          <br />
          Defence Sovereignty
        </h2>

        {/* Intro */}
        <p
          className="body-md"
          style={{
            maxWidth: "640px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "3.5rem",
          }}
        >
          Aligned with AUKUS imperatives and the Defence Strategic Review, our
          sovereign production capabilities address critical supply chain
          vulnerabilities.
        </p>

        {/* Grid */}
        <div className="defence-grid">
          {/* Features */}
          <div style={{ display: "grid", gap: "2rem" }}>
            {features.map((feature) => (
              <div
                key={feature.icon}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "44px",
                    height: "44px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: "var(--transformation)",
                  }}
                >
                  {feature.icon}
                </div>

                <div>
                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.65,
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "2.5rem 2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                color: "var(--transformation)",
              }}
            >
              Strategic Alignment
            </h3>

            {sidebarItems.map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: "1rem 0",
                  borderBottom:
                    i < sidebarItems.length - 1
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .defence-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .defence-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
