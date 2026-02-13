import { TrainingTestimonial } from "../constants";
import { videoFiles2 } from "../constants";
import Green_Underline from "../constants/Green_Underline";
import { motion } from "framer-motion";

const testimonialVariants = (isEven) => ({
  hidden: { opacity: 0, x: isEven ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const imageVariants = {
  hidden: { scale: 0.8, rotate: -5, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Service_trainingTestimo = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 sm:px-6 lg:px-20 space-y-16">
      {/* Testimonials Section */}
      <section className="text-center">
        <motion.h2
          className="text-2xl sm:text-3xl text-gray-500 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Students <span className="text-[#19673B]">Testimonials</span>
        </motion.h2>
        <Green_Underline />

        <div className="mt-10 space-y-10">
          {TrainingTestimonial.map((t, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`max-w-4xl mx-auto flex items-start gap-4 text-left border-b pb-6 ${
                  isEven ? "flex-row-reverse" : "flex-row"
                }`}
                variants={testimonialVariants(isEven)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.img
                  src={t.image}
                  alt="student"
                  className="w-28 ml-4 h-28 rounded-full flex-shrink-0 object-cover"
                  variants={imageVariants}
                />
                <div>
                  <p className="text-sm sm:text-base">{t.text}</p>
                  <p className="font-semibold mt-2">{t.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Training Section */}
      <section className="text-center">
        <motion.h2
          className="text-2xl sm:text-3xl text-gray-500 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Training <span className="text-[#19673B]">Moments</span>
        </motion.h2>
        <Green_Underline />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videoFiles2.map((src, index) => (
            <motion.video
              key={index}
              className="w-full h-48 object-cover rounded-lg shadow-md"
              controls
              preload="metadata"
              custom={index}
              variants={videoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service_trainingTestimo;
