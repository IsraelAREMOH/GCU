import ContactButton from "../constants/contactButton";
import { motion as Motion } from "framer-motion";

const About_photoStudio = () => {
  return (
    <div>
      <div className="w-full bg-white-100 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-2xl md:text-2xl font-bold text-gray-500 mb-6 leading-tight">
              Why GCU Enterprise
            </h1>
            <p className="mt-6 text-gray-600 mb-6 leading-relaxed">
              We believe our integrated, team-based approach to financial
              planning sets GCU Enterprise Wealth Management apart from other
              wealth managers. Our clients work with a dedicated advisor who
              coordinates with in-house specialists in estate planning,
              Financial Trading, tax strategy, investments, charitable giving,
              and more. We also have professionals with deep experience helping
              clients navigate complex life transitions like divorce and caring
              for aging family members. This collaborative model ensures that no
              one makes a financial decision in isolation. As a majority
              employee-owned firm, we’re personally invested in our clients’
              long-term success and well-being
            </p>

            <ContactButton />
          </Motion.div>

          {/* Right Image Section */}

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col min-h-[400px] stacked-vertical-on-minh"
          >
            <div className="flex flex-col">
              <div className="grid grid-cols-2 grid-rows-1 w-full gap-0">
                {[
                  "images/coachspace.jpg",
                  "images/loanImages.jpg",
                  "images/GCU14.webp",
                  "images/testimonialImage.jpg",
                ].map((img, idx) => (
                  <Motion.img
                    key={idx}
                    src={img}
                    alt="Photographer"
                    className="object-cover w-full h-48 mb-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                ))}
              </div>
              <div className="w-full h-6 bg-[#02066f] mt-0 rounded-b-lg"></div>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default About_photoStudio;
