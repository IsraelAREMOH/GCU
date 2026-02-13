import { motion as Motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  "/images/bnu.png",
  "/images/boc.png",
  "/images/dbs-bank-logo-png-transparent-png.png",
  "/images/ncb.png",
  "/images/taifung.png",
];

export default function GCUBrandSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-center font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0A2A6A]">
          Additional REACH Partners
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-4xl mx-auto text-center text-gray-600 text-base md:text-lg leading-relaxed">
          These partners extend the flow of capital to founders by providing
          effective and tangible resources in the form of grants, professional
          networks, training, mentorships, pitch coaching, and founder community
          building.
        </p>

        {/* MOBILE CAROUSEL  */}
        <div className="mt-16 block lg:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={32}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {partners.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Partner logo"
                    className="h-14 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP GRID  */}
        <div className="mt-20 hidden lg:grid grid-cols-5 gap-x-12 gap-y-16 place-items-center">
          {partners.map((logo, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo}
                alt="Partner logo"
                className="max-h-20 object-contain"
              />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
