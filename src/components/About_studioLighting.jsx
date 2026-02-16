import { motion as Motion } from "framer-motion";
import RadialDiagram from "./test";

const About_studioLighting = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          {/* Left image */}

          <RadialDiagram />

          {/* Text Content */}
          <Motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 justify-center"
          >
            <h2 className="text-3xl text-[#fff] font-bold mb-2">
              A Framework for Effective Risk Management
            </h2>
            <p className="mb-4 text-gray-300">
              GCU Enterprise is a Principles for Responsible Investment (“PRI”)
              signatory. We believe a strong Responsible Investment proposition
              correlates with thorough risk assessment and leverages insights
              across the portfolio.
            </p>
            <p className="mb-4 text-gray-300">
              Responsible Investment within Antares is characterized by an
              understanding of our investor needs and collaboration with other
              stakeholders within the asset management community. We factor in
              the needs of our private equity sponsors and what is most relevant
              for our borrowers. The breadth and scale of our portfolio of
              private equity-backed companies provide a unique perspective and
              engagement opportunities.
            </p>
            <div className="mb-4 text-gray-300">
              We also complete a Responsible Investment assessment as part of
              the broader investment process for our Liquid Credit business.
            </div>
            <button className="bg-[#02066f] hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded w-fit">
              Contact Us
            </button>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default About_studioLighting;
