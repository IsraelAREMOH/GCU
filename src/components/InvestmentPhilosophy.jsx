import { principles } from "../constants";

const InvestmentPhilosophy = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-blue-900 mb-4">
            Investment Philosophy
          </h2>
          <p className="text-sm text-gray-600">
            Antares strives to implement the following key principles in our
            business:
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* IMAGE */}
              <div className="w-full h-[260px] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-xl text-blue-900 mb-4">
                {item.title}
              </h3>

              {/* LIST */}
              <ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-disc list-inside">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
