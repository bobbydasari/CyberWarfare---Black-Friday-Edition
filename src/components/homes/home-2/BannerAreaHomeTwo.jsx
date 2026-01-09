// src/components/homes/home-2/BannerAreaHomeTwo.jsx
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .lonyo-video-section2 {
          padding: 30px 0 100px !important;
          background: #fff;
          position: relative;
        }
        .lonyo-hero-dashbord {
          max-width: 1000px !important;
          margin: 0 auto !important;
          border-radius: 24px !important;
          overflow: hidden !important;
          box-shadow: none !important;
          background: transparent !important;
        }
        .banner-swiper.swiper {
          border-radius: 24px !important;
          overflow: hidden !important;
          padding-bottom: 60px !important;
        }
        .banner-swiper .swiper-slide {
          border-radius: 24px !important;
          overflow: hidden !important;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
        }
        .banner-swiper .swiper-slide:hover {
          transform: scale(1.01) !important;
        }
        .banner-swiper .swiper-slide img {
          width: 100% !important;
          height: 400px !important;
          object-fit: cover !important;
          border-radius: 24px !important;
          display: block !important;
        }
        .banner-swiper .swiper-pagination {
          bottom: 10px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 12px !important;
          z-index: 10 !important;
        }
        .banner-swiper .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #ffc107 !important;
          opacity: 0.6 !important;
          margin: 0 !important;
          transition: all 0.3s ease !important;
          border-radius: 50% !important;
        }
        .banner-swiper .swiper-pagination-bullet-active {
          width: 35px !important;
          border-radius: 10px !important;
          opacity: 1 !important;
          background: #ffc107 !important;
        }
        .banner-swiper .swiper-button-next,
        .banner-swiper .swiper-button-prev {
          background: #fff !important;
          width: 55px !important;
          height: 55px !important;
          border-radius: 50% !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
          color: #142D6F !important;
          transition: all 0.3s ease !important;
        }
        .banner-swiper .swiper-button-next:hover,
        .banner-swiper .swiper-button-prev:hover {
          background: #ffc107 !important;
          color: #fff !important;
        }
        .banner-swiper .swiper-button-next::after,
        .banner-swiper .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: bold !important;
        }
      `,
        }}
      />
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
