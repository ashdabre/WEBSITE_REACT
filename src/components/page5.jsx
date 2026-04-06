// ─── Section5Footer.jsx ───────────────────────────────────────────────────────
// Newsletter subscription band + 4-column footer + copyright bar

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; background: #fff; color: #111; }

    .btn-subscribe {
      display: inline-block;
      background: #111;
      color: #fff;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      font-weight: 600;
      padding: 13px 32px;
      border-radius: 40px;
      border: none;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: background 0.2s ease, transform 0.2s ease;
    }
    .btn-subscribe:hover { background: #333; transform: translateY(-2px); }

    .footer-link {
      font-size: 12px;
      color: #555;
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-link:hover { color: #111; }

    @media (max-width: 600px) {
      .footer-grid { grid-template-columns: 1fr 1fr !important; row-gap: 28px !important; }
      .newsletter-section { padding: 40px 20px 48px !important; }
      .teardrop { width: 44px !important; height: 56px !important; right: 16px !important; }
    }
  `}</style>
);

// ─── Decorative SVGs ──────────────────────────────────────────────────────────

const RedSquiggleArrow = () => (
  <svg
    style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-80px)", pointerEvents: "none" }}
    width="130" height="50" viewBox="0 0 130 50" fill="none"
  >
    <path d="M10 40 C30 10, 80 5, 118 22" stroke="#E8473F" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M108 16 L118 22 L108 28" stroke="#E8473F" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PurpleTeardrop = () => (
  <svg
    style={{ position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)", width: 64, height: 80 }}
    viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="teardrop"
  >
    <path d="M32 2 C52 2, 62 18, 62 36 C62 58, 48 78, 32 78 C16 78, 2 58, 2 36 C2 18, 12 2, 32 2Z" fill="#7B5CF0"/>
  </svg>
);

// ─── Footer columns data ──────────────────────────────────────────────────────

const footerCols = [
  {
    title: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Section5Footer() {
  return (
    <>
      <GlobalStyles />

      {/* ── Newsletter Band ── */}
      <div
        className="newsletter-section"
        style={{
          position: "relative",
          background: "#B8EDD6",
          padding: "56px 40px 60px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <RedSquiggleArrow />
        <PurpleTeardrop />

        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.15,
            color: "#111",
            marginBottom: 12,
          }}
        >
          Subscribe to<br />our newsletter
        </h2>

        <p style={{ fontSize: 13, color: "#333", marginBottom: 28 }}>
          To make your stay special and even more memorable
        </p>

        <button className="btn-subscribe">Subscribe Now</button>
      </div>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #ddd" }} />

      {/* ── Footer ── */}
      <footer style={{ padding: "40px 48px 0", background: "#fff" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            paddingBottom: 36,
          }}
        >
          {/* Link columns */}
          {footerCols.map(({ title, links }) => (
            <div key={title}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 14 }}>
                {title}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="footer-link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 14 }}>
              Terms &amp; Policies
            </p>
            <div style={{ fontSize: 12, color: "#555", lineHeight: 1.8 }}>
              <p>1498w Fulton sto, STE<br />2D Chicago, IL 63867</p>
              <br />
              <p>1(23) 456789000</p>
              <br />
              <p>info@elementum.com</p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "14px 0",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#F5E642",
              fontSize: 11,
              color: "#111",
              padding: "4px 16px",
              borderRadius: 4,
            }}
          >
            ©2023 Elementum. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}