/*
 * SOVEREIGN BOTANICA — Process / Value Chain Section
 * Design: Dark background, 4-column steps with connecting line
 * Typography: Big Shoulders Display for numbers/titles, Work Sans for desc
 * Colors: --carbon-ground bg, --transformation accent numbers
 */

const steps = [
  {
    number: 1,
    title: "Cultivate",
    desc: "Sustainably grown bamboo feedstock from the Burdekin region — a rapidly renewable biomass with exceptional carbon sequestration.",
  },
  {
    number: 2,
    title: "Transform",
    desc: "Advanced pyrolysis converts bamboo into biochar and bio-oil intermediates through precision thermal processing.",
  },
  {
    number: 3,
    title: "Refine",
    desc: "Parallel pathways produce battery-grade synthetic graphite and ASTM-certified sustainable aviation fuel.",
  },
  {
    number: 4,
    title: "Deliver",
    desc: "Sovereign supply to Australian defence, aviation, and energy storage sectors — eliminating foreign dependency.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        padding: "7rem 0",
        background: "var(--carbon-ground)",
        color: "var(--white)",
      }}
    >
      <div className="container-ppe">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            className="section-label heading-section"
            style={{
              color: "var(--transformation)",
              justifyContent: "center",
            }}
          >
            Value Chain
          </div>
          <h2 className="display-lg" style={{ marginTop: "1rem" }}>
            From Bamboo to Battery &amp; Beyond
          </h2>
          <p
            className="body-md"
            style={{
              maxWidth: "560px",
              margin: "1.5rem auto 0",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            A vertically integrated process that transforms sustainable biomass
            into the critical materials powering Australia's future.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps">
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                textAlign: "center",
                padding: "0 1.5rem",
                position: "relative",
              }}
            >
              {/* Number Circle */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  border: "2px solid var(--transformation)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "var(--transformation)",
                  background: "var(--carbon-ground)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }
        .process-steps::before {
          content: '';
          position: absolute;
          top: 25px;
          left: 12.5%;
          right: 12.5%;
          height: 1px;
          background: rgba(255,255,255,0.12);
        }
        @media (max-width: 1024px) {
          .process-steps {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .process-steps::before { display: none; }
        }
        @media (max-width: 768px) {
          .process-steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
