import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import js from "../assets/images/js.svg";
import vite from "../assets/images/vite.svg";
import react from "../assets/images/react.svg";
import tailwind from "../assets/images/tailwind.svg";
import github from "../assets/images/github.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from 'swiper/modules';

const ContentComponents = () => {
  const colors = [
    { name: "HTML5", color: "bg-[#6EC1E4]", image: html, count: 120 },
    { name: "CSS", color: "bg-[#FF6F91]", image: css, count: 120 },
    { name: "Java Script", color: "bg-[#FFD166]", image: js, count: 120 },
    { name: "Vite JS", color: "bg-[#FF9A6E]", image: vite, count: 120 },
    { name: "React Js", color: "bg-[#A889F7]", image: react, count: 120 },
    { name: "Tailwind Css", color: "bg-[#FF6363]", image: tailwind, count: 40 },
    { name: "Github", color: "bg-[#76E4F7]", image: github, count: 50 },
    { name: "HTML5", color: "bg-[#6EC1E4]", image: html, count: 120 },
    { name: "CSS", color: "bg-[#FF6F91]", image: css, count: 120 },
    { name: "Java Script", color: "bg-[#FFD166]", image: js, count: 120 },
    { name: "Vite JS", color: "bg-[#FF9A6E]", image: vite, count: 120 },
    { name: "React Js", color: "bg-[#A889F7]", image: react, count: 120 },
    { name: "Tailwind Css", color: "bg-[#FF6363]", image: tailwind, count: 40 },
    { name: "Github", color: "bg-[#76E4F7]", image: github, count: 50 },
  ];
  return (
    <div className="py-5">
      <div className="">
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={10}

          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
          loop={true}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-60"
        >
          {colors.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`${item.color} flex flex-col gap-5 items-center p-5 shadow-xl rounded-3xl justify-center h-44 lg:h-28 md:max-w-64 lg:flex-row lg:gap-10`}>
                <div className="text-center text-white lg:text-start">
                  <h1 className="font-semibold tracking-wide">{item.name}</h1>
                  <p>{item.count} Project</p>
                </div>
                <div>
                  <img src={item.image} alt=""  className="w-[66px]"/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContentComponents;
