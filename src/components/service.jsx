import { services } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion as Motion } from "framer-motion";

const Service = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white text-center py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-2xl font-semibold">
            What we <span className="text-[#02066F]">Offer</span>
            <div className="flex justify-center mt-2">
              <div className="relative w-20 h-1 bg-[#02066F] rounded-full">
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#02066F] rounded-full"></div>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#02066F] rounded-full"></div>
              </div>
            </div>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            GCU Enterprise has worked to provide wise counsel to individuals,
            families, and businesses. A fee-only, independent RIA firm, we offer
            investment management, financial planning, Trade, and family office
            services to financially established individuals and institutions.We
            also offer corporate accounting, tax preparation, payroll and
            consulting through our affiliate, GCU Finance Tax & Consulting. As
            of May 31, 2025, GCU Enterprise held approximately $100 billion in
            assets under management and $23.79 billion in assets under
            advisement.
          </p>

          {/* Swiper */}
          <div className="mt-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onInit={(swiper) => {
                if (swiper.slides.length <= swiper.params.slidesPerView) {
                  // hide arrows if everything fits
                  document
                    .querySelector(".custom-prev")
                    ?.style.setProperty("display", "none");
                  document
                    .querySelector(".custom-next")
                    ?.style.setProperty("display", "none");
                }
              }}
            >
              <div className="custom-next text-[#02066F] absolute right-2 top-1/2 z-10 cursor-pointer">
                ▶
              </div>
              <div className="custom-prev text-[#02066F] absolute left-2 top-1/2 z-10 cursor-pointer">
                ◀
              </div>
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <Motion.div
                    className="h-full flex"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center h-full w-full">
                      {/* Text Section */}
                      <div className="w-full md:w-2/3 md:pr-4 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-sm font-semibold mb-2 text-center md:text-left">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 text-left">
                            {service.description}
                          </p>
                        </div>
                        <svg
                          className="mt-4"
                          width="80"
                          height="12"
                          viewBox="0 0 80 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6C15 2 30 10 45 8C60 6 75 2 78 2"
                            stroke="#2519BC"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Image Section */}
                      <Motion.div
                        className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="object-cover h-40 w-full rounded-lg"
                        />
                      </Motion.div>
                    </div>
                  </Motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
