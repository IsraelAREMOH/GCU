const MarketInsights = () => {
  const data = [
    { name: "Healthcare", perc: 17, color: "#2563eb" },
    { name: "Business Services", perc: 16, color: "#f59e0b" },
    { name: "Technology", perc: 16, color: "#1f2937" },
    { name: "Financial Services", perc: 19, color: "#06b6d4" },
    { name: "Consumer Services", perc: 12, color: "#14b8a6" },
    { name: "Capital Equipment", perc: 20, color: "#02066f" },
  ];

  const gapSize = 0.6;

  // Build conic-gradient stops with explicit white gaps
  const stops = [];
  let cumulative = 0;

  data.forEach((item, index) => {
    // Start of color
    stops.push(`${item.color} ${cumulative}%`);
    cumulative += item.perc;
    // End of color
    stops.push(`${item.color} ${cumulative}%`);

    // Add white gap (except after the last segment)
    if (index < data.length - 0) {
      stops.push(`#ffffff ${cumulative}%`); // start white
      cumulative += gapSize;
      stops.push(`#ffffff ${cumulative}%`); // end white
    }
  });

  // Close the circle
  stops.push(`#ffffff ${cumulative}%`);
  stops.push(`#ffffff 100%`);

  const gradient = `conic-gradient(${stops.join(", ")})`;

  return (
    <div className="w-full  bg-white lg:px-24 space-y-16 px-4 py-12 md:px-12">
      {/* Header - centered, matching your uppercase + subtitle */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
          MARKET INSIGHTS
        </h2>
        <p className="mt-2 text-xl md:text-2xl font-medium text-blue-900">
          PROFESSIONALS
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 xl:gap-20">
        {/* Donut Chart - size  */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0">
          {/* Outer background (light gray) */}
          <div className="absolute inset-0 rounded-full bg-gray-100"></div>

          {/* Colored donut */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: gradient }}
          />

          {/* White hole + center text */}
          <div className="absolute inset-[18%] md:inset-[20%] rounded-full bg-white flex items-center justify-center shadow-inner">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-gray-800">
                100%
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-1 font-medium">
                Market Share
              </p>
            </div>
          </div>
        </div>

        {/* Legend / Table - card style with header row */}
        <div className="w-full ">
          <div className="bg-white">
            {/* Table header */}
            <div className="grid grid-cols-[auto,1fr,auto] gap-2 px-2 py-4 font-semibold text-gray-800">
              <div></div>
              <div>Segment</div>
              <div className="text-right">Percentage</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-500">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto,1fr,auto] gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 shadow-sm"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  <div className="text-gray-700">{item.name}</div>
                  <div className="text-right font-medium text-gray-900">
                    {item.perc}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
