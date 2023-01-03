import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./Data";

import './Testimonials.css'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">Testimonials</h2>
      <span className="section__subtitle">My client says</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {data.map(({ id, image, title, description }) => (
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt="" className="testimonial__img" />

            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
