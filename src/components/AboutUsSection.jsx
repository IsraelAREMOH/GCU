import PHOTO_21 from "../assets/PHOTO_21.jpg";
import PHOTO_32 from "../assets/PHOTO_32.jpg";
import G_star from "../assets/G_star.jpg";
import Studio_session from "../assets/Studio_session.jpg";
import { BriefcaseBusiness, Laugh, Star } from "Lucide-react";
import { motion } from "framer-motion";

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
  const images = [G_star, Studio_session, PHOTO_21, PHOTO_32];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-[#19673b] font-semibold text-lg mb-2"
            variants={fadeInUp}
            custom={1}
          >
            About GMLawason
          </motion.h3>
          <motion.h1
            className="text-2xl md:text-2xl font-bold text-gray-400 mb-6 leading-tight"
            variants={fadeInUp}
            custom={2}
          >
            Passion Delivered In Excellence
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-600 mb-6 leading-relaxed"
            variants={fadeInUp}
            custom={3}
          >
            At GM LAWASON STUDIOS, we turn moments into masterpieces.
            Specializing in high-quality photography and cinematography, we
            blend creativity with technical excellence to bring your vision to
            life.
          </motion.p>
          <motion.p
            className="mt-6 text-gray-600 mb-6 leading-relaxed"
            variants={fadeInUp}
            custom={4}
          >
            With a passion for storytelling and cutting-edge equipment, we
            deliver stunning visuals that captivate and inspire. Whether it’s a
            brand project, event, or personal shoot, we ensure every frame tells
            a story worth remembering.
          </motion.p>
          <motion.p
            className="font-bold text-gray-600"
            variants={fadeInUp}
            custom={5}
          >
            Your vision. Our lens. Unforgettable results.
          </motion.p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex flex-col min-h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-0">
            {images.map((src, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
          <div className="w-full h-6 bg-[#19673b] mt-4 rounded-b-lg"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="md:col-span-2 flex flex-wrap items-center justify-center gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={1}
          >
            <BriefcaseBusiness className="text-[#19673b] text-4xl" />
            <span className="text-[#19673b] font-semibold text-xl">15+</span>
            <span className="text-base text-[#19673b] font-semibold">
              Years In Business
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={2}
          >
            <Laugh className="text-[#19673b] text-4xl" />
            <span className="text-[#19673b] font-semibold text-xl">500+</span>
            <span className="text-base text-[#19673b] font-semibold">
              Happy Clients
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-1"
            variants={fadeInUp}
            custom={3}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[#19673b] text-4xl" />
            ))}
            <span className="text-[#19673b] font-semibold text-xl ml-2">
              5/5.0
            </span>
            <span className="text-base text-[#19673b] font-semibold">
              Rating
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
