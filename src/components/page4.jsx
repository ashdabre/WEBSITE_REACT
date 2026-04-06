// ─── Section4.jsx ─────────────────────────────────────────────────────────────
// "What our customer says About Us" — Testimonial section

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #fff; font-family: 'DM Sans', sans-serif; }

    .float-av {
      position: absolute;
      border-radius: 50%;
      overflow: hidden;
      line-height: 0;
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
      border: 3px solid white;
      z-index: 3;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .float-av:hover {
      transform: scale(1.08) translateY(-4px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.18);
    }

    .hl-underline-yellow {
      position: relative;
      display: inline-block;
    }
    .hl-underline-yellow::after {
      content: '';
      position: absolute;
      bottom: -4px; left: 0;
      width: 100%; height: 4px;
      background: #F5E642;
      border-radius: 2px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .anim { animation: fadeIn 0.6s ease both; }
    .anim-d1 { animation-delay: 0.05s; }
    .anim-d2 { animation-delay: 0.15s; }
    .anim-d3 { animation-delay: 0.25s; }

    @media (max-width: 640px) {
      .av-hide-mobile { display: none !important; }
    }
  `}</style>
);

// ─── Avatar SVGs ──────────────────────────────────────────────────────────────

const AvatarGlasses = ({ size = 70 }) => (
  <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect width="70" height="70" fill="#D4C4B0"/>
    <ellipse cx="35" cy="55" rx="28" ry="22" fill="#8B6B45"/>
    <circle cx="35" cy="30" r="16" fill="#C8956A"/>
    <ellipse cx="35" cy="20" rx="14" ry="9" fill="#3D2B1A"/>
    <rect x="24" y="27" width="9" height="7" rx="3" fill="none" stroke="#222" strokeWidth="1.5"/>
    <rect x="35" y="27" width="9" height="7" rx="3" fill="none" stroke="#222" strokeWidth="1.5"/>
    <line x1="33" y1="30" x2="35" y2="30" stroke="#222" strokeWidth="1.5"/>
  </svg>
);

const AvatarPurple = ({ size = 100 }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect width="100" height="100" fill="#E8D4F0"/>
    <ellipse cx="50" cy="80" rx="40" ry="30" fill="#6B4FA0"/>
    <circle cx="50" cy="42" r="22" fill="#C49070"/>
    <ellipse cx="50" cy="28" rx="18" ry="12" fill="#2D1B0E"/>
    <rect x="42" y="36" width="8" height="6" rx="2" fill="none" stroke="#333" strokeWidth="1.5"/>
    <rect x="52" y="36" width="8" height="6" rx="2" fill="none" stroke="#333" strokeWidth="1.5"/>
    <line x1="50" y1="39" x2="52" y2="39" stroke="#333" strokeWidth="1.5"/>
  </svg>
);

const AvatarCap = ({ size = 68 }) => (
  <svg viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect width="68" height="68" fill="#D0E8D8"/>
    <ellipse cx="34" cy="54" rx="26" ry="20" fill="#2C5F8A"/>
    <circle cx="34" cy="30" r="15" fill="#A07850"/>
    <ellipse cx="34" cy="20" rx="17" ry="8" fill="#1A3A5C"/>
    <rect x="20" y="14" width="28" height="14" rx="5" fill="#1A3A5C"/>
  </svg>
);

const AvatarWoman = ({ size = 60 }) => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect width="60" height="60" fill="#F0D8C8"/>
    <ellipse cx="30" cy="48" rx="22" ry="18" fill="#E07050"/>
    <circle cx="30" cy="26" r="13" fill="#D4956A"/>
    <ellipse cx="30" cy="16" rx="15" ry="9" fill="#7A3520"/>
  </svg>
);

const AvatarColorful = ({ size = 66 }) => (
  <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect width="66" height="66" fill="#C8D8E8"/>
    <ellipse cx="33" cy="52" rx="26" ry="20" fill="#E05030"/>
    <circle cx="33" cy="28" r="14" fill="#8B6B4A"/>
    <ellipse cx="33" cy="18" rx="12" ry="8" fill="#2D1B0E"/>
  </svg>
);

const AvatarBlue = ({ size = 72 }) => (
  <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect width="72" height="72" fill="#D8E8F4"/>
    <ellipse cx="36" cy="58" rx="28" ry="20" fill="#3A7AB0"/>
    <circle cx="36" cy="32" r="16" fill="#C8A07A"/>
    <ellipse cx="36" cy="20" rx="14" ry="9" fill="#4A3525"/>
  </svg>
);

const AvatarRedShirt = ({ size = 96 }) => (
  <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect width="96" height="96" fill="#F0E8D0"/>
    <ellipse cx="48" cy="80" rx="40" ry="28" fill="#C0302A"/>
    <circle cx="48" cy="44" r="22" fill="#C49070"/>
    <ellipse cx="48" cy="30" rx="18" ry="12" fill="#2D1B0E"/>
    <ellipse cx="48" cy="58" rx="14" ry="8" fill="#7A4530" opacity="0.45"/>
    <rect x="34" y="41" width="11" height="9" rx="3" fill="none" stroke="#333" strokeWidth="1.8"/>
    <rect x="48" y="41" width="11" height="9" rx="3" fill="none" stroke="#333" strokeWidth="1.8"/>
    <line x1="45" y1="45" x2="48" y2="45" stroke="#333" strokeWidth="1.8"/>
    <line x1="30" y1="45" x2="34" y2="45" stroke="#333" strokeWidth="1.5"/>
    <line x1="59" y1="45" x2="63" y2="45" stroke="#333" strokeWidth="1.5"/>
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Section4() {
  return (
    <>
      <GlobalStyles />

      <section
        style={{
          position: "relative",
          padding: "60px 40px 70px",
          maxWidth: 960,
          margin: "0 auto",
          minHeight: 360,
          background: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ── Headline ── */}
        <div
          className="anim anim-d1"
          style={{ textAlign: "center", marginBottom: 32, position: "relative", zIndex: 2 }}
        >
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(26px, 4vw, 42px)",
              lineHeight: 1.2,
              color: "#111",
            }}
          >
            <span style={{ color: "#2D6A4F", fontStyle: "italic" }}>What</span>{" "}
            our customer
            <br />
            says{" "}
            <span className="hl-underline-yellow">About Us</span>
          </h2>
        </div>

        {/* ── Quote Card ── */}
        <div
          className="anim anim-d2"
          style={{
            background: "#F0F7F2",
            borderRadius: 20,
            padding: "32px 44px 32px 52px",
            maxWidth: 460,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Opening quote mark */}
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 52,
              color: "#2D6A4F",
              lineHeight: 1,
              position: "absolute",
              top: 14,
              left: 14,
              opacity: 0.8,
            }}
          >
            "
          </span>

          <p
            style={{
              fontSize: 13,
              lineHeight: 1.85,
              color: "#333",
              textAlign: "center",
            }}
          >
            Elementum delivered the site with in the timeline
            as they requested. In the end, the client found a 50%
            increase in traffic with in days since its launch. They
            also had an impressive ability to use technologies that
            the company hasn't used, which have also proved to
            be easy to use and reliable
          </p>

          {/* Closing quote mark */}
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 52,
              color: "#2D6A4F",
              lineHeight: 1,
              position: "absolute",
              bottom: 6,
              right: 18,
              opacity: 0.8,
            }}
          >
            "
          </span>
        </div>

        {/* ── Floating avatars ── */}

        {/* Top-left */}
        <div className="float-av av-hide-mobile" style={{ top: 30, left: 30, width: 70, height: 70 }}>
          <AvatarGlasses size={70}/>
        </div>

        {/* Mid-left (large) */}
        <div className="float-av" style={{ top: 110, left: 10, width: 100, height: 100 }}>
          <AvatarPurple size={100}/>
        </div>

        {/* Bottom-left */}
        <div className="float-av av-hide-mobile" style={{ bottom: 40, left: 60, width: 68, height: 68 }}>
          <AvatarCap size={68}/>
        </div>

        {/* Top-right 1 */}
        <div className="float-av av-hide-mobile" style={{ top: 30, right: 130, width: 60, height: 60 }}>
          <AvatarWoman size={60}/>
        </div>

        {/* Top-right 2 */}
        <div className="float-av av-hide-mobile" style={{ top: 20, right: 50, width: 66, height: 66 }}>
          <AvatarColorful size={66}/>
        </div>

        {/* Mid-right */}
        <div className="float-av av-hide-mobile" style={{ top: 130, right: 30, width: 72, height: 72 }}>
          <AvatarBlue size={72}/>
        </div>

        {/* Bottom-right (large) */}
        <div className="float-av" style={{ bottom: 20, right: 20, width: 96, height: 96 }}>
          <AvatarRedShirt size={96}/>
        </div>
      </section>
    </>
  );
}