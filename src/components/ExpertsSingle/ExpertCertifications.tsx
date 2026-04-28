import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import GoogleCertification from "@/assets/GoogleCertification.png";
import GoogleIT from "@/assets/GoogleIT.png";
import UdemyCertification from "@/assets/UdemyCertification.png";
import MicrosoftCertification from "@/assets/MicrosoftCertification.png";

// Certification data
const certifications = [
  { title: "Microsoft UI/UX Design Certification", image: MicrosoftCertification },
  { title: "Google Certification", image: GoogleCertification },
  { title: "Udemy Management Certification", image: UdemyCertification },
  { title: "Advanced Prototyping Certification", image: GoogleIT },
  { title: "Microsoft UI/UX Design Certification", image: MicrosoftCertification },
  { title: "Google Certification", image: GoogleCertification },
  { title: "Udemy Management Certification", image: UdemyCertification },
  { title: "Advanced Prototyping Certification", image: GoogleIT },
];

const CertificationsCarousel = () => {
  return (
    <section className="certifications-carousel bg-black text-white py-16 px-6 md:px-12 font-poppins">
      {/* Title */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 underline">
          Certifications (8)
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
  slidesPerView={1}
  spaceBetween={20}
  navigation={{
    nextEl: ".certifications-carousel .custom-next",
    prevEl: ".certifications-carousel .custom-prev",
  }}
  pagination={{
    clickable: true,
    el: ".certifications-carousel .custom-pagination",
    renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
  }}
  modules={[Pagination, Navigation]}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  className="mySwiper"
  onSwiper={(swiper) => {
    // Ensure custom arrows work
    setTimeout(() => {
      swiper.navigation.destroy(); // destroy old init
      swiper.navigation.init();    // re-initialize
      swiper.navigation.update();  // update navigation
    }, 0);
  }}
>

          {certifications.map((cert, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg shadow-md w-full h-48 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <p className="text-sm font-medium text-center mt-4">
                  {cert.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Custom Arrows */}
        <div className="flex items-center justify-center mt-8 gap-[10px]">
          {/* <div className="custom-prev custom-arrow">&#10094;</div> */}
          <div className="custom-pagination flex gap-[10px]"></div>
          {/* <div className="custom-next custom-arrow">&#10095;</div> */}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .certifications-carousel .custom-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .certifications-carousel .swiper-pagination-bullet {
          background: white !important;
          color: black !important;
          font-size: 14px;
          font-weight: 600;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          opacity: 1 !important;
          transition: all 0.3s ease;
        }
        .certifications-carousel .swiper-pagination-bullet-active {
          background: #952502 !important;
          color: white !important;
        }
        .certifications-carousel .custom-arrow {
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          color: white;
          transition: 0.3s;
          user-select: none;
        }
        .certifications-carousel .custom-arrow:hover {
          color: #952502;
        }
      `}</style>
    </section>
  );
};

export default CertificationsCarousel;
