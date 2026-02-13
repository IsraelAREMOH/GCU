import { motion as Motion } from "framer-motion";

const Professionalservices = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-12 max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-3xl text-[#02066f] mb-2 font-bold">
            The Tools You Need, From Compliance Professionals
          </h2>
          <p className="text-gray-500 mb-4">
            We’ll help you create efficient, effective policies and procedures
            tailored to your firm’s business model. We’ll also select your
            technology platforms to give your clients the best service and
            prioritize risks so you know where to focus your time.
          </p>
          <p className="text-gray-500 mb-4">
            At GCU Enterprise, we understand the importance of efficient and
            effective compliance management for Registered Investment Advisors
            (RIAs). Our team of industry professionals specializes in creating
            tailored policies and procedures designed for your firm’s business
            model. You’ll know exactly where to focus your time and resources.
          </p>
        </Motion.div>
        <div className="md:w-1/2 ">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              src="images/GCU27.webp"
              alt="Support"
              className="w-full h-[450px] items-center object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professionalservices;
