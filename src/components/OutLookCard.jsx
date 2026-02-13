import { motion as Motion } from "framer-motion";

export default function OutlookCard() {
  return (
    <section className="relative bg-gradient-to-br from-[#fff] via-[#020B3A] to-[#fff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
              Informed Perspectives
              <br />
              from Decades of
              <br />
              Experience
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
              For more than 25 years, GCU Enterprise has been at the forefront
              of the private credit market. Through cycles, we have gained
              in-depth experience and insights we are proud to share.
            </p>
          </div>

          {/* RIGHT CONTENT */}

          <div className="relative">
            {/* Trending Badge */}
            <span className="inline-block mb-6 bg-blue-600 text-white text-xs font-semibold tracking-widest px-4 py-2">
              TRENDING
            </span>

            {/* Animated Card */}
            <Motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="bg-gradient-to-br from-[#fff] to-[#0B1445] p-6 rounded-sm 
               shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Wrapper */}
              <Motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative overflow-hidden"
              >
                <img
                  src="images/GCU12.webp"
                  alt="Antares Capital 2026 Outlook"
                  className="w-full h-auto object-cover"
                />
              </Motion.div>

              {/* Meta */}
              <div className="mt-6 text-white">
                <p className="text-sm text-white/70">Jan 4, 2026</p>
                <h3 className="mt-2 text-xl md:text-2xl font-serif font-light leading-snug">
                  2026 Outlook: Disciplined Growth,
                  <br />
                  Resilient Returns
                </h3>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
