import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Luke Halley - Senior Cloud Engineer";
export const size = {
  width: 1200,
  height: 630,
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
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
        }}
      >
        {/* Decorative corner */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 80,
            height: 80,
            borderTop: "8px solid #f97316",
            borderLeft: "8px solid #f97316",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 80,
            height: 80,
            borderBottom: "8px solid #f97316",
            borderRight: "8px solid #f97316",
          }}
        />

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Luke Halley
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 700,
            color: "#f97316",
            marginBottom: 40,
          }}
        >
          Senior Cloud Engineer
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 60,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 900, color: "#ffffff" }}>
              95
            </div>
            <div style={{ fontSize: 24, color: "#a3a3a3" }}>AWS Accounts</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 900, color: "#ffffff" }}>
              5+
            </div>
            <div style={{ fontSize: 24, color: "#a3a3a3" }}>Years Experience</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 900, color: "#ffffff" }}>
              50%
            </div>
            <div style={{ fontSize: 24, color: "#a3a3a3" }}>Cost Savings</div>
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 28,
            fontFamily: "monospace",
            color: "#737373",
          }}
        >
          lukehalley.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
