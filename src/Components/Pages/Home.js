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
                    <h1>Locations</h1>
                </div>
                    
                <div className="locationDiv">
                    <ul>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/48233576?guests=1&adults=1&s=67&unique_share_id=62047bf2-b05f-4343-b94d-22a8af86dae8"
                            target="_blank"
                            rel="noreferrer noopener">
                            Gallery 3 Bedroom
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/48167227?guests=1&adults=1&s=67&unique_share_id=9bf5f1e6-ddb9-4ab9-b9b7-964217dc4531"
                            target="_blank"
                            rel="noreferrer noopener">
                            Gallery 2 Bedroom
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/48077619?guests=1&adults=1&s=67&unique_share_id=e30e73e3-af85-4f81-a703-a4ae25e2642f"
                            target="_blank"
                            rel="noreferrer noopener">
                            Upper Deck 1 Bedroom</a>
                        </li>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/48075457?guests=1&adults=1&s=67&unique_share_id=a6215b3d-bb2e-4511-a115-c3992d8d4342"
                            target="_blank"
                            rel="noreferrer noopener">
                            Upper Deck Studio
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/50765039?guests=1&adults=1&s=67&unique_share_id=497ffe25-15b3-4e7b-ab2b-15bcf624190e"
                            target="_blank"
                            rel="noreferrer noopener">
                            Sea Castles 2 Bedroom
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/40650805?guests=1&adults=1&s=67&unique_share_id=2e8795be-3b3b-4d55-b3d9-506e123fb5ee"
                            target="_blank"
                            rel="noreferrer noopener">
                            Reflections Villa
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/48518376?guests=1&adults=1&s=67&unique_share_id=9485aaf0-ed1b-4288-8b6d-04b68f780855"
                            target="_blank"
                            rel="noreferrer noopener">
                            Kensington 1 Bedroom
                            </a>
                        </li>
                        <li>
                            <a 
                            href="https://www.airbnb.com/rooms/48918108?guests=1&adults=1&s=67&unique_share_id=102db622-fe43-485d-9d71-203552da3e24"
                            target="_blank"
                            rel="noreferrer noopener">
                            Trafalgar 2 Bedroom
                            </a>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    );
}