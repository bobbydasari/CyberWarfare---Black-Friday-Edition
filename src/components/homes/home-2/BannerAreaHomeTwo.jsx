"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerAreaHomeTwo = () => {
  // Dummy banner slides data
  const bannerSlides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Learning Banner 1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Learning Banner 2",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Learning Banner 3",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Learning Banner 4",
    },
  ];

  return (
    <>
      <div className="lonyo-dasyboard-shape">
        <img
          src="/assets/images/shape/shape5.svg"
          alt=""
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
      <div className="lonyo-video-section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="lonyo-hero-dashbord"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="banner-swiper"
                >
                  {bannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAreaHomeTwo;
