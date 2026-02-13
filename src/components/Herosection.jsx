import { useState } from "react";
import { slides } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Contact_FormSection from "./Contact_FormSection";

const Herosection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="relative w-full mb-12">
      <Swiper
        style={{ height: "550px" }}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full flex items-center justify-center"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-20 p-4 rounded-2xl text-white text-center max-w-5xl">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white text-center tracking-wide leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <button
                  onClick={openModal}
                  className="px-6 py-3 bg-[#19673B] hover:bg-[#f66304] text-white font-medium rounded-xl transition duration-300"
                >
                  Book A session
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
  );
};

export default Herosection;

{
  /**
  <section className="w-full min-h-[550px] flex flex-col items-center justify-center px-4 py-16 sm:py-20 bg-[url('./assets/AAHT4mC.png')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white text-center tracking-wide leading-tight">
        We Don’t Just Create -
        <span className="block sm:inline bg-gradient-to-r from-[#19673B] to-emerald-700 text-transparent bg-clip-text">
          We Tell Stories
        </span>
      </h1>
      <p className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-center text-white max-w-2xl sm:max-w-3xl lg:max-w-4xl">
        At GM LAWASON STUDIOS, our passion is visual storytelling. From concept
        to completion, we blend creativity and precision to craft visuals that
        leave a lasting impression.
      </p>
      <div className="flex justify-center mt-8 sm:mt-10">
        <a
          href="#"
          className="text-white bg-gradient-to-r from-green-900 to-[#19673b] py-2 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-base"
        >
          Contact Us
        </a>
      </div>
    </section>
  */
}
