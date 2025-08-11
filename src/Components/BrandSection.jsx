import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
import SectionHeading from '../GlobelComponent/SectionHeading'

const BrandSection = () => {


    const brandLog = [
        'assets/images/client-1.jpg',
        'assets/images/client-2.jpg',
        'assets/images/client-3.jpg',
        'assets/images/client-4.jpg',
        'assets/images/client-5.jpg',
        'assets/images/client-1.jpg',
        'assets/images/client-2.jpg',
        'assets/images/client-3.jpg',
        'assets/images/client-4.jpg',
        'assets/images/client-5.jpg'
    ]
  return (
    <section className="clientsection m-0">
        <div className="container innerfluid">
            <div className="row">
                <div className="col-12"><SectionHeading mianHeading={'Browse by Brand'} subHeading={'Choose your best brand'}/></div>
                <div className="col-12">
                    <div className="owl-carousel owl-theme clients">
                        <Swiper
                        loop={true}
                        spaceBetween={10}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        speed={600}
                        parallax={true}
                        modules={[Autoplay, Pagination, Parallax]}
                        breakpoints={{
                            0:{
                                slidesPerView:2
                            },
                            600:{
                                slidesPerView:3
                            },
                            1000:{
                                slidesPerView:5
                            },
                          }}
                        className="mySwiper">
                            {
                                brandLog.map((logo, index) =>
                                    <SwiperSlide key={index} className="item"><div className="clientUser"><img src={logo} alt={`clinet-${index + 1}`} /></div></SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BrandSection