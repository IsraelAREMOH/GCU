import DUST_TO_DREAM from "../assets/DUST_TO_DREAM.png";
import FAR_FROM_HOME from "../assets/FAR_FROM_HOME.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideIn = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Project_MovieSec = () => {
  return (
    <div className="bg-[#f4f6ff] text-gray-900 py-12 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl text-gray-500 font-bold">
          See the <span className="text-[#19673B]">stories</span> we've told
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          Take a journey through our lens, mic and mind. Explore the moments we
          captured, the stories we shaped and the voices we amplified.
        </p>
      </motion.div>

      <div className="bg-[#2a2727] text-gray-500 px-4 py-12 md:px-10 lg:px-8">
        <motion.h3
          className="text-2xl font-semibold text-gray-500 text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Movies
        </motion.h3>

        {/* Far from Home */}
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-[#2a2727] mb-12">
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("left")}
          >
            <h4 className="text-xl text-gray-400 font-bold mb-4">
              Far from home
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Far From Home is a 2022 Nigerian young adult drama series and
              Netflix’s first original YA series from Nigeria. Produced by
              Inkblot Productions, the five-part series follows the story of
              Ishaya Bello (Mike Afolarin), a charismatic teenager and talented
              artist from a poor family. His dreams suddenly appear within reach
              when a prestigious scholarship to the most exclusive school in the
              country catapults him into the affluent world of Nigeria’s elite.
              All the while, a huge secret threatens Ishaya’s newfound status
              and, ultimately, his family’s safety.
            </p>
          </motion.div>

          <motion.div
            className="w-full sm:w-72 md:w-80 lg:w-96 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("right")}
          >
            <div className="bg-black rounded-lg p-1">
              <motion.img
                src={FAR_FROM_HOME}
                alt="Far from Home poster"
                className="rounded w-full h-auto max-h-[400px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Dust to Dreams */}
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-[#2a2727]">
          <motion.div
            className="w-full sm:w-72 md:w-80 lg:w-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("left")}
          >
            <div className="bg-black rounded-lg p-1">
              <motion.img
                src={DUST_TO_DREAM}
                alt="Dust to Dreams poster"
                className="rounded w-full h-auto max-h-[400px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("right")}
          >
            <h4 className="text-xl text-gray-400 font-bold mb-4">
              Dust to dreams
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Dust to Dreams is an upcoming short film directed by Idris Elba.
              Set against the vibrant backdrop of Lagos, Nigeria, the narrative
              delves into the intricate dynamics of a family reuniting after
              years of separation.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-gray-500">Plot Summary:</strong> The story
              centers on Milli, a reserved teenager who meets her estranged
              father, a long-lost soldier, for the first time. This encounter
              strains her already fragile relationship with her mother, a
              revered nightclub owner nearing the end of her journey. As the
              family grapples with unresolved issues and hopes for
              reconciliation, music emerges as a unifying force, culminating in
              a soul-stirring duet that promises healing and redemption.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project_MovieSec;
