import { ImageResponse } from "next/og";

export const alt = "Benhouss — Concepteur Développeur d'Applications Full Stack Lille";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #18181b 50%, #0a0a0a 100%)",
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orb top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,44,54,0.26) 0%, rgba(251,44,54,0.08) 55%, transparent 100%)",
          }}
        />
        {/* Background orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,44,54,0.18) 0%, rgba(251,44,54,0.06) 55%, transparent 100%)",
          }}
        />

        {/* Location pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(251,44,54,0.12)",
            border: "1px solid rgba(251,44,54,0.28)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#fb2c36",
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "rgba(163,163,175,0.9)",
              letterSpacing: "0.05em",
            }}
          >
            Lille · Hauts-de-France · Remote
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#fafafa",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Benhouss
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "rgba(163,163,175,0.85)",
            marginBottom: 44,
            letterSpacing: "-0.01em",
          }}
        >
          Concepteur Développeur d'Applications Full Stack
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Next.js", "React", "NestJS", "Ionic", "Node.js", "TypeScript"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(24,24,27,0.95)",
                  border: "1px solid #404040",
                  borderRadius: 8,
                  padding: "10px 22px",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#a3a3af",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, #fb2c36 0%, #fb2c36 60%, rgba(251,44,54,0.35) 100%)",
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 88,
            fontSize: 18,
            fontWeight: 500,
            color: "rgba(163,163,175,0.45)",
            letterSpacing: "0.04em",
          }}
        >
          benhouss.site
        </div>
      </div>
    ),
    { ...size }
  );
}
