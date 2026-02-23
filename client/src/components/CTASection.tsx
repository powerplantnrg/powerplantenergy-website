/*
 * SOVEREIGN BOTANICA — CTA / Contact Section
 * Design: Light background, centered text with dual buttons
 * Typography: Instrument Serif display, Big Shoulders Display buttons
 * Colors: --sovereign-canopy primary, --transformation accent
 */

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        padding: "8rem 0",
        textAlign: "center",
      }}
    >
      <div className="container-ppe">
        {/* Section Label */}
        <div
          className="section-label heading-section"
          style={{
            color: "var(--transformation)",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Get In Touch
        </div>

        {/* Title */}
        <h2
          className="display-lg"
          style={{
            marginBottom: "1.5rem",
            color: "var(--sovereign-canopy)",
          }}
        >
          Partner with Power Plant Energy
        </h2>

        {/* Description */}
        <p
          className="body-md"
          style={{
            maxWidth: "560px",
            margin: "0 auto 3rem",
            color: "rgba(26,26,46,0.6)",
          }}
        >
          Whether you represent government, defence, aviation, or the energy
          storage sector — we welcome conversations about how sovereign
          production can serve your needs.
        </p>

        {/* Buttons */}
        <div>
          <a href="mailto:info@powerplantenergy.com.au" className="btn-primary">
            Contact Us
          </a>
          <a href="#capabilities" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
