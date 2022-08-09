import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";
import image9 from "../../assets/images/image9.jpg";
import image10 from "../../assets/images/image10.jpg";
import image11 from "../../assets/images/image11.jpg";
import image12 from "../../assets/images/image12.jpg";




export default function Home() {
    return (
        <div>
            <div className="container">      
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
            >
                <SwiperSlide> <img src= {image1} alt="pool with sunset" className="images" /></SwiperSlide>
                <SwiperSlide> <img src= {image2} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image3} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image4} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image5} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image6} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image7} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image8} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image9} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image10} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image11} alt="pool with sunset" /></SwiperSlide>
                <SwiperSlide> <img src= {image12} alt="pool with sunset" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="box">  
                <div className="locationTitle">
                    <h1>locations</h1>
                </div>
                    
                <div className="locationDiv">
                    <ul>
                        <li>Gallery 3 Bedroom</li>
                        <li>Gallery 2 Bedroom</li>
                        <li>Upper Deck 1 Bedroom</li>
                        <li>Upper Deck Studio</li>
                        <li>Sea Castles 2 Bedroom</li>
                        <li>Villa</li>
                        <li>Kensington</li>
                        <li>Trafalgar</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}