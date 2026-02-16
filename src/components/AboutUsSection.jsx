import { BriefcaseBusiness, Laugh, Star } from "Lucide-react";
import { motion as Motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const AboutUsSection = () => {
  const images = [
    "images/GCU30.webp",
    "images/coachspace.jpg",
    "images/GCU16.webp",
    "images/image5.jpg",
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Motion.h3
            className="text-[#02066F] font-semibold text-lg mb-2"
            variants={fadeInUp}
            custom={1}
          >
            About GCUEnterprice
          </Motion.h3>
          <Motion.h1
            className="text-2xl md:text-2xl font-bold text-gray-400 mb-6 leading-tight"
            variants={fadeInUp}
            custom={2}
          >
            Passion Delivered In Excellence
          </Motion.h1>
          <Motion.p
            className="mt-6 text-gray-600 mb-6 leading-relaxed"
            variants={fadeInUp}
            custom={3}
          >
            With more than 25 years of experience in Corporate Advisory, Trade,
            Production and Capital Markets, we know just what you need.
          </Motion.p>
          <Motion.p
            className="mt-6 text-gray-600 mb-6 leading-relaxed"
            variants={fadeInUp}
            custom={4}
          >
            As an integrated firm across corporate advisory, trade, production,
            and capital markets, we combine strategic insight, operational
            excellence, and capital markets expertise to deliver dependable
            solutions and long-term value for our stakeholders.
          </Motion.p>
          <Motion.p
            className="font-bold text-gray-600"
            variants={fadeInUp}
            custom={5}
          >
            Think Smart. Execute Strong.
          </Motion.p>
        </Motion.div>

        {/* Right Image Section */}
        <Motion.div
          className="flex flex-col min-h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-0">
            {images.map((src, index) => (
              <Motion.div
                key={index}
                className="overflow-hidden h-48"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={src}
                  alt={`Team ${index}`}
                  className="object-cover w-full h-full transition-all duration-300"
                />
              </Motion.div>
            ))}
          </div>
          <div className="w-full h-6 bg-[#02066F] mt-4 rounded-b-lg"></div>
        </Motion.div>

        {/* Stats Section */}
        <Motion.div
          className="md:col-span-2 flex flex-wrap items-center justify-center gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={1}
          >
            <BriefcaseBusiness className="text-[#02066F] text-4xl" />
            <span className="text-[#02066F] font-semibold text-xl">25+</span>
            <span className="text-base text-[#02066F] font-semibold">
              Years In Business
            </span>
          </Motion.div>

          <Motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={2}
          >
            <Laugh className="text-[#02066F] text-4xl" />
            <span className="text-[#02066F] font-semibold text-xl">1000+</span>
            <span className="text-base text-[#02066F] font-semibold">
              Happy Clients
            </span>
          </Motion.div>

          <Motion.div
            className="flex items-center gap-1"
            variants={fadeInUp}
            custom={3}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[#02066F] text-4xl" />
            ))}
            <span className="text-[#02066F] font-semibold text-xl ml-2">
              5/5.0
            </span>
            <span className="text-base text-[#02066F] font-semibold">
              Rating
            </span>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
