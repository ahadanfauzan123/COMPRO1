"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner1 from "../../../public/img/banner1.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

function Slider1() {
  return (
    <div className='w-[90%] mx-auto flex pt-[60px] flex-col items-center space-y-8 bg-white text-gray-600'>
      {/* 1 */}
      <div className='w-full flex flex-col items-center justify-start space-y-2'>
            <h1 className='text-3xl font-extrabold'>TEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      {/* 2 */}
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='text-white w-[25vw] h-[400px] rounded-xl flex flex-col space-y-4 bg-orange-400'>
                  {/* image */}
                  <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full flex-[0.75] rounded-xl object-cover" />
                  {/* desc */}
                  <div className='w-[85%] mx-auto flex-[0.25] flex flex-col space-y-2 items-start'>
                        <h1 className='text-2xl font-semibold'>halo</h1>
                        <h1 className="text-md">halo halo</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-white w-[25vw] h-[400px] rounded-xl flex flex-col space-y-4 bg-orange-400'>
                  {/* image */}
                  <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full flex-[0.75] rounded-xl object-cover" />
                  {/* desc */}
                  <div className='w-[85%] mx-auto flex-[0.25] flex flex-col space-y-2 items-start'>
                        <h1 className='text-2xl font-semibold'>halo</h1>
                        <h1 className="text-md">halo halo</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-white w-[25vw] h-[400px] rounded-xl flex flex-col space-y-4 bg-orange-400'>
                  {/* image */}
                  <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full flex-[0.75] rounded-xl object-cover" />
                  {/* desc */}
                  <div className='w-[85%] mx-auto flex-[0.25] flex flex-col space-y-2 items-start'>
                        <h1 className='text-2xl font-semibold'>halo</h1>
                        <h1 className="text-md">halo halo</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-white w-[25vw] h-[400px] rounded-xl flex flex-col space-y-4 bg-orange-400'>
                  {/* image */}
                  <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full flex-[0.75] rounded-xl object-cover" />
                  {/* desc */}
                  <div className='w-[85%] mx-auto flex-[0.25] flex flex-col space-y-2 items-start'>
                        <h1 className='text-2xl font-semibold'>halo</h1>
                        <h1 className="text-md">halo halo</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-white w-[25vw] h-[400px] rounded-xl flex flex-col space-y-4 bg-orange-400'>
                  {/* image */}
                  <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full flex-[0.75] rounded-xl object-cover" />
                  {/* desc */}
                  <div className='w-[85%] mx-auto flex-[0.25] flex flex-col space-y-2 items-start'>
                        <h1 className='text-2xl font-semibold'>halo</h1>
                        <h1 className="text-md">halo halo</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-white w-[25vw] h-[400px] rounded-xl flex flex-col space-y-4 bg-orange-400'>
                  {/* image */}
                  <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full flex-[0.75] rounded-xl object-cover" />
                  {/* desc */}
                  <div className='w-[85%] mx-auto flex-[0.25] flex flex-col space-y-2 items-start'>
                        <h1 className='text-2xl font-semibold'>halo</h1>
                        <h1 className="text-md">halo halo</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-white w-[25vw] h-[400px] rounded-xl flex flex-col space-y-4 bg-orange-400'>
                  {/* image */}
                  <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full flex-[0.75] rounded-xl object-cover" />
                  {/* desc */}
                  <div className='w-[85%] mx-auto flex-[0.25] flex flex-col space-y-2 items-start'>
                        <h1 className='text-2xl font-semibold'>halo</h1>
                        <h1 className="text-md">halo halo</h1>
                  </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Slider1