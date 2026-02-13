import { motion } from "framer-motion";
import PHOTO_25 from "../assets/PHOTO_25.jpg";

const About_TrainingConsultation = () => {
  return (
    <div>
      <section className="bg-[#1e1e1e] text-white py-12 px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl mb-2 font-bold">Training & Consultation</h2>
            <p className="text-gray-300 mb-4">
              We believe that creativity thrives in a community of learning.
              That’s why we offer dynamic training and one-on-one consultation
              services tailored to emerging talents, creative teams, and growing
              brands.
            </p>
            <p className="text-gray-300 mb-4">
              Through hands-on workshops, studio masterclasses, and guided
              mentorship sessions, we empower aspiring filmmakers, podcasters,
              and photographers with the tools, techniques, and confidence to
              elevate their craft.
            </p>
            <p className="text-gray-300">
              Our consultations are personalized and practical — from content
              strategy and script development to gear selection and
              post-production workflows. Whether you’re just getting started or
              refining your creative process, we’re here to guide you forward.
            </p>
            <button className="bg-[#f66304] hover:bg-orange-700 text-white px-5 py-2 rounded shadow">
              Contact Us
            </button>
          </motion.div>
          <div className="lg:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              src={PHOTO_25}
              alt="Training Group"
              className="w-full h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_TrainingConsultation;
