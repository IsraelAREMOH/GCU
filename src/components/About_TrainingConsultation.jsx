import { motion as Motion } from "framer-motion";
import ContactButton from "../constants/contactButton";

const About_TrainingConsultation = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 max-w-7xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl mb-2 font-bold">Who We Are</h2>
            <p className="text-gray-300 mb-4">
              With more than 3 decades of experience in Corporate Advisory and
              Capital Markets, we know just what you need. Our experience in the
              field of corporate advisory, capital raising, and debt and equity
              finance. We understand the complex and constantly evolving
              landscape of financing options and are committed to helping our
              clients navigate it successfully.
            </p>
            <p className="text-gray-300 mb-4">
              Our team of experts offers a wide range of services to support
              businesses at every stage of their growth. Whether you are a small
              startup looking for seed funding, a mature company seeking to
              expand, or a public corporation seeking to optimize your capital
              structure, we have the knowledge and experience to help you
              achieve your financing goals.
            </p>
            <p className="text-gray-300">
              At GCU Enterprise, our commitment to excellence, integrity, and
              partnership defines everything we do. We don’t just deliver
              products and services — we deliver consistency, confidence, and
              lasting impact.
            </p>
            <ContactButton />
          </Motion.div>
          <div className="lg:w-1/2">
            <Motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              src="images/Hall.jpg"
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
