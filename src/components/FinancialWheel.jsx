import React from "react";

const labels = [
  "Health & Wellness",
  "Retirement Planning",
  "Risk Management & Asset Protection",
  "Debt Management",
  "Education Planning",
  "Income Tax Planning",
  "Investment Planning",
  "Estate Planning & Administration",
  "Business Planning & Succession",
  "Charitable Planning",
  "Health & Wellness",
  "Retirement Planning",
];

const breakLabel = (text) => {
  if (text.includes("&")) {
    return text.split(" & ");
  }

  const words = text.split(" ");
  if (words.length <= 1) return [text];

  if (words.length === 2) return [words.slice(1, 2).join(" "), words[2]];

  if (words.length === 3) return [words.slice(1, 2).join(" "), words[2]];

  if (words.length === 4)
    return [words.slice(1, 2).join(" "), words.slice(4).join(" ")];

  return [
    words.slice(0, 2).join(" "),
    words.slice(2, 4).join(" "),
    words.slice(4).join(" "),
  ];
};

const colors = [
  "#0d9488",
  "#6b4f3a",
  "#7f1d1d",
  "#ef4444",
  "#fdba74",
  "#facc15",
  "#10b981",
  "#6366f1",
  "#6b21a8",
  "#1e3a8a",
  "#2519BC",
  "#02066f",
];

const polar = (cx, cy, r, a) => {
  const rad = (a * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
};

export default function FinancialWheel() {
  const cx = 250;
  const cy = 250;
  const outerR = 250;
  const midR = 200;
  const innerR = 105;
  const step = 360 / 12;

  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-auto max-w-[280px] sm:max-w-[320px] md:max-w-[450px] mx-auto"
    >
      {/* OUTER COLORED TRAPEZOIDS */}
      {labels.map((_, i) => {
        const a1 = i * step - 90;
        const a2 = (i + 1) * step - 90;

        const p1 = polar(cx, cy, outerR, a1);
        const p2 = polar(cx, cy, outerR, a2);
        const p3 = polar(cx, cy, midR, a2);
        const p4 = polar(cx, cy, midR, a1);

        return (
          <polygon
            key={`outer-${i}`}
            points={[p1, p2, p3, p4].map((p) => p.join(",")).join(" ")}
            fill={colors[i]}
          />
        );
      })}

      {/* INNER WHITE TRAPEZOIDS */}
      {labels.map((text, i) => {
        const a1 = i * step - 90;
        const a2 = (i + 1) * step - 90;

        const p1 = polar(cx, cy, midR, a1);
        const p2 = polar(cx, cy, midR, a2);
        const p3 = polar(cx, cy, innerR, a2);
        const p4 = polar(cx, cy, innerR, a1);

        const tx = polar(cx, cy, (midR + innerR) / 2, a1 + step / 2);

        return (
          <g key={`inner-${i}`}>
            <polygon
              points={[p1, p2, p3, p4].map((p) => p.join(",")).join(" ")}
              fill="#ffffff"
              stroke="#d1d5db"
              strokeWidth="1"
            />
            <text
              x={tx[0]}
              y={tx[1]}
              textAnchor="middle"
              fill="#6b7280"
              fontWeight="500"
              fontSize="10"
            >
              {breakLabel(text).map((line, idx, arr) => (
                <tspan
                  key={idx}
                  x={tx[0]}
                  dy={idx === 0 ? `-${(arr.length - 1) * 5}` : "10"}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* CENTER DODECAGON */}
      <polygon
        fill="#ffffff"
        stroke="#e5e7eb"
        strokeWidth="4"
        points={Array.from({ length: 12 })
          .map((_, i) => polar(cx, cy, 90, i * step - 90).join(","))
          .join(" ")}
      />

      {/* FAINT BACKGROUND LOGO */}
      <image
        href="images/SiteLogo.png"
        x={cx}
        y={cy}
        width="180"
        height="180"
        opacity="0.1"
        preserveAspectRatio="xMidYMid meet"
        transform="translate(-90 -90)"
      />

      {/* CENTER TEXT */}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        fontSize="20"
        fill="#374151"
        fontWeight="600"
      >
        Your Ideal
      </text>
      <text
        x={cx}
        y={cy + 28}
        textAnchor="middle"
        fontSize="34"
        fill="#1e40af"
        fontWeight="800"
      >
        Future
      </text>
    </svg>
  );
}
