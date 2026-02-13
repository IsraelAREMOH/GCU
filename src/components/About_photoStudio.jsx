import Photographer from "../assets/photographer.jpg";
import pixel_40 from "../assets/pixel_40.jpg";
import black from "../assets/black.jpg";
import young from "../assets/young.jpg";
import ContactButton from "./contactButton";
import { motion } from "framer-motion";

const About_photoStudio = () => {
  return (
    <div>
      <div className="w-full bg-white-100 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-2xl md:text-2xl font-bold text-gray-500 mb-6 leading-tight">
              Photography Studio
            </h1>
            <p className="mt-6 text-gray-600 mb-6 leading-relaxed">
              Our photography studio is built for creators who want more than
              just a space,, we turn moments into masterpieces. Specializing in
              high-quality photography and cinematography, we blend creativity
              with technical excellence to bring your vision to life.
            </p>
            <p className="mt-6 text-gray-600 mb-6 leading-relaxed">
              With a passion for storytelling and cutting-edge equipment, we
              deliver stunning visuals that captivate and inspire. Whether it’s
              a brand project, event, or personal shoot, we ensure every frame
              tells a story worth remembering.
            </p>
            <p className="mt-6 mb-6 leading-relaxed text-gray-600">
              Whether you’re a brand, Photographer, or content creator, this is
              the space where standout visuals come to life.
            </p>
            <ContactButton />
          </motion.div>

          {/* Right Image Section */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col min-h-[400px] stacked-vertical-on-minh"
          >
            <div className="flex flex-col">
              <div className="grid grid-cols-2 grid-rows-1 w-full gap-0">
                {[Photographer, pixel_40, black, young].map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt="Photographer"
                    className="object-cover w-full h-48 mb-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                ))}
              </div>
              <div className="w-full h-6 bg-emerald-700 mt-0 rounded-b-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About_photoStudio;
