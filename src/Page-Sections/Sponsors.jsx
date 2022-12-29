import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Sponsors.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import SponsorData from "../Assets/Data/Sponsors.json";

const Sponsors = () => {
  const [data, setData] = useState(SponsorData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Sponsors</p>
        <p className={Styles.Section_Title}>Our Sponsors & Trusted Partners</p>
      </div>

      <div className={Styles.Slider_Container}>
        <Swiper
          slidesPerView={4}
          speed={2000}
          spaceBetween={0}
          modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop
          pagination={{
            dynamicBullets: true,
          }}
          mousewheel={true}
          className={Styles.Swiper}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            996: {
              slidesPerView: 5,
            },
            1920: {
              slidesPerView: 5,
            },
          }}
        >
          {data &&
            data.map((value) => {
              return (
                <SwiperSlide key={value?.id}>
                  <a href={value.Link} rel={"noreferrer"} target={"_blank"} className={Styles.Link}>
                    <div className={Styles.Sponsor_Container}>
                      <img
                        src={value.Image}
                        alt=""
                        className={Styles.Sponsor_Image}
                      />
                      <p className={Styles.Sponsor_Title}>{value.Title}</p>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Sponsors;
