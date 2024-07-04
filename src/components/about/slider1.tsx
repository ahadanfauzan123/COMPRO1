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
import { Variants, motion } from 'framer-motion';

function Slider1() {
const titleVariant1: Variants = {
            offscreen: {
              x: -80,
              opacity: 0
            },
            onscreen: {
              x: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 1.8
              }
            }
          };
          const titleVariant2: Variants = {
            offscreen: {
              // x: -80,
              opacity: 0
            },
            onscreen: {
              // x: 0,
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
    <div className='w-[90%] mx-auto flex pt-[60px] flex-col items-center space-y-8 bg-white text-gray-600'>
      {/* 1 */}
      <div className='w-full flex flex-col items-center justify-start space-y-2'>
            <h1 className='text-3xl font-extrabold'>Company Team Profile</h1>
            <p>The Amazing Team Of Us</p>
      </div>
      {/* 2 */}
      <div
                className="flex w-full flex-col items-center justify-between">
                  
                  {/* 1 */}
                  <div className='w-[90%] mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-5 md:items-center lg:items-start justify-start my-[48px]'>
                    {/* left */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-[500px] h-[500px] rounded-2xl bg-gray-200'>
                      <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full h-full rounded-2xl object-cover" />
                    </motion.div>
                    {/* right */}
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='flex-1 flex items-end justify-start flex-col space-y-9'>
                      <h1 className="w-full text-start text-[22px] font-extrabold "><span className="">
                      Komisaris Utama - Adinugraha Sukandar, ST., M.B.A
                      </span></h1>
                      <p className=" w-full lg:w-[85%] text-start text-lg">
                      Adinugraha Sukandar memiliki pengalaman lebih dari 25 tahun di industri konstruksi dan manajemen proyek. Sebelum bergabung dengan perusahaan ini, beliau menjabat sebagai CEO di [Perusahaan Sebelumnya], di mana beliau berhasil memimpin berbagai proyek besar dan meningkatkan efisiensi operasional perusahaan tersebut.
                      <br />
                      <br />
                      Sebagai Komisaris Utama, Adinugraha Sukandar bertanggung jawab mengawasi dan memberikan arahan strategis kepada manajemen perusahaan, memastikan perusahaan berjalan sesuai dengan visi dan misi yang telah ditetapkan.
                      <br />
                      <br />
                      <span className='font-semibold'>
                      &quot;Keberhasilan adalah hasil dari kerja keras, inovasi, dan komitmen terhadap kualitas.&quot;
                      </span>
                      </p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    
                  </div>
                  {/* 2 */}
                  <div className='w-[90%] mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-center justify-between my-[48px]'>
                    {/* left */}
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant1}
                    className='flex-1 flex items-start justify-start flex-col space-y-9'>
                      <h1 className="w-full text-start text-[42px] font-extrabold "><span className="">About Us</span></h1>
                      <p className=" w-full lg:w-[65%] text-start">
                      PT. Lexica Cala Nusa adalah perusahaan konstruksi yang berdedikasi untuk memberikan solusi berkualitas tinggi dalam pembangunan gedung komersial dan hunian. Sejak didirikan, kami telah membangun reputasi sebagai mitra yang dapat diandalkan dengan mengutamakan inovasi, keunggulan teknis, dan kepuasan pelanggan.<br />
        <br />
        Dengan tim yang terdiri dari para ahli berpengalaman lebih dari 10 tahun, kami mendedikasikan diri untuk memenuhi kebutuhan unik setiap proyek dengan memadukan kreativitas dengan pemahaman mendalam tentang teknis konstruksi. Kami mengintegrasikan teknologi dan praktik terbaik industri untuk memastikan setiap proyek kami diselesaikan dengan tepat waktu, dalam anggaran, dan dengan standar kualitas yang tinggi.</p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    {/* right */}
                    <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={titleVariant2}
                    className='w-[500px] h-[500px] rounded-2xl bg-gray-200'>
                      <Image src={Banner1} alt="logo" width={1000} height={1000} quality={90} className="w-full h-full rounded-2xl object-cover" />
                    </motion.div>
                  </div>
                </div>
    </div>
  )
}

export default Slider1