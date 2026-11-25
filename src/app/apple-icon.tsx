import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050507",
          borderRadius: 40,
          border: "4px solid #1E1F24"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontFamily: "monospace",
            fontWeight: 800,
            fontSize: 108,
            color: "#78C7AD",
            lineHeight: 1
          }}
        >
          <span>λ</span>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#60A5FA",
              marginLeft: 6
            }}
          />
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
