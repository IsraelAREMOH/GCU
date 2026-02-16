import { motion as Motion } from "framer-motion";

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
      <Motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl text-gray-500 font-bold">
          Our <span className="text-[#02066f]">Financial Services</span> For
          Clients
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          We have the industry experts that you and your clients can depend on
          when legal matters arise.
        </p>
      </Motion.div>

      <div className="bg-gray-900 text-gray-500 px-4 py-12 md:px-10 lg:px-8">
        <Motion.h3
          className="text-2xl font-semibold text-gray-500 text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Client Services
        </Motion.h3>

        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-900 mb-12">
          <Motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("left")}
          >
            <h4 className="text-xl text-gray-400 font-bold mb-4">
              Consulting Services For Your Clients
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              At GCU Enterprise, we provide consulting services like expert
              testimony, subject matter expertise and regulatory compliance
              consulting that law firms and their wealth management clients can
              rely on. Our industry experts assist with compliance and
              operations, offering services such as registration, remediation,
              and expert witness testimony. These services are essential for law
              firms’ clients who are starting or running an investment advisor
              or broker-dealer firm. Our consultants are seasoned professionals
              who have been cross examined, used for expert opinions, testimony
              and have the industry knowledge that law firms need.
            </p>
          </Motion.div>

          <Motion.div
            className="w-full sm:w-72 md:w-80 lg:w-96 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("right")}
          >
            <div className="bg-[#02066f] rounded-lg p-1">
              <Motion.img
                src="images/GCU5.webp"
                alt="Far from Home poster"
                className="rounded w-full h-auto max-h-[400px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </Motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-900">
          <Motion.div
            className="w-full sm:w-72 md:w-80 lg:w-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("left")}
          >
            <div className="bg-[#02066F] rounded-lg p-1">
              <Motion.img
                src="images/GCU13.webp"
                alt="Dust to Dreams poster"
                className="rounded w-full h-auto max-h-[400px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </Motion.div>

          <Motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("right")}
          >
            <h4 className="text-xl text-gray-400 font-bold mb-4">
              Expert Witness and Independent Consultant
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              You and clients need regulatory experts that you can depend on. We
              support you by serving as expert witnesses, independent consultant
              in response to a regulatory finding, or any compliance needs for
              your Registered Investment Advisor or Broker Dealer clients.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our consultants possess deep expertise in compliance and
              operations, making them invaluable in complex wealth management
              cases or regulatory actions. The diverse backgrounds of Oyster
              professionals add credibility to their expert opinions, which are
              highly valued by adjudicators.
            </p>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project_MovieSec;
