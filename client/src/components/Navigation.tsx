import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(26, 26, 46, 0.95)"
          : "rgba(26, 26, 46, 0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        transition: "background 0.3s",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "1.5px solid #2E7D32",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-heading)",
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: "#2E7D32",
            }}
          >
            PPE
          </div>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Power Plant Energy
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            listStyle: "none",
          }}
          className="nav-links-desktop"
        >
          {[
            { href: "#about", label: "About" },
            { href: "#capabilities", label: "Capabilities" },
            { href: "#bcdf", label: "Burdekin BCDF" },
            { href: "#process", label: "Process" },
            { href: "#defence", label: "Defence" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#FFFFFF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                background: "#F57C00",
                padding: "0.5rem 1.2rem",
                borderRadius: "2px",
                fontWeight: 500,
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e06c00")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#F57C00")
              }
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            width: "28px",
            height: "20px",
            position: "relative",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              display: "block",
              width: "100%",
              height: "2px",
              background: "#FFFFFF",
              position: "absolute",
              left: 0,
              top: mobileOpen ? "9px" : "0",
              transition: "0.3s",
              transform: mobileOpen ? "rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "100%",
              height: "2px",
              background: "#FFFFFF",
              position: "absolute",
              left: 0,
              top: "9px",
              opacity: mobileOpen ? 0 : 1,
              transition: "0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "100%",
              height: "2px",
              background: "#FFFFFF",
              position: "absolute",
              left: 0,
              top: mobileOpen ? "9px" : "18px",
              transition: "0.3s",
              transform: mobileOpen ? "rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="mobile-nav-menu"
          style={{
            background: "rgba(26, 26, 46, 0.98)",
            padding: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            { href: "#about", label: "About" },
            { href: "#capabilities", label: "Capabilities" },
            { href: "#bcdf", label: "Burdekin BCDF" },
            { href: "#process", label: "Process" },
            { href: "#defence", label: "Defence" },
            { href: "#contact", label: "Contact Us" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
