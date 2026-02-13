import { equipmentItems, podcastImages } from "../constants";
import Green_Underline from "../constants/Green_Underline";
import White_Underline from "../constants/White_Underline";
import BtnCenter from "./BtnCenter";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Project_RentalMedia = () => {
  return (
    <div className="bg-[#2a2727] text-white px-4 py-10 md:px-16">
      {/* Podcast Studio Section */}
      <motion.div
        className="text-center mb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-100">
          <span className="text-white">Pod</span>
          <span className="text-gray-400">cast</span> Studio
        </h2>
        <White_Underline />
        <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          This is the space where voices are shaped, stories are shared, and
          every detail is tuned to perfection.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 items-center">
          {podcastImages.map(({ src }, index) => (
            <motion.div
              key={index}
              className={`w-40 h-64 overflow-hidden rounded-lg ${
                index === 1 ? "md:mt-6" : index === 2 ? "md:mt-12" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.img
                src={src}
                alt={`Podcast ${index + 1}`}
                className="w-full h-full max-w-[160px] aspect-[3/4] object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Equipment Rentals Section */}
      <div className="text-center relative">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Equipment <span className="text-[#19673b]">Rentals</span>
        </motion.h2>
        <Green_Underline />
        <motion.p
          className="text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          Our tools, your vision. See the gear that powers productions of all
          sizes — from cameras to lighting and audio setups.
        </motion.p>

        {/* Custom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 justify-center mt-20 relative">
          {/* Top Row */}
          {equipmentItems.slice(0, 3).map(({ title, src }, index) => {
            const colStart =
              index === 0
                ? "md:col-start-1"
                : index === 1
                ? "md:col-start-3"
                : "md:col-start-5";
            return (
              <motion.div
                key={index}
                className={`col-span-2 flex flex-col items-center w-full max-w-[160px] mx-auto ${colStart} ${
                  index < 2 ? "md:ml-28" : ""
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.25, duration: 0.6 }}
              >
                <motion.img
                  src={src}
                  alt={title}
                  className="w-full h-72 object-cover rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="mt-3 text-sm font-medium text-white text-center">
                  {title}
                </p>
              </motion.div>
            );
          })}

          {/* Bottom Row */}
          {equipmentItems.slice(3).map(({ title, src }, index) => {
            const colStart = index === 0 ? "md:col-start-2" : "md:col-start-4";
            return (
              <motion.div
                key={index}
                className={`col-span-2 flex flex-col items-center w-full max-w-[160px] mx-auto ${colStart} md:ml-28 md:-mt-72`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
              >
                <motion.img
                  src={src}
                  alt={title}
                  className="w-full h-72 object-cover rounded-lg"
                  whileHover={{ scale: 1.05 }}
                />
                <p className="mt-3 text-sm font-medium text-white text-center">
                  {title}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <BtnCenter />
        </motion.div>
      </div>
    </div>
  );
};

export default Project_RentalMedia;
