import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ height: "100vh" }}
          className="swiper-pagination-progressbar-fill slider-one"
        >
          <h2 style={{ marginTop: "40px" }}>Pizza Tomato</h2>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "100vh" }}
          className="swiper-pagination-progressbar-fill slider-two"
        >
          <h2 style={{ marginTop: "40px" }}>Piadina Araba</h2>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "100vh" }}
          className="swiper-pagination-progressbar-fill slider-three"
        >
          <h2 style={{ marginTop: "40px" }}>Ragu' Peruviano</h2>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "100vh" }}
          className="swiper-pagination-progressbar-fill slider-four"
        >
          <h2 style={{ marginTop: "40px" }}>Bistecca Large</h2>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "100vh" }}
          className="swiper-pagination-progressbar-fill slider-five"
        >
          <h2 style={{ marginTop: "40px" }}>Dessert</h2>
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "100vh" }}
          className="swiper-pagination-progressbar-fill slider-six"
        >
          <h2 style={{ marginTop: "40px" }}>Vini casalinghi</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export { Slider };
