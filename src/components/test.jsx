import { motion as Motion, useReducedMotion } from "framer-motion";

const RadialDiagram = ({
  centerTitle = "Trading",
  centerSubtitle = "Enterprise",
  nodes = [
    { label: "Investors", angle: -90 },
    { label: "Borrowers", angle: 90 },
    { label: "Private Equity\nSponsors", angle: 180 },
    { label: "Peers", angle: 0 },
  ],
}) => {
  const prefersReducedMotion = useReducedMotion();

  const size = 420;
  const center = size / 2;
  const orbitRadius = 150;
  const nodeRadius = 34;

  const polar = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + orbitRadius * Math.cos(rad),
      y: center + orbitRadius * Math.sin(rad),
    };
  };

  return (
    <figure
      role="group"
      aria-labelledby="ecosystem-title"
      className="w-full max-w-[420px] mx-auto"
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-auto"
        aria-hidden="false"
      >
        {/* OUTER RING */}
        <circle
          cx={center}
          cy={center}
          r={orbitRadius + 28}
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="1"
        />

        {/* INNER RING */}
        <circle
          cx={center}
          cy={center}
          r={orbitRadius - 40}
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* ORBIT GROUP (animated) */}
        <Motion.g
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          transform-origin={`${center}px ${center}px`}
        >
          {nodes.map(({ label, angle }, i) => {
            const { x, y } = polar(angle);
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={nodeRadius}
                  fill="#02066F"
                  stroke="#1E40AF"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="600"
                >
                  {label.split("\n").map((line, idx) => (
                    <tspan key={idx} x={x} dy={idx === 0 ? "-0.3em" : "1.1em"}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </Motion.g>

        {/* CENTER NODE */}
        <circle cx={center} cy={center} r="56" fill="url(#centerGradient)" />

        {/* CENTER GLOW */}
        <circle
          cx={center}
          cy={center}
          r="64"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="8"
          opacity="0.25"
        />

        {/* CENTER TEXT */}
        <text
          x={center}
          y={center - 6}
          textAnchor="middle"
          fill="#FACC15"
          fontSize="42"
          fontWeight="900"
        >
          GCU
        </text>
        <text
          x={center}
          y={center + 18}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="16"
          fontWeight="600"
        >
          {centerTitle}
        </text>
        <text
          x={center}
          y={center + 34}
          textAnchor="middle"
          fill="#93C5FD"
          fontSize="12"
        >
          {centerSubtitle}
        </text>

        {/* DEFINITIONS */}
        <defs>
          <radialGradient id="centerGradient">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#02066F" />
          </radialGradient>
        </defs>
      </svg>
    </figure>
  );
};

export default RadialDiagram;
