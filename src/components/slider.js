"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ 
  children, 
  slidesPerView = 1, 
  spaceBetween = 30,
  autoplay = true,
  navigation = true,
  pagination = true,
  loop = true,
  breakpoints = {},
  className = "",
  ...props 
}) => {
  const defaultBreakpoints = {
    640: {
      slidesPerView: slidesPerView > 1 ? Math.min(2, slidesPerView) : 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: slidesPerView > 2 ? Math.min(3, slidesPerView) : slidesPerView,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
    },
  };

  const mergedBreakpoints = { ...defaultBreakpoints, ...breakpoints };

  return (
    <div className={`slider-container ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        navigation={navigation}
        pagination={pagination ? { clickable: true } : false}
        autoplay={autoplay ? {
          delay: 3000,
          disableOnInteraction: false,
        } : false}
        loop={loop}
        breakpoints={mergedBreakpoints}
        className="mySwiper"
        {...props}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>
              {child}
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            {children}
          </SwiperSlide>
        )}
      </Swiper>

      <style jsx global>{`
        .slider-container .swiper {
          padding: 20px 0 60px 0;
        }
        
        .slider-container .swiper-button-next,
        .slider-container .swiper-button-prev {
          color: #2563eb;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
        }
        
        .slider-container .swiper-button-next:after,
        .slider-container .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        
        .slider-container .swiper-button-next:hover,
        .slider-container .swiper-button-prev:hover {
          background: #2563eb;
          color: white;
        }
        
        .slider-container .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        
        .slider-container .swiper-pagination-bullet-active {
          background: #2563eb;
        }
        
        .slider-container .swiper-slide {
          height: auto;
          display: flex;
        }
        
        .slider-container .swiper-slide > * {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Slider;
