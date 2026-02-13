const issues = [
  {
    id: "Complexity",
    label: "Complexity",
    Image: "images/Chess-Knight-Icon.webp",
  },
  {
    id: "Law",
    label: "Legal Conflict",
    Image: "images/People-Icon.webp",
  },
  {
    id: "Advice",
    label: "Conflicted Advice",
    Image: "images/Group-Icon.png",
  },
  {
    id: "Time",
    label: "Data Analysis",
    Image: "images/Time-Icon.webp",
  },
];

const approach = [
  {
    id: "Help",
    label: "We Help Align Your Vision and Values",
    Image: "images/Vision-Icon.webp",
  },
  {
    id: "Location",
    label: "Investment Advisors",
    Image: "images/Location-Icon.webp",
  },
];

const benefits = [
  {
    id: "Bag",
    label: "Reduced Financial Risk",
    Image: "images/Bag-Icon.webp",
  },
  {
    id: "Tax",
    label: "Reduced Tax Liability",
    Image: "images/Tax-Icon.webp",
  },
];

export default function ClientGCU() {
  return (
    <section className="w-full bg-white">
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <h2 className="text-4xl font-serif text-[#0B2C5D]">
          How GCU Enterprise Will Assist You
        </h2>
      </div>

      {/* HEADER ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-[#F5F3EF] py-6 text-center font-semibold text-[#0B2C5D]">
          Potential Issues
        </div>
        <div className="bg-[#0B2C5D] py-6 text-center font-semibold text-white">
          Our Approach
        </div>
        <div className="bg-[#00B67A] py-6 text-center font-semibold text-white">
          Potential Benefits
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT COLUMN */}
          <div className="grid grid-cols-2 gap-y-16 text-center">
            {issues.map(({ id, label, Image }) => (
              <div key={id} className="space-y-4">
                <div className="mx-auto h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center">
                  {/* ICON PLACEHOLDER */}
                  <img src={`/${Image}`} alt="Knight Icon" />
                </div>
                <p className="text-sm text-gray-700">{label}</p>
              </div>
            ))}
          </div>

          {/* CENTER COLUMN */}
          <div className="grid grid-cols-1 gap-y-16 text-center">
            {approach.map(({ id, label, Image }) => (
              <div key={id} className="space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center">
                  <img src={`/${Image}`} alt="People icon" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed px-6">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-2 gap-y-16 text-center">
            {benefits.map(({ id, label, Image }) => (
              <div key={id} className="space-y-4">
                <div className="mx-auto h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center">
                  <img src={`/${Image}`} alt="benefit" />
                </div>
                <p className="text-sm text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center gap-2 bg-[#02066f] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition">
          <span>✉</span>
          Contact
        </button>
      </div>
    </section>
  );
}
