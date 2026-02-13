import { motion } from "framer-motion";
import PHOTO_38 from "../assets/PHOTO_38.jpg";

const Service_TainingSection = () => {
  return (
    <div>
      <section className="bg-[#f4f6ff] text-gray-500 py-12 px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl mb-2 font-bold">About Our Training</h2>
            <p className="text-gray-400 mb-4">
              At GM LAWASON STUDIOS, We don't just teach - we transform passion
              into mastery. Our training programs are built for creatives who
              want more than theory - they want-real-world skills,
              hands-on-practice, and expert mentorship. Whether you're stepping
              into the world of photography, filmmaking, audio production, or
              content creation, our goal is simple: to equip you with everything
              you need to grow confidently, create ferlessly, and succed
              professionally. Join a cummunity that nurtures creativity,
              celebrates progress and pushes you towards your full potential.
            </p>
            <button className="bg-[#f66304] hover:bg-orange-700 text-white px-5 py-2 rounded shadow">
              Contact Us
            </button>
          </motion.div>
          <div className="lg:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              src={PHOTO_38}
              alt="Training Group"
              className="w-full h-[450px] items-center object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service_TainingSection;
