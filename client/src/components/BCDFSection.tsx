/*
 * SOVEREIGN BOTANICA — Burdekin BCDF Section
 * Design: Two-column grid with visual placeholder and content
 * Typography: Big Shoulders Display, Instrument Serif, IBM Plex Mono
 * Colors: --sovereign-canopy, --transformation, gradient bottom bar
 */

const BCDF_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/9UTZWI1TZRfBFafNn55qth/sandbox/6bnQavyOPtO9eQiYHTBsfi-img-2_1771881109000_na1fn_YmNkZi1mYWNpbGl0eQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOVVUWldJMVRaUmZCRmFmTm41NXF0aC9zYW5kYm94LzZiblFhdnlPUHRPOWVRaVlIVEJzZmktaW1nLTJfMTc3MTg4MTEwOTAwMF9uYTFmbl9ZbU5rWmkxbVlXTnBiR2wwZVEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bgtMaw6LXA-uUZO9YqFDFOYYnaJiC7gMjVehciRDPyiPIkSATl758FDyYldH1SEsmOkL2Qx77jE3Sio2QMWFgMIAqt-19gN5Ezxl2RtNPZd7ORYZAXsHl3KfjnPDTxb54D6ifx5-NEyM4j32H1Dgv9-lBkXDBsCGddgBPyfYbcIxsfILZlEDiXWLZsYJTUFwgsaPSYX~~GjOnBIBfZJ1EZjhoqEYMverG~943VAO3eBedKkLm6YaVFmrDLCmOX95T-OGGzBOcvyeV6tNssZHqEjkWDFZ-ljU7VWbj-peiQc3uDxdYDmwDatrCLWH-sWMKCEn7vjVY5oxsDC9F01~hw__";

export default function BCDFSection() {
  return (
    <section
      id="bcdf"
      style={{ padding: "7rem 0", overflow: "hidden" }}
    >
      <div className="container-ppe">
        <div className="bcdf-grid">
          {/* Visual */}
          <div
            style={{
              position: "relative",
              aspectRatio: "4/3",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              border: "1px solid var(--rule)",
            }}
          >
            {/* Background image */}
            <img
              src={BCDF_IMAGE}
              alt="Burdekin BCDF Facility Rendering"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Overlay for text readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(27,77,62,0.5) 0%, rgba(27,77,62,0.75) 100%)",
              }}
            />
            {/* Text overlay */}
            <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "1rem",
                }}
              >
                Flagship Project
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Burdekin BCDF
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.7)",
                  marginTop: "0.5rem",
                }}
              >
                Battery Chemicals Development Facility
              </div>
            </div>
            {/* Bottom gradient bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "4px",
                background:
                  "linear-gradient(90deg, var(--sovereign-canopy), var(--active-photosynthesis), var(--transformation))",
                zIndex: 3,
              }}
            />
          </div>

          {/* Content */}
          <div>
            <div
              className="section-label heading-section"
              style={{
                color: "var(--transformation)",
                marginBottom: "1.5rem",
              }}
            >
              Flagship Project
            </div>
            <h2
              className="display-lg"
              style={{
                marginBottom: "1.5rem",
                color: "var(--sovereign-canopy)",
              }}
            >
              Burdekin Battery Chemicals
              <br />
              Development Facility
            </h2>
            <p
              className="body-md"
              style={{
                color: "rgba(26,26,46,0.65)",
                marginBottom: "2rem",
              }}
            >
              Located in North Queensland's Burdekin region, the BCDF leverages
              abundant bamboo feedstock and existing agricultural infrastructure
              to create a world-first integrated biorefinery. The facility
              transforms sustainably grown bamboo into both battery-grade
              graphite and sustainable aviation fuel through parallel processing
              pathways.
            </p>
            <p
              className="body-md"
              style={{
                color: "rgba(26,26,46,0.65)",
                marginBottom: "2rem",
              }}
            >
              The project creates significant regional employment while building
              sovereign manufacturing capability in two of Australia's most
              critical supply chain gaps — aligning with federal Critical
              Minerals Strategy and Queensland's industrial development
              priorities.
            </p>

            {/* Metrics */}
            <div className="bcdf-metrics">
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "var(--sovereign-canopy)",
                    lineHeight: 1,
                  }}
                >
                  NQ
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(26,26,46,0.45)",
                    marginTop: "0.4rem",
                  }}
                >
                  North Queensland
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "var(--sovereign-canopy)",
                    lineHeight: 1,
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(26,26,46,0.45)",
                    marginTop: "0.4rem",
                  }}
                >
                  Product Streams
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "var(--sovereign-canopy)",
                    lineHeight: 1,
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(26,26,46,0.45)",
                    marginTop: "0.4rem",
                  }}
                >
                  Domestic Supply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bcdf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .bcdf-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--rule);
        }
        @media (max-width: 1024px) {
          .bcdf-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .bcdf-metrics { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
