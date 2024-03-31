"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
function Slider3() {
  return (
      <div id='partner' className='mt-[120px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
            <div className="w-[90%] mx-auto">
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                              <div className='flex w-full h-[300px] text-white rounded-xl bg-orange-400 flex-col items-center justify-center space-y-4'>
                                    <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.</h1>
                                    <p className='text-md'>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi id cum necessitatibus voluptatibus.
                                    </p>
                                    <span className='text-lg font-bold'>Joe Smith</span>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='flex w-full h-[300px] text-white rounded-xl bg-orange-400 flex-col items-center justify-center space-y-4'>
                                    <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.</h1>
                                    <p className='text-md'>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi id cum necessitatibus voluptatibus.
                                    </p>
                                    <span className='text-lg font-bold'>Joe Smith</span>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='flex w-full h-[300px] text-white rounded-xl bg-orange-400 flex-col items-center justify-center space-y-4'>
                                    <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.</h1>
                                    <p className='text-md'>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi id cum necessitatibus voluptatibus.
                                    </p>
                                    <span className='text-lg font-bold'>Joe Smith</span>
                              </div>
                        </SwiperSlide>
                  </Swiper>
            </div>
      </div>
  )
}

export default Slider3