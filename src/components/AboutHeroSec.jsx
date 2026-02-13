import Btn from "../constants/Btn";

function AboutHeroSec() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* TEXT */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-semibold text-white leading-tight">
              EMBEDDED FINANCE AT SCALE
            </h1>

            <p className="mt-6 text-lg text-white max-w-xl">
              GCU Enterprise brings together the trust of a licensed financial
              institution, the scale of a superplatform, and the expertise of a
              full-service team.
            </p>

            <div className="mt-8">
              <Btn />
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <div className="animate-hero-float">
              <img
                src="/Aire.png"
                alt="GCU embedded finance platform"
                className="w-full h-auto object-contain max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSec;
