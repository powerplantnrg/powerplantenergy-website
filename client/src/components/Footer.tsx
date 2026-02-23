/*
 * SOVEREIGN BOTANICA — Footer
 * Design: Dark carbon-ground background, 4-column grid
 * Typography: Big Shoulders Display brand, IBM Plex Mono labels
 * Colors: --carbon-ground bg, --transformation column titles
 */

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--carbon-ground)",
        color: "var(--white)",
        padding: "5rem 0 2rem",
      }}
    >
      <div className="container-ppe">
        {/* Grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Power Plant Energy
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "320px",
              }}
            >
              Sovereign fuels and critical minerals from sustainable Australian
              biomass. Building the supply chains that secure our nation's
              future.
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--transformation)",
                marginBottom: "1.5rem",
              }}
            >
              Capabilities
            </h3>
            <ul style={{ listStyle: "none" }}>
              {[
                { href: "#capabilities", label: "Sustainable Aviation Fuel" },
                { href: "#capabilities", label: "Battery-Grade Graphite" },
                { href: "#defence", label: "Defence Energy" },
                { href: "#bcdf", label: "Burdekin BCDF" },
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: "0.75rem" }}>
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--transformation)",
                marginBottom: "1.5rem",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none" }}>
              {[
                { href: "#about", label: "About Us" },
                { href: "#process", label: "Our Process" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: "0.75rem" }}>
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--transformation)",
                marginBottom: "1.5rem",
              }}
            >
              Connect
            </h3>
            <ul style={{ listStyle: "none" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <a
                  href="https://www.linkedin.com/company/power-plant-energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FFFFFF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  LinkedIn
                </a>
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <a
                  href="mailto:info@powerplantenergy.com.au"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FFFFFF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  Email
                </a>
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <a
                  href="https://www.powerplantenergy.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FFFFFF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  Current Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            &copy; 2026 Power Plant Energy Pty Ltd &middot; ABN 34 644 238 800
            &middot; Queensland, Australia
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            All rights reserved
          </span>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
