import PHOTO_27 from "../assets/PHOTO_27.jpg";
import { motion } from "framer-motion";

const About_ProductionSupport = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-3xl text-gray-500 mb-2 font-bold">
            Production support
          </h2>
          <p className="text-gray-500 mb-4">
            Behind every successful production is a backbone of solid support —
            and that’s exactly what we provide. From pre-production planning to
            on-set execution and post-wrap logistics, GM LAWSON STUDIOS offers
            hands-on support to bring your vision to life with efficiency and
            excellence.
          </p>
          <p className="text-gray-500 mb-4">
            Our team assists with everything from crew coordination and location
            sourcing to equipment management, lighting setup, and sound design.
            We act as an extension of your creative team, ensuring no detail is
            overlooked and no moment is missed.
          </p>
          <p className="text-gray-500">
            Whether you’re shooting a feature, a campaign, or a quick-turn
            content series, we’re the reliable crew behind your crew — helping
            your production run smoothly, professionally, and on time.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow">
            Contact Us
          </button>
        </motion.div>
        <div className="md:w-1/2 ">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              src={PHOTO_27}
              alt="Support"
              className="w-full h-[450px] items-center object-cover"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-6 mt-2 bg-[#19763B] w-full"
            ></motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_ProductionSupport;
