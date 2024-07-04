"use client"
import React from 'react'
import AnimatedCounter from './animatedCounter'
import Image from 'next/image'
import { motion, useAnimation, Variants, useScroll } from "framer-motion"
import Project1 from "../../../public/img/home/project1.png"
import Project2 from "../../../public/img/home/project2.png"

function Portofolio1() {
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
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const titleVariant2: Variants = {
    offscreen: {
      x: 80,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
      <div id='portofolio' className='mt-[120px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
      <h1 className="text-4xl z-20 font-extrabold leading-[50px]"><span className="">PORTOFOLIO</span></h1>
      <div className="w-full flex flex-col space-y-8">
        {/* kegiatan pertama */}
        <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[65vh]">
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={titleVariant1}
          className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
            <div className='w-[400px] h-[300px] rounded-2xl'>
              <Image src={Project1} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
            </div>
          </motion.div>
          <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={titleVariant2}
          className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Proyek Pembangunan Yomart</h1>
            <p className='text-lg text-start'>
            Lexica dengan bangga mengumumkan keterlibatan kami dalam proyek pembangunan Yomart, sebuah jaringan supermarket yang dirancang untuk memenuhi kebutuhan masyarakat dengan produk berkualitas tinggi dan harga terjangkau. Proyek ini mencakup:</p>
            <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
              
        </motion.h3>

        </div>
        {/* kegiatan kedua */}
        <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[65vh]">
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={titleVariant1}
          className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
            <div className='w-[400px] h-[300px] rounded-2xl'>
              <Image src={Project2} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
            </div>
          </motion.div>
          <motion.h3 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={titleVariant2}
          className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Proyek Pembangunan Summarecon</h1>
            <p className='text-lg text-start'>
            Kami menawarkan layanan konstruksi komersial yang mencakup pembangunan gedung perkantoran, pusat perbelanjaan, hotel dan resort, restoran, serta fasilitas industri dan gudang. Dengan fokus pada kualitas dan efisiensi, kami memastikan setiap proyek komersial kami memenuhi standar tinggi dan kebutuhan spesifik klien.
            </p>
            <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
              
        </motion.h3>

        </div>
      </div>
    </div>
  )
}

export default Portofolio1