import Team1 from "../assets/Team1.png";
import { useState } from "react";
import Contact_FormSection from "./Contact_FormSection";

const Contact_HeroBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <section className="w-full min-h-[650px] flex flex-col items-center justify-center px-4 py-16 sm:py-20 bg-[url('./assets/Team1.png')] bg-no-repeat bg-cover bg-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white text-center tracking-wide leading-tight">
          Creativity Is a
          <span className="block sm:inline bg-gradient-to-r from-[#19673B] to-emerald-700 text-transparent bg-clip-text">
            Team Effort
          </span>
        </h1>
        <p className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-center text-white max-w-2xl sm:max-w-3xl lg:max-w-4xl">
          Meet the talented creatives behind GM LAWASON STUDIOS - a dynamic team
          of directors, editors, photographers, and sound engineers who makes
          the magic happen.
        </p>
        <div className="flex justify-center mt-8 sm:mt-10">
          <a
            href="#"
            className="text-white bg-gradient-to-r from-green-900 to-[#19673b] py-2 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-base"
            onClick={openModal}
          >
            Book A session
          </a>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative transition duration-300 ease-in-out transform scale-95">
              {/* Import and render your form component here */}
              <Contact_FormSection />

              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact_HeroBanner;
