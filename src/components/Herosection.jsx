import { slides } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Btn from "../constants/Btn";

const Herosection = () => {
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
                <Btn />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Herosection;
