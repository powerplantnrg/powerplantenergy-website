/*
 * SOVEREIGN BOTANICA — Hero Section
 * Design: Dark carbon-ground background with radial green gradients
 * Typography: Instrument Serif display, IBM Plex Mono labels
 * Colors: --carbon-ground bg, --transformation accents, --white text
 */

const HERO_BG_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/9UTZWI1TZRfBFafNn55qth/sandbox/6bnQavyOPtO9eQiYHTBsfi-img-1_1771881039000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOVVUWldJMVRaUmZCRmFmTm41NXF0aC9zYW5kYm94LzZiblFhdnlPUHRPOWVRaVlIVEJzZmktaW1nLTFfMTc3MTg4MTAzOTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rD28JtDKkhhojI-wc9NbcvpdsArO5rNEjRkIemXlGakc4~cEHEKmIKFqIudIWnaBZ3fIpTiBVYAyN~DUGl-M2LQfTpsTCYxh2orluR-lqm84eAw1TE8c4L-YUxdr9hJtdfgE~9PyTyr7MoyGx5wRAIxZQUh4OzrOysLy1NXwe36LtkENY1V~NVxcGp05YirW~SSHuGbdg9xqyHdnbb6BEhiuXrfyGEhgDNx8dhru3plBgz2m8ENCqr6E9dGsO7HjYoasMWFqsAnDqAmBZtyPZE0VOtqBSQ6HE~OkCNjyGlm~nKzP~PxwcSKtV6qO8efapAcvjsVCwndzK7NWHl9KbQ__";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: `var(--carbon-ground)`,
        color: "var(--white)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      {/* Radial gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(27,77,62,0.3) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 20% 80%, rgba(46,125,50,0.15) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "50%",
          opacity: 0.06,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(46,125,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,50,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        className="container-ppe"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "6rem 2rem 4rem",
        }}
      >
        {/* Label */}
        <div
          className="label-mono"
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            padding: "0.4rem 1rem",
            border: "1px solid rgba(245,124,0,0.4)",
            color: "var(--transformation)",
          }}
        >
          Sovereign Fuels &amp; Critical Minerals
        </div>

        {/* Title */}
        <h1
          className="display-xl"
          style={{ marginBottom: "2rem", maxWidth: "800px" }}
        >
          Growing Australia's
          <br />
          Energy Sovereignty
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "3rem",
            maxWidth: "600px",
          }}
        >
          Transforming bamboo into sustainable aviation fuel and battery-grade
          graphite — from Australian soil, for Australian security.
        </p>

        {/* CTA Buttons */}
        <div style={{ marginBottom: "3rem" }}>
          <a href="#bcdf" className="btn-primary">
            Explore Burdekin BCDF
          </a>
          <a
            href="#capabilities"
            className="btn-secondary"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "var(--white)",
            }}
          >
            Our Capabilities
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats-row">
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--transformation)",
                lineHeight: 1,
              }}
            >
              100%
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.5rem",
              }}
            >
              Australian Owned
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--transformation)",
                lineHeight: 1,
              }}
            >
              2
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.5rem",
              }}
            >
              Critical Products
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--transformation)",
                lineHeight: 1,
              }}
            >
              QLD
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.5rem",
              }}
            >
              Burdekin Region
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-stats-row {
          display: flex;
          gap: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        @media (max-width: 768px) {
          .hero-stats-row {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
