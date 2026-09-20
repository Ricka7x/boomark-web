import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { APP_NAME } from "@/lib/constants";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${APP_NAME}: the ghost that never ghosts your bookmarks`;

export default function Image() {
  const iconBase64 = readFileSync(join(process.cwd(), "public/favicon-512x512.png")).toString(
    "base64",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0a10",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={`data:image/png;base64,${iconBase64}`}
          width={140}
          height={140}
          style={{ borderRadius: 32 }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#f3f1f6",
          }}
        >
          {APP_NAME}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "#bb7bff",
            fontWeight: 500,
          }}
        >
          The ghost that never ghosts your bookmarks.
        </div>
      </div>
    ),
    { ...size },
  );
}
