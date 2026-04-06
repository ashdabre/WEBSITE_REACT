// ─── Section2.jsx ────────────────────────────────────────────────────────────
// "Tomorrow should be better than today" + "See how we can help you progress"

import { useState } from "react";

// ─── Inline Global Styles ─────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #fff; font-family: 'DM Sans', sans-serif; }

    .read-more-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 600;
      color: #111;
      text-decoration: none;
      letter-spacing: 0.04em;
      transition: gap 0.2s ease;
    }
    .read-more-link::after {
      content: '';
      display: block;
      width: 60px;
      height: 1.5px;
      background: #111;
      transition: width 0.2s ease;
    }
    .read-more-link:hover { gap: 14px; }
    .read-more-link:hover::after { width: 80px; }

    .hl-underline {
      position: relative;
      display: inline-block;
    }
    .hl-underline::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 4px;
      background: #F5E642;
      border-radius: 2px;
    }

    .circle-wrap {
      border-radius: 50%;
      overflow: hidden;
      line-height: 0;
      position: relative;
      z-index: 2;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .circle-wrap:hover {
      transform: scale(1.03);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }

    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .anim-1 { animation: fadeSlideUp 0.6s 0.0s ease both; }
    .anim-2 { animation: fadeSlideUp 0.6s 0.15s ease both; }
    .anim-3 { animation: fadeSlideUp 0.6s 0.3s ease both; }
    .anim-4 { animation: fadeSlideUp 0.6s 0.45s ease both; }

    @media (max-width: 640px) {
      .two-col { flex-direction: column !important; }
      .two-col-rev { flex-direction: column !important; }
      .col-img { width: 220px !important; margin: 0 auto !important; }
    }
  `}</style>
);

// ─── SVG Illustrations ────────────────────────────────────────────────────────

const MeetingPhoto = () => (
  <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" width="250" height="250">
    <defs><clipPath id="clip-meeting"><circle cx="125" cy="125" r="125"/></clipPath></defs>
    <g clipPath="url(#clip-meeting)">
      <rect width="250" height="250" fill="#D4B896"/>
      {/* Plant */}
      <ellipse cx="228" cy="55" rx="22" ry="32" fill="#2D6A4F"/>
      <ellipse cx="215" cy="70" rx="16" ry="24" fill="#3A7A5C"/>
      <rect x="220" y="78" width="10" height="50" rx="4" fill="#52796F"/>
      {/* Table */}
      <ellipse cx="125" cy="188" rx="145" ry="42" fill="#8B6B45"/>
      {/* Person 1 – dark suit, left */}
      <ellipse cx="72" cy="155" rx="34" ry="52" fill="#2C3E50"/>
      <circle cx="72" cy="95" r="23" fill="#C8956A"/>
      <ellipse cx="72" cy="84" rx="19" ry="13" fill="#3D2B1A"/>
      <rect x="67" y="116" width="10" height="32" rx="3" fill="#E53E3E"/>
      {/* Person 2 – grey suit, right */}
      <ellipse cx="178" cy="158" rx="34" ry="48" fill="#718096"/>
      <circle cx="178" cy="98" r="22" fill="#D4A574"/>
      <ellipse cx="178" cy="87" rx="18" ry="12" fill="#4A3525"/>
      {/* Hands on table */}
      <ellipse cx="105" cy="186" rx="20" ry="10" fill="#C49070"/>
      <ellipse cx="152" cy="186" rx="18" ry="9" fill="#C8A070"/>
    </g>
  </svg>
);

const WorkshopPhoto = () => (
  <svg viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg" width="230" height="230">
    <defs><clipPath id="clip-workshop"><circle cx="115" cy="115" r="115"/></clipPath></defs>
    <g clipPath="url(#clip-workshop)">
      <rect width="230" height="230" fill="#D4B896"/>
      {/* Wall */}
      <rect width="230" height="230" fill="#E8D5C0"/>
      {/* Table surface */}
      <rect x="0" y="155" width="230" height="75" fill="#8B6B45"/>
      {/* Laptop */}
      <rect x="52" y="112" width="92" height="56" rx="4" fill="#2D3748"/>
      <rect x="57" y="117" width="82" height="44" rx="2" fill="#4A5568"/>
      <rect x="42" y="166" width="112" height="8" rx="4" fill="#1A202C"/>
      {/* Salad / bowl */}
      <ellipse cx="175" cy="163" rx="26" ry="12" fill="#8BC34A"/>
      <ellipse cx="175" cy="160" rx="23" ry="10" fill="#A5D65A"/>
      {/* Person 1 foreground – dark beard */}
      <ellipse cx="72" cy="135" rx="29" ry="48" fill="#5B8A72"/>
      <circle cx="72" cy="88" r="24" fill="#C49070"/>
      <ellipse cx="72" cy="76" rx="20" ry="14" fill="#2D1B0E"/>
      <ellipse cx="72" cy="104" rx="14" ry="7" fill="#4A3525" opacity="0.5"/>
      {/* Person 2 background – grey beanie */}
      <ellipse cx="155" cy="132" rx="26" ry="44" fill="#6B8080"/>
      <circle cx="155" cy="88" r="22" fill="#C8A07A"/>
      <ellipse cx="155" cy="74" rx="23" ry="7" fill="#7B8A90"/>
      <rect x="133" y="58" width="44" height="22" rx="8" fill="#8B9AA0"/>
    </g>
  </svg>
);

// ─── Triangle ────────────────────────────────────────────────────────────────

const Triangle = ({ size = 70, color = "#E8473F", style = {} }) => (
  <div
    style={{
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: `${size * 0.55}px solid transparent`,
      borderRight: `${size * 0.55}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
      zIndex: 1,
      ...style,
    }}
  />
);

// ─── Read More Link ───────────────────────────────────────────────────────────

const ReadMore = () => (
  <a href="#" className="read-more-link">
    Read more
  </a>
);

// ─── Section Component ────────────────────────────────────────────────────────

export default function Section2() {
  return (
    <>
      <GlobalStyles />

      <section
        style={{
          position: "relative",
          padding: "60px 48px 80px",
          overflow: "hidden",
          maxWidth: 900,
          margin: "0 auto",
          fontFamily: "'DM Sans', sans-serif",
          background: "#fff",
        }}
      >
        {/* Pink glow blob top-right */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: 60,
            width: 200,
            height: 160,
            background:
              "radial-gradient(ellipse at center, rgba(255,160,160,0.4) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── BLOCK 1: Text left | Image right ─────────────────────────────── */}
        <div
          className="two-col"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 40,
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Text */}
          <div className="anim-1" style={{ flex: 1, paddingTop: 20 }}>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                lineHeight: 1.2,
                color: "#111",
                marginBottom: 16,
              }}
            >
              Tomorrow{" "}
              <span className="hl-underline">should</span>
              <br />
              be better than{" "}
              <span
                style={{
                  background: "#B2EFD4",
                  borderRadius: 5,
                  padding: "0 6px",
                  display: "inline-block",
                }}
              >
                today
              </span>
            </h2>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: "#444",
                maxWidth: 300,
                marginBottom: 18,
              }}
            >
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>

            <ReadMore />
          </div>

          {/* Image + decorations */}
          <div
            className="col-img anim-2"
            style={{ flex: "0 0 260px", position: "relative" }}
          >
            {/* Red triangle top-right */}
            <Triangle size={66} style={{ top: -18, right: -18 }} />

            {/* Circle image */}
            <div className="circle-wrap" style={{ width: 250, height: 250 }}>
              <MeetingPhoto />
            </div>

            {/* Squiggly red line trailing from circle */}
            <svg
              style={{
                position: "absolute",
                bottom: -90,
                right: 20,
                overflow: "visible",
                zIndex: 3,
                pointerEvents: "none",
              }}
              width="220"
              height="100"
              viewBox="0 0 220 100"
            >
              <path
                d="M10 0 C60 20, 110 80, 210 90"
                stroke="#E8473F"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* ── BLOCK 2: Image left | Text right ─────────────────────────────── */}
        <div
          className="two-col-rev"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 40,
            position: "relative",
            zIndex: 2,
            marginTop: 70,
          }}
        >
          {/* Image + decorations */}
          <div
            className="col-img anim-3"
            style={{ flex: "0 0 240px", position: "relative" }}
          >
            {/* Red triangles */}
            <Triangle size={76} style={{ bottom: -20, left: -20 }} />
            <Triangle size={62} style={{ bottom: -10, right: 10 }} />

            {/* Circle image */}
            <div className="circle-wrap" style={{ width: 230, height: 230 }}>
              <WorkshopPhoto />
            </div>
          </div>

          {/* Text */}
          <div className="anim-4" style={{ flex: 1, paddingTop: 30 }}>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                lineHeight: 1.2,
                color: "#111",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  color: "#2D6A4F",
                  fontStyle: "italic",
                  fontFamily: "'DM Serif Display', serif",
                }}
              >
                See
              </span>{" "}
              how we can
              <br />
              help you progress
            </h2>

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: "#444",
                maxWidth: 320,
                marginBottom: 18,
              }}
            >
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>

            <ReadMore />
          </div>
        </div>
      </section>
    </>
  );
}