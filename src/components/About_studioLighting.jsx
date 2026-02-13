import PHOTO_2 from "../assets/PHOTO_2.jpg";
import { motion } from "framer-motion";

const About_studioLighting = () => {
  return (
    <div>
      <section className="bg-[#1e1e1e] text-white py-12 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          {/* Left image */}
          <motion.img
            src={PHOTO_2}
            alt="Image 4"
            className="w-full md:w-1/2 h-[450px] object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          />

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 justify-center"
          >
            <h2 className="text-3xl font-bold mb-2">Studio Lighting</h2>
            <p className="mb-4 text-gray-300">
              Lighting isn't just about visibility - it's about creating mood,
              shaping emotion, and defining the story. At GM LAWASONSTUDIOS, we
              treat lighting as an art form and technical foundation, using
              professional-grade equipment to sculpt each scene with precision.
            </p>
            <p className="mb-4 text-gray-300">
              Wether it's cinematic shoot, portrait session, product campaign,
              or music video, our lighting setups are tailored to bring out the
              best in every subject and setting. We offer soft, dramatic, or
              dynamic lighting techniques depending on your project's tone -
              using tools like softboxes, spotlights, RGB lights, and diffusion
              panels.
            </p>
            <div className="mb-4 text-gray-300">
              Our studio is designed for full control - no surprise, just
              consistency and creativity. With expert lighting direction and
              technical support on hand, we ensure your visual come out looking
              exactly as envisioned - vibrant, professional, and story-driven.
            </div>
            <button className="bg-[#f66304] hover:bg-[#19673b] text-white font-semibold py-2 px-4 rounded w-fit">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About_studioLighting;
