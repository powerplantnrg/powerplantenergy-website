/*
 * SOVEREIGN BOTANICA — Sovereignty Banner
 * Design: Full-width green banner with centered editorial quote
 * Typography: Instrument Serif display
 * Colors: --sovereign-canopy bg, --transformation accent for emphasis
 */

export default function SovereigntyBanner() {
  return (
    <div
      style={{
        background: "var(--sovereign-canopy)",
        color: "var(--white)",
        padding: "6rem 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(46,125,50,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-ppe" style={{ position: "relative" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            lineHeight: 1.25,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Australia cannot defend what it cannot fuel. We cannot electrify what
          we cannot supply.{" "}
          <em style={{ color: "var(--transformation)", fontStyle: "italic" }}>
            Sovereignty begins in the soil.
          </em>
        </p>
      </div>
    </div>
  );
}
