import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CaseStudy1 from "@/assets/CaseStudy.png";
import CaseStudy2 from "@/assets/CaseStudy2.png";
import CaseStudy3 from "@/assets/CaseStudy3.png";
import CaseStudy4 from "@/assets/CaseStudy4.png";

// Case Studies data
const caseStudies = [
  { title: "Case Study 1", image: CaseStudy1 },
  { title: "Case Study 2", image: CaseStudy2 },
  { title: "Case Study 3", image: CaseStudy3 },
  { title: "Case Study 4", image: CaseStudy4 },
  { title: "Case Study 5", image: CaseStudy1 },
  { title: "Case Study 6", image: CaseStudy2 },
  { title: "Case Study 7", image: CaseStudy3 },
  { title: "Case Study 8", image: CaseStudy4 },
];

const ExpertCaseStudies = () => {
  return (
    <section className="expert-case-studies bg-black text-white py-16 px-6 md:px-12 font-poppins">
      {/* Title */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 underline">
          Expert Case Studies (8)
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".expert-case-studies .custom-next",
            prevEl: ".expert-case-studies .custom-prev",
          }}
          pagination={{
            clickable: true,
            el: ".expert-case-studies .custom-pagination",
            renderBullet: (index, className) =>
              `<span class="${className}">${index + 1}</span>`,
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }, 0);
          }}
        >
          {caseStudies.map((study, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg shadow-md w-full h-48 flex items-center justify-center">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <p className="text-sm font-medium text-center mt-4">
                  {study.title}
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
        .expert-case-studies .custom-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .expert-case-studies .swiper-pagination-bullet {
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
        .expert-case-studies .swiper-pagination-bullet-active {
          background: #952502 !important;
          color: white !important;
        }
        .expert-case-studies .custom-arrow {
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          color: white;
          transition: 0.3s;
          user-select: none;
        }
        .expert-case-studies .custom-arrow:hover {
          color: #952502;
        }
      `}</style>
    </section>
  );
};

export default ExpertCaseStudies;
