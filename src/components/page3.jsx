// ─── Section3.jsx ────────────────────────────────────────────────────────────
// "What we can offer you!" — Services list section

import { useState } from "react";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #fff; font-family: 'DM Sans', sans-serif; }

    .service-row {
      display: grid;
      grid-template-columns: 160px 1fr 40px;
      align-items: center;
      padding: 22px 0;
      border-top: 1px solid #E2E8F0;
      position: relative;
      cursor: pointer;
      gap: 16px;
      transition: background 0.2s;
    }
    .service-row:last-child { border-bottom: 1px solid #E2E8F0; }
    .row-title {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(18px, 3vw, 28px);
      color: #111;
      transition: transform 0.25s ease;
      position: relative;
    }
    .service-row:hover .row-title { transform: translateX(6px); }
    .row-arrow {
      font-size: 20px;
      color: #111;
      text-align: right;
      transition: transform 0.25s ease;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .service-row:hover .row-arrow { transform: translateX(5px); }

    @media (max-width: 540px) {
      .service-row { grid-template-columns: 0 1fr 30px; }
      .row-label { display: none !important; }
    }
  `}</style>
);

// ─── Avatars ──────────────────────────────────────────────────────────────────

const PersonAvatar = ({ size = 44 }) => (
  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="22" cy="22" r="22" fill="#C8A882" />
    <circle cx="22" cy="18" r="10" fill="#8B5E3C" />
    <ellipse cx="22" cy="38" rx="16" ry="12" fill="#3A5F8A" />
  </svg>
);

const ColorMosaicAvatar = ({ size = 44 }) => (
  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="22" cy="22" r="22" fill="#2D3748" />
    <rect x="5"  y="5"  width="10" height="10" rx="1" fill="#F5E642" />
    <rect x="16" y="5"  width="10" height="10" rx="1" fill="#E53E3E" />
    <rect x="27" y="5"  width="12" height="10" rx="1" fill="#38A169" />
    <rect x="5"  y="16" width="10" height="12" rx="1" fill="#E53E3E" />
    <rect x="16" y="16" width="10" height="12" rx="1" fill="#F5E642" />
    <rect x="27" y="16" width="12" height="12" rx="1" fill="#805AD5" />
    <rect x="5"  y="29" width="10" height="10" rx="1" fill="#38A169" />
    <rect x="16" y="29" width="10" height="10" rx="1" fill="#3182CE" />
    <rect x="27" y="29" width="12" height="10" rx="1" fill="#E53E3E" />
  </svg>
);

// ─── Service data ─────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    label: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
    floatingEl: null,
  },
  {
    id: 2,
    label: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
    floatingEl: "y-badge",
  },
  {
    id: 3,
    label: "Delta faucet content,\nsocial, digital",
    title: "Pivoting digital confidence",
    floatingEl: "mosaic",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Section3() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <GlobalStyles />

      <section
        style={{
          position: "relative",
          padding: "48px 40px 60px",
          maxWidth: 860,
          margin: "0 auto",
          overflow: "hidden",
          background: "#fff",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Red squiggle top-right */}
        <svg
          style={{
            position: "absolute",
            top: 20,
            right: -10,
            pointerEvents: "none",
            zIndex: 1,
          }}
          width="220"
          height="90"
          viewBox="0 0 220 90"
          fill="none"
        >
          <path
            d="M10 70 C60 20, 130 10, 210 30"
            stroke="#E8473F"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Headline */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 6vw, 62px)",
              lineHeight: 1.1,
              color: "#111",
              position: "relative",
              zIndex: 2,
              maxWidth: 420,
            }}
          >
            What we{" "}
            <span
              style={{
                background: "#F5E642",
                padding: "0 6px",
                borderRadius: 4,
              }}
            >
              can
            </span>
            <br />
            offer you!
          </h2>

          {/* Avatar cluster overlapping headline */}
          <div
            style={{
              position: "absolute",
              top: 32,
              left: 185,
              display: "flex",
              alignItems: "center",
              zIndex: 5,
            }}
          >
           

           

            {/* Count */}
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#111",
                marginLeft: 10,
              }}
            >
              4
            </span>
          </div>
        </div>

        {/* Yellow underline accent */}
        <div
          style={{
            width: 160,
            height: 4,
            background: "#F5E642",
            borderRadius: 2,
            marginTop: 4,
            marginBottom: 36,
          }}
        />

        {/* Service rows */}
        <div style={{ position: "relative" }}>
          {services.map(({ id, label, title, floatingEl }) => (
            <div
              key={id}
              className="service-row"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Left label */}
              <span
                className="row-label"
                style={{
                  fontSize: 11,
                  color: "#888",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {label}
              </span>

              {/* Title */}
              <span
                className="row-title"
                style={{
                  transform: hovered === id ? "translateX(6px)" : "none",
                  transition: "transform 0.25s ease",
                }}
              >
                {title}
              </span>

              {/* Arrow */}
              <span
                className="row-arrow"
                style={{
                  transform: hovered === id ? "translateX(5px)" : "none",
                  transition: "transform 0.25s ease",
                }}
              >
                →
              </span>

              

              {floatingEl === "mosaic" && (
                <div
                  style={{
                    position: "absolute",
                    left: 240,
                    top: "50%",
                    transform: "translateY(-50%)",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2.5px solid white",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    lineHeight: 0,
                    zIndex: 4,
                    pointerEvents: "none",
                  }}
                >
                  <ColorMosaicAvatar size={44} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}