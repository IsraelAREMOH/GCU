import { motion as Motion } from "framer-motion";

const ClientService = () => {
  return (
    <div>
      <section className="bg-white text-[#02066f] py-12 px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 max-w-7xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl mb-2 font-bold">
              Strategic Guidance from Financial Professionals
            </h2>

            <p className="text-gray-500 mb-4">
              In addition to our compliance expertise, GCU Enterprise offers a
              wide range of strategy and operations services specifically
              designed for Registered Investment Advisors (RIAs). Our
              consultants are well-versed in both SEC and state regulations,
              providing guidance tailored to your firm’s regulatory obligations.
            </p>
            <p className="text-gray-500 mb-4">
              From Custodian Selection to Technology Reviews and Product
              Strategy, we have you covered. Our consultants leverage deep
              understanding of regulations and agile methods to help you
              navigate the complexities of compliance effectively. Our team will
              work closely with you to ensure compliance with all relevant
              regulations while maximizing growth opportunities.
            </p>
            <p className="text-gray-500">
              We can help with registration, outsourcing your Chief Compliance
              Officer role, or conducting annual reviews. Establish a compliant
              program aligned with industry best practices to position your firm
              for long-term success.
            </p>
          </Motion.div>
          <div className="lg:w-1/2">
            <Motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              src="images/GCU34.webp"
              alt="Training Group"
              className="w-full h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientService;
