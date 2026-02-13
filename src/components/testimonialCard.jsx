import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../constants";

const TestimonialCard = () => {
  return (
    <div>
      <section className="w-full mt-10 bg-[#2A2727] py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl text-[#F4F6FF] md:text-2xl font-semibold underline underline-offset-4 mb-6">
            Clients Testimonial
          </h3>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-4">
                  <div className="flex justify-center space-x-1 text-yellow-400 text-xl">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-[#F4F6FF] text-sm md:text-lg leading-relaxed">
                    {t.text}
                  </p>
                  <p className="font-semibold mb-8 text-[#F66304]">{t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default TestimonialCard;
