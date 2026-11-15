import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0F14",
          padding: "60px 80px",
          fontFamily: "sans-serif"
        }}
      >
        {/* Subtle border outline */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid #26313D",
            borderRadius: 16
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 28, color: "#79C0A5", fontWeight: 700 }}>λ</span>
            <span style={{ fontSize: 32, color: "#E6EDF3", fontWeight: 700, letterSpacing: "-0.02em" }}>
              {siteConfig.name}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 8,
              backgroundColor: "#121922",
              border: "1px solid #26313D",
              color: "#79C0A5",
              fontSize: 16,
              fontFamily: "monospace"
            }}
          >
            <span>●</span>
            <span>Uzbekistan</span>
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              margin: 0,
              lineHeight: 1.1
            }}
          >
            {siteConfig.title}
          </h1>
          <p
            style={{
              fontSize: 30,
              color: "#79B8FF",
              fontWeight: 600,
              margin: 0
            }}
          >
            {siteConfig.specialization}
          </p>
          <p
            style={{
              fontSize: 22,
              color: "#8B949E",
              maxWidth: 900,
              lineHeight: 1.4,
              margin: 0
            }}
          >
            {siteConfig.shortBio}
          </p>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid #26313D",
            color: "#8B949E",
            fontSize: 18,
            fontFamily: "monospace"
          }}
        >
          <div>3+ Years Experience · 30+ Projects · 5+ Real Clients</div>
          <div style={{ color: "#79C0A5" }}>github.com/AbdullayevTemurmalik</div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
