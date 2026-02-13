import PD1 from "../assets/PD1.png";
import PD2 from "../assets/PD2.png";
import PD3 from "../assets/PD3.png";
import PD4 from "../assets/PD4.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const hoverStyle = {
  scale: 1.05,
  rotate: 1,
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};

const Project_SupportSec = () => {
  const images = [PD2, PD1, PD3, PD4, PD4];

  return (
    <div>
      <section className="bg-white text-gray-400">
        <motion.div
          className="max-w-7xl px-4 text-center mx-auto py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            variants={fadeUp}
            custom={1}
          >
            Production <span className="text-[#19673b]">Support</span>
          </motion.h1>
          <motion.p
            className="text-center mb-10 m-auto max-w-2xl"
            variants={fadeUp}
            custom={2}
          >
            From pre-production to final cut, we support creative teams with
            technical expertise, crew, and infrastructure.
          </motion.p>

          <div className="grid grid-cols-3 grid-rows-2 gap-4 m-8">
            {images.map((src, index) => {
              const isTall = index === 1; // for the row-span image

              return (
                <motion.div
                  key={index}
                  className={`overflow-hidden ${
                    isTall ? "row-span-2 h-full" : "h-60"
                  } rounded-lg w-full`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={hoverStyle}
                >
                  <img
                    src={src}
                    alt={`support image ${index + 1}`}
                    className="object-cover w-full h-full transition-all duration-300"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Project_SupportSec;
