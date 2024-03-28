"use client"
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Banner1 from "../../../public/img/banner1.png"
// import Banner2 from "../../public/img/navbar/logo.png"
import { motion, Variants } from 'framer-motion';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function Header() {
      const titleVariant1: Variants = {
            offscreen: {
              y: 80,
              opacity: 0
            },
            onscreen: {
              y: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 1.8
              }
            }
          };

      
  return (
      <div id="home" className={`z-20 h-screen w-screen relative flex items-center justify-center`} >
      <Swiper
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
        modules={[ Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image quality={90} src={Banner1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
                  <Image quality={90} src={Banner1} alt="banner" width={1400} height={800} className='w-full h-full object-cover' />
            </div>
        </SwiperSlide>
      </Swiper>
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={titleVariant1}
      className='text-white w-[90%] font-extrabold absolute left-[8vw] z-40 flex items-start justify-start flex-col space-y-7 '>
        <div className='w-full flex items-start justify-between'>
            <h1 className="text-5xl lg:text-6xl font-extrabold">
            Creating Foundations for a Better Future
            </h1>
            <p className='text-gray-50 text-sm font-light w-[75%]'>
            Lorem ipsum dolor sit amet. Et doloremque voluptas non pariatur consequatur qui ipsa quod sed similique omnis. Eos omnis commodi et necessitatibus consequatur a repudiandae quos.
            </p>
        </div>
            <div className='flex items-center justify-start space-x-6 font-normal'>
                  <a href="#plus" className='bg-orange-400 px-7 py-3 text-lg text-white rounded-xl'>See More</a>
                  <a href="#contact" className='bg-orange-400 px-7 py-3 text-lg text-white rounded-xl'>Contact</a>
            </div>
      </motion.div>
      <a href="#about" className=" absolute right-6 lg:right-[50%] bottom-6 lg:bottom-6 z-40">
      <HiOutlineChevronDoubleDown className='text-white h-10 w-10 animate-bounce' />

      </a>
    </div>
  )
}

export default Header