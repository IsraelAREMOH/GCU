import { courses } from "../constants";
import { Link } from "react-router-dom";
import { HowItWorksStep } from "../constants/useable_Functions";
import White_Underline from "../constants/White_Underline";
import Green_Underline from "../constants/Green_Underline";
import { motion as Motion } from "framer-motion";

const getEntranceVariant = (index) => {
  const directions = [
    { x: -100, y: 0 }, // left
    { x: 0, y: 100 }, // bottom
    { x: 100, y: 0 }, // right
  ];
  const dir = directions[index % 3];

  return {
    hidden: { opacity: 0, ...dir },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    },
  };
};

// Hover animation
const hoverEffect = {
  whileHover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300 },
  },
};

const Service_courseSection = () => {
  return (
    <div className="bg-gray-900 text-[#F4F6FF] min-h-screen py-12 px-4">
      <Motion.div
        className="text-center mb-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          What we <span className="text-[#02066F]">Offer</span>
        </h2>
        <Green_Underline />
        <p className="max-w-1xl mx-auto pt-4 text-[#F4F6FF] text-base md:text-lg">
          We’ll help you create efficient, effective policies and procedures
          tailored to your firm’s business model.
        </p>
      </Motion.div>

      {/* Top 3 Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 px-4">
        {courses.slice(0, 3).map((course, index) => (
          <Motion.div
            key={course.title}
            className="bg-white text-gray-500 rounded-lg p-6 flex flex-col items-center"
            variants={getEntranceVariant(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            {...hoverEffect}
          >
            <h3 className="text-lg text-center font-semibold mb-2">
              {course.title}
            </h3>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-sm text-gray-700 mb-4">{course.description}</p>
            <div className="flex text-[#F4F6FF] justify-center my-2">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#02066F] to-blue-600 py-3 px-4 mx-3 mb-6 rounded-md"
              >
                Enroll Now
              </Link>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* Additional Courses */}
      <div className="flex flex-col sm:flex-row justify-center max-w-6xl mx-auto p-6 gap-6">
        {courses.slice(3).map((course, index) => (
          <Motion.div
            key={course.title}
            className="bg-white text-gray-500 rounded-lg p-6 flex flex-col justify-between w-full sm:w-[350px]"
            variants={getEntranceVariant(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            {...hoverEffect}
          >
            <h3 className="text-lg text-center font-semibold mb-2">
              {course.title}
            </h3>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-sm text-gray-700 mb-4">{course.description}</p>
            <div className="flex text-[#F4F6FF] justify-center my-2">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#02066F] to-blue-600 py-3 px-4 mx-3 rounded-md"
              >
                Enroll Now
              </Link>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* How It Works Section */}
      <Motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl text-gray-400 font-semibold mb-2">
          How it <span className="text-[#F4F6FF] inline-block">works</span>
        </h3>
        <White_Underline />

        <div className="relative flex flex-col sm:flex-row justify-center items-center gap-10 my-10">
          {[
            "Choose your Service",
            "Contact and Register",
            "Build Real Wealth",
            "Earn and Grow",
          ].map((step, i) => (
            <Motion.div
              key={i}
              variants={getEntranceVariant(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              {...hoverEffect}
            >
              <HowItWorksStep number={String(i + 1)} text={step} />
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </div>
  );
};

export default Service_courseSection;
