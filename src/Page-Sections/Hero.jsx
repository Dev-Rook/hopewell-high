import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Hero.module.scss";

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

import HeroData from "../Data/Hero.json";

const Hero = () => {
  const [data, setData] = useState(HeroData);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Small_Text}>Forging Towards Excellence</p>
        <p className={Styles.Large_Text}>Hopewell High School</p>

        <button className={Styles.Project_Button}>
          <Link to={"About"}>About Us</Link>
        </button>
      </div>

      <div className={Styles.Diffuser}></div>

      <div className={Styles.Slider_Container}>
        <Swiper
          slidesPerView={1}
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
        >
          {data &&
            data.map((value) => {
              return (
                <SwiperSlide key={value?.id}>
                  <div className={Styles.Image_Container}>
                    <img src={value.Image} alt="" className={Styles.Image} />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
