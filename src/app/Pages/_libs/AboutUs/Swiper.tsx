'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Required for navigation
import { Navigation } from 'swiper/modules'; // Import Navigation module

// Optional: Add custom CSS in the same file or in a separate CSS module
import './SwiperStyles.css'; // Create this file for custom styles (see below)

const SliderComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation]} // Include Navigation module
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: '.custom-next-button', // Custom class for Next button
          prevEl: '.custom-prev-button', // Custom class for Previous button
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev-button">Previous</button>
      <button className="custom-next-button">Next</button>
    </div>
  );
};

export default SliderComponent;