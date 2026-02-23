/*
 * SOVEREIGN BOTANICA — FAQ Section
 * Design: Light specimen-field background, accordion-style Q&A
 * Typography: Big Shoulders Display headings, Instrument Serif questions, Work Sans answers
 * Colors: --sovereign-canopy titles, --transformation accents, --carbon-ground text
 * Content sourced from: BambooBio-Carbon Safeguarding the Great Barrier Reef Catchment document
 */

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string[];
}

const faqs: FAQItem[] = [
  {
    question:
      "How does the BCDF protect the Great Barrier Reef?",
    answer: [
      "The Burdekin Bio-Carbon Development Facility provides several specific environmental benefits for the Great Barrier Reef by improving water quality and reducing harmful agricultural impacts within the reef's catchment area.",
      "Growing bamboo requires 62% less water than traditional sugarcane cultivation — using only 3.0 megalitres per hectare compared to 8.0 megalitres for sugarcane. Because bamboo has a perennial root system, it eliminates the need for annual soil disturbance, substantially reducing fine sediments and dissolved inorganic nitrogen (DIN) entering the reef catchment. The bamboo agricultural programme also completely eliminates fertiliser runoff.",
      "The BCDF processing plant implements a zero liquid discharge operation featuring 95% closed-loop recycling, ensuring no industrial wastewater enters the catchment. The transition also eliminates in-field cane burning, improving overall environmental and air quality. Together, these changes comply with the stringent requirements of the Reef 2050 Water Quality Improvement Plan.",
    ],
  },
  {
    question:
      "What is the Agronomic Bridge Fund and how does it help farmers?",
    answer: [
      "The Agronomic Bridge Fund is a $277.8 million blended finance instrument designed to help Burdekin farmers manage the critical transition risk of planting bamboo. Because newly planted bamboo plantations generate no harvestable biomass during their first 36 months, the fund provides the necessary capital to bridge this income gap.",
      "Administered by the grower-owned Burdekin Feedstock Co-operative, the fund covers the high-density planting establishment cost of $25,500 per hectare using a stacked structure: 60% QRIDA Concessional Lending ($15,300/ha on a 20-year term at 2–3% interest), 25% CEFC Green Finance ($6,375/ha at sustainability-linked rates), and 15% Grower Equity ($3,825/ha from farm reserves).",
      "By covering 85% of the establishment capital through concessional loans and green finance, the fund effectively eliminates the financial barriers to entry for farmers.",
    ],
  },
  {
    question:
      "What is the economic impact of the BCDF on the Burdekin region?",
    answer: [
      "The BCDF is designed to transform the Burdekin regional economy by injecting $733 million in capital to build a first-of-its-kind integrated biorefinery and agricultural feedstock programme.",
      "The project creates massive employment: a peak construction workforce of 800–1,000 workers, 230 full-time equivalent operational jobs, and 200–400 permanent agricultural jobs within the bamboo plantation programme. Aggregate peak employment reaches approximately 1,850 FTEs, with standard economic multipliers indicating 425–530 total regional jobs.",
      "Farmers adopting the integrated model can expect net farm income increases of 133–154%, jumping from a baseline of $192,000 to $447,000–$485,000 annually. The project will inject approximately $57.4 million into the regional community annually across an estimated 200 participating farms. The BCDF achieves an Economic Benefit-Cost Ratio of 4.32.",
    ],
  },
  {
    question:
      "How does the project address youth unemployment?",
    answer: [
      "The BCDF specifically targets the region's pressing social challenge of high youth unemployment, which currently exceeds the Queensland average, through massive job creation, specialised training, and the introduction of new knowledge-based career pathways.",
      "The project includes silviculture training provided in partnership with the cultivar developer, Growmore Biotech. The transition from exporting raw agricultural goods to producing advanced sovereign commodities introduces highly technical capabilities to the region — including biorefinery operations and local tissue culture laboratories — creating high-value, science and technology-based career pathways that did not previously exist in the local agricultural sector.",
      "The project also commits to a minimum 5% Indigenous employment target and Indigenous business procurement.",
    ],
  },
  {
    question:
      "How do bamboo supply agreements secure commercial financing?",
    answer: [
      "Bioenergy projects must overcome a critical coordination failure: growers will not plant without a guaranteed buyer, processors will not build without guaranteed feedstock, and lenders will not finance without certainty of both supply and demand. The lack of reliable, bankable feedstock supply at scale is the primary reason almost all bioenergy projects fail to secure funding.",
      "The BCDF solves this by partnering with CANEGROWERS QLD to administer supply agreements and aggregate feedstock across a network of over 2,800 farming families. These agreements are integrated into the Australian Biomass Feedstock Institute's digital market intelligence platform for bankability verification.",
      "By legally binding growers with processors and international buyers — including Seadra's offtake agreement — the project eliminates supply continuity risks, making it currently the only reliable bioenergy project of scale in Australia that qualifies for commercial financing.",
    ],
  },
  {
    question:
      "What products does the BCDF produce?",
    answer: [
      "The BCDF converts locally grown bamboo biomass into two premium global commodities: ultra-low carbon sustainable aviation fuel (SAF) meeting ASTM D7566 standards with up to 80% lifecycle emissions reduction, and battery-grade critical minerals including engineered graphite and hard carbon anode materials for lithium-ion batteries.",
      "Rather than exporting raw agricultural goods, the facility elevates the Burdekin region into a hub for advanced, sovereign industrial infrastructure — producing the critical materials Australia needs without reliance on foreign supply chains vulnerable to geopolitical disruption.",
    ],
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.75rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "2rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            lineHeight: 1.35,
            color: "var(--sovereign-canopy)",
          }}
        >
          {item.question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            border: "1px solid var(--rule)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-heading)",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "var(--transformation)",
            transition: "transform 0.3s, background 0.3s",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            background: isOpen ? "rgba(27,77,62,0.06)" : "transparent",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div style={{ paddingBottom: "2rem" }}>
          {item.answer.map((paragraph, i) => (
            <p
              key={i}
              className="body-md"
              style={{
                color: "rgba(26,26,46,0.65)",
                marginBottom: i < item.answer.length - 1 ? "1rem" : 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "7rem 0",
        background: "var(--specimen-field)",
      }}
    >
      <div className="container-ppe">
        {/* Header */}
        <div className="faq-header">
          <div>
            <div
              className="section-label heading-section"
              style={{ color: "var(--transformation)" }}
            >
              Knowledge Base
            </div>
            <h2
              className="display-lg"
              style={{
                marginBottom: "1rem",
                color: "var(--sovereign-canopy)",
              }}
            >
              Frequently Asked
              <br />
              Questions
            </h2>
            <p
              className="body-md"
              style={{
                maxWidth: "520px",
                color: "rgba(26,26,46,0.6)",
              }}
            >
              Key questions about the Burdekin Bio-Carbon Development Facility,
              its environmental impact, economic benefits, and how it secures
              Australia's sovereign supply chains.
            </p>
          </div>

          {/* Stats sidebar */}
          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--rule)",
              padding: "2rem",
              minWidth: "240px",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--sovereign-canopy)",
                  lineHeight: 1,
                }}
              >
                62%
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
                Less Water Than Sugarcane
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--sovereign-canopy)",
                  lineHeight: 1,
                }}
              >
                $733M
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
                Capital Investment
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--sovereign-canopy)",
                  lineHeight: 1,
                }}
              >
                4.32
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
                Economic Benefit-Cost Ratio
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div
          style={{
            marginTop: "3.5rem",
            borderTop: "1px solid var(--rule)",
          }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>

      <style>{`
        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3rem;
        }
        @media (max-width: 768px) {
          .faq-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
