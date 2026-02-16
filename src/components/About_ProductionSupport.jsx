import ContactButton from "../constants/contactButton";
import { motion as Motion } from "framer-motion";

const About_ProductionSupport = () => {
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
            Financial Ecosystem
          </h2>
          <p className="text-gray-500 mb-4">
            At GCU Enterprise, Responsible Investment is grounded in our
            fiduciary duty to our investors, together with our mission to create
            lasting value for all our partners. We do that by fostering enduring
            and trusted relationships, viewing every transaction as a long-term
            investment, and taking principal risk alongside our investors on
            every deal.
          </p>
          <p className="text-gray-500 mb-4">
            Our approach is directly tied to what we view as our competitive
            advantages—scale, investment experience, and alignment.
            <br />
            The role we play within the broader financial ecosystem also is an
            essential aspect of our approach to Responsible Investment. That
            starts with our employees, who are dedicated to driving positive
            outcomes for our partners, including in our local communities, where
            we believe it is essential to unlock opportunities for all.
          </p>
          <p className="text-gray-500">
            Our mission is only realized when we combine our fiduciary
            responsibility with a commitment to create lasting value across our
            entire ecosystem.
          </p>
          <ContactButton />
        </Motion.div>
        <div className="md:w-1/2 ">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              src="images/GCU21.webp"
              alt="Support"
              className="w-full h-[450px] items-center object-cover"
            />
            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-6 mt-2 bg-[#02066F] w-full"
            ></Motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_ProductionSupport;
