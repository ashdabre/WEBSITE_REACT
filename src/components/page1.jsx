import { useState } from "react";

// ─── Decorative SVG Components ──────────────────────────────────────────────

const SquiggleLeft = () => (
  <svg
    className="deco-squiggle"
    viewBox="0 0 90 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M70 10 C10 40, 80 80, 20 120 C-30 155, 60 180, 20 210"
      stroke="#111"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
    <ellipse cx="18" cy="60" rx="28" ry="40" stroke="#F05A8E" strokeWidth="3" fill="none" />
  </svg>
);

const CardDeco = () => (
  <div className="deco-card">
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="90">
      <rect x="10" y="6" width="58" height="72" rx="8" fill="white" stroke="#ccc" strokeWidth="1.5" />
      <rect x="14" y="10" width="50" height="64" rx="6" fill="#7B5CF0" opacity="0.85" />
      <rect x="6" y="2" width="58" height="72" rx="8" fill="white" stroke="#111" strokeWidth="1.5" />
    </svg>
  </div>
);

// ─── Avatar Components ───────────────────────────────────────────────────────

const AvatarHat = ({ size = 130 }) => (
  <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="65" cy="65" r="65" fill="#E8C9A0" />
    <ellipse cx="65" cy="100" rx="38" ry="32" fill="#8B5E2A" />
    <circle cx="65" cy="52" r="20" fill="#D4956A" />
    <ellipse cx="65" cy="38" rx="28" ry="8" fill="#8B6914" />
    <rect x="45" y="20" width="40" height="20" rx="6" fill="#A67C1A" />
  </svg>
);

const AvatarDreads = ({ size = 155 }) => (
  <svg viewBox="0 0 155 155" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="77" cy="77" r="77" fill="#B8D4E8" />
    <ellipse cx="77" cy="110" rx="44" ry="36" fill="#3A5F8A" />
    <ellipse cx="77" cy="46" rx="26" ry="18" fill="#8B3A2A" />
    <rect x="60" y="28" width="8" height="22" rx="4" fill="#E05030" transform="rotate(-15 64 39)" />
    <rect x="72" y="24" width="8" height="26" rx="4" fill="#D04020" />
    <rect x="84" y="28" width="8" height="22" rx="4" fill="#C03518" transform="rotate(10 88 39)" />
    <circle cx="77" cy="66" r="22" fill="#C87941" />
    <ellipse cx="77" cy="80" rx="10" ry="5" fill="#A06030" opacity="0.4" />
  </svg>
);

const AvatarStubble = ({ size = 130 }) => (
  <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="65" cy="65" r="65" fill="#D4E4F0" />
    <ellipse cx="65" cy="100" rx="38" ry="34" fill="#4A5568" />
    <circle cx="65" cy="54" r="20" fill="#C49070" />
    <ellipse cx="65" cy="68" rx="14" ry="6" fill="#9A7055" opacity="0.3" />
  </svg>
);

const AvatarGlasses = ({ size = 115 }) => (
  <svg viewBox="0 0 115 115" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="57" cy="57" r="57" fill="#E8D4C0" />
    <ellipse cx="57" cy="88" rx="33" ry="28" fill="#2D3748" />
    <circle cx="57" cy="48" r="18" fill="#C8956A" />
    <rect x="44" y="45" width="10" height="7" rx="3" fill="none" stroke="#222" strokeWidth="1.5" />
    <rect x="57" y="45" width="10" height="7" rx="3" fill="none" stroke="#222" strokeWidth="1.5" />
    <line x1="54" y1="48" x2="57" y2="48" stroke="#222" strokeWidth="1.5" />
  </svg>
);

const AvatarBeard = ({ size = 130 }) => (
  <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="65" cy="65" r="65" fill="#C8E0D8" />
    <ellipse cx="65" cy="98" rx="38" ry="33" fill="#2C5F6E" />
    <circle cx="65" cy="54" r="19" fill="#A07855" />
    <ellipse cx="65" cy="66" rx="13" ry="8" fill="#7A5538" opacity="0.4" />
  </svg>
);

const AvatarSmile = ({ size = 145 }) => (
  <svg viewBox="0 0 145 145" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="72" cy="72" r="72" fill="#D8E8F0" />
    <ellipse cx="72" cy="106" rx="42" ry="36" fill="#5E8FA8" />
    <circle cx="72" cy="60" r="21" fill="#8FBAD4" />
    <path d="M62 66 Q72 74 82 66" stroke="#5A7A90" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const AvatarCap = ({ size = 120 }) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="60" cy="60" r="60" fill="#F0D8C8" />
    <ellipse cx="60" cy="92" rx="36" ry="30" fill="#1A3A5C" />
    <circle cx="60" cy="50" r="18" fill="#7A4A30" />
    <ellipse cx="60" cy="36" rx="24" ry="7" fill="#1A3A5C" />
    <rect x="42" y="20" width="36" height="18" rx="5" fill="#1A3A5C" />
    <line x1="48" y1="95" x2="48" y2="120" stroke="white" strokeWidth="2" opacity="0.4" />
    <line x1="58" y1="95" x2="58" y2="120" stroke="white" strokeWidth="2" opacity="0.4" />
  </svg>
);

// ─── Avatar data config ──────────────────────────────────────────────────────

const avatars = [
  { id: 1, Component: AvatarHat,    wClass: "av1" },
  { id: 2, Component: AvatarDreads, wClass: "av2" },
  { id: 3, Component: AvatarStubble,wClass: "av3" },
  { id: 4, Component: AvatarGlasses,wClass: "av4" },
  { id: 5, Component: AvatarBeard,  wClass: "av5" },
  { id: 6, Component: AvatarSmile,  wClass: "av6" },
  { id: 7, Component: AvatarCap,    wClass: "av7" },
];

// ─── Nav Component ───────────────────────────────────────────────────────────

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Elementum</div>

      <ul style={styles.navLinks}>
        {links.map((l) => (
          <li key={l} style={styles.navItem}>
            <a href="#" style={styles.navAnchor}>{l}</a>
          </li>
        ))}
      </ul>

      <button
        style={styles.hamburger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
      >
        <span style={styles.hLine} />
        <span style={styles.hLine} />
      </button>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {links.map((l) => (
            <a key={l} href="#" style={styles.mobileLink}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

// ─── Hero Component ──────────────────────────────────────────────────────────

const Hero = () => (
  <section style={styles.hero}>
    <SquiggleLeft />
    <CardDeco />

    {/* V badge */}
    <div style={styles.vBadge}>V</div>

    {/* Headline */}
    <h1 style={styles.headline}>
      The{" "}
      <span style={styles.hlUnderline}>thinkers</span>
      {" "}and
      <br />
      doers were{" "}
      <span style={styles.hlPink}>changing</span>
      <br />
      the{" "}
      <span style={styles.hlMint}>status</span>
      {" "}Quo with
    </h1>

    {/* Subtext */}
    <p style={styles.subtext}>
      We are a team of strategists, designers communicators, researchers. Together,
      <br />
      we believe that progress only happens when you refuse to play things safe.
    </p>

    {/* Team portraits */}
    <div style={styles.teamRow}>
      {avatars.map(({ id, Component, wClass }) => (
        <div key={id} style={{ ...styles.avatarWrap, ...styles[wClass] }}>
          <Component />
        </div>
      ))}
    </div>
  </section>
);

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = {
  /* Nav */
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 32px",
    borderBottom: "3px solid #F5E642",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 100,
    fontFamily: "'DM Sans', sans-serif",
  },
  logo: {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: "0.02em",
    border: "2px solid #111",
    padding: "5px 10px",
    color: "#111",
    background: "white",
  },
  navLinks: {
    display: "flex",
    gap: 32,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: { listStyle: "none" },
  navAnchor: {
    textDecoration: "none",
    color: "#111",
    fontSize: 14,
    fontWeight: 500,
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
  },
  hLine: {
    display: "block",
    width: 24,
    height: 2,
    background: "#111",
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "#fff",
    borderBottom: "2px solid #F5E642",
    display: "flex",
    flexDirection: "column",
    padding: "16px 32px",
    gap: 16,
    zIndex: 200,
  },
  mobileLink: {
    textDecoration: "none",
    color: "#111",
    fontSize: 15,
    fontWeight: 500,
  },

  /* Hero */
  hero: {
    position: "relative",
    padding: "40px 40px 60px",
    textAlign: "center",
    overflow: "hidden",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'DM Sans', sans-serif",
  },
  vBadge: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#F05A8E",
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontFamily: "'DM Serif Display', serif",
    flexShrink: 0,
  },
  headline: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "clamp(38px, 6vw, 70px)",
    lineHeight: 1.15,
    color: "#111",
    maxWidth: 780,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  hlUnderline: {
    position: "relative",
    display: "inline-block",
    borderBottom: "6px solid #F5E642",
    paddingBottom: 2,
  },
  hlPink: {
    background: "#F0B8E8",
    borderRadius: 8,
    padding: "0 8px",
    display: "inline-block",
  },
  hlMint: {
    background: "#B2EFD4",
    borderRadius: 8,
    padding: "0 8px",
    display: "inline-block",
  },
  subtext: {
    marginTop: 24,
    fontSize: 14,
    color: "#555",
    maxWidth: 440,
    lineHeight: 1.7,
  },

  /* Team row */
  teamRow: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 48,
    width: "100%",
    flexWrap: "nowrap",
    overflow: "hidden",
  },
  avatarWrap: {
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
    border: "3px solid white",
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 0,
  },

  /* Avatar size + offset classes */
  av1: { width: 130, height: 130, marginBottom: 0,  marginRight: -18 },
  av2: { width: 155, height: 155, marginBottom: 40, marginRight: -22 },
  av3: { width: 130, height: 130, marginBottom: 10, marginRight: -18 },
  av4: { width: 115, height: 115, marginBottom: 0,  marginRight: -16 },
  av5: { width: 130, height: 130, marginBottom: 20, marginRight: -18 },
  av6: { width: 145, height: 145, marginBottom: 0,  marginRight: -20 },
  av7: { width: 120, height: 120, marginBottom: 30 },

  /* Left squiggle */
  decoSquiggle: {
    position: "absolute",
    left: -10,
    top: "30%",
    width: 90,
    opacity: 0.9,
  },
};

// ─── Global font inject ──────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #fff; }

    .deco-squiggle {
      position: absolute;
      left: -10px;
      top: 30%;
      width: 90px;
      opacity: 0.9;
    }
    .deco-card {
      position: absolute;
      right: 60px;
      top: 100px;
    }

    /* Avatar hover */
    .avatar-wrap:hover {
      transform: translateY(-8px) scale(1.06) !important;
      box-shadow: 0 12px 32px rgba(0,0,0,0.18) !important;
      z-index: 10;
      position: relative;
    }

    /* Fade-up animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-badge  { animation: fadeUp 0.5s ease both; }
    .fade-head   { animation: fadeUp 0.6s 0.1s ease both; }
    .fade-sub    { animation: fadeUp 0.6s 0.25s ease both; }
    .fade-team   { animation: fadeUp 0.7s 0.4s ease both; }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links-ul { display: none !important; }
    }
    @media (max-width: 600px) {
      .team-row-wrap { gap: 2px !important; }
    }
  `}</style>
);

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <>
      <GlobalStyles />

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "40px 40px 60px",
          textAlign: "center",
          overflow: "hidden",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <SquiggleLeft />
        <CardDeco />

       

        {/* Headline */}
        <h1 className="fade-head" style={styles.headline}>
          The{" "}
          <span style={styles.hlUnderline}>thinkers</span>
          {" "}and
          <br />
          doers were{" "}
          <span style={styles.hlPink}>changing</span>
          <br />
          the{" "}
          <span style={styles.hlMint}>status</span>
          {" "}Quo with
        </h1>

        {/* Subtext */}
        <p className="fade-sub" style={styles.subtext}>
          We are a team of strategists, designers communicators, researchers. Together,
          <br />
          we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Team row */}
        <div
          className="fade-team team-row-wrap"
          style={styles.teamRow}
        >
          {avatars.map(({ id, Component, wClass }, i) => (
            <div
              key={id}
              className="avatar-wrap"
              style={{
                ...styles.avatarWrap,
                ...styles[wClass],
                transform: hoveredIdx === i ? "translateY(-8px) scale(1.06)" : "none",
                boxShadow:
                  hoveredIdx === i
                    ? "0 12px 32px rgba(0,0,0,0.18)"
                    : "0 4px 16px rgba(0,0,0,0.12)",
                zIndex: hoveredIdx === i ? 10 : 1,
                position: "relative",
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Component />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}