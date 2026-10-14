import { ImageResponse } from "next/og";

export const alt = "Luke Halley, Lead Engineer at VerticalAI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#393e41";
const RED = "#c73c28";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          border: `16px solid ${INK}`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: RED, letterSpacing: 4, textTransform: "uppercase" }}>
            lukehalley.com
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 132, fontWeight: 900, color: INK, lineHeight: 0.9, letterSpacing: -4 }}>Luke Halley</div>
            <div style={{ display: "flex", marginTop: 28, width: 260, height: 14, background: RED }} />
            <div style={{ fontSize: 44, fontWeight: 700, color: INK, marginTop: 36 }}>Lead Engineer at VerticalAI</div>
            <div style={{ fontSize: 30, color: "#6a6d70", marginTop: 12 }}>
              Real-time voice and text agents for Australian businesses. Perth.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", width: 250, background: RED, alignItems: "center", justifyContent: "center" }}>
          <svg width="170" height="170" viewBox="0 0 200 200" fill="#ffffff">
            <polygon points="13.54,33.84 26.46,33.84 60,117.69 93.54,33.84 106.46,33.84 60,150" />
            <polygon points="140,33.84 186.46,150 173.54,150 140,66.16 106.46,150 93.54,150" />
            <circle cx="140" cy="111" r="6.5" />
          </svg>
        </div>
      </div>
    ),
    size
  );
}
