"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimation, Variants, useScroll } from "framer-motion"
import { FaFireAlt, FaRegLightbulb  } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";
import Link from 'next/link';
import Image3 from "../../../public/img/about/about3.png"
import Portfolio1 from "../../../public/img/home/portfolio1.png"
import Portfolio2 from "../../../public/img/home/portfolio2.png"
import Portfolio3 from "../../../public/img/home/portfolio3.png"
import Portfolio4 from "../../../public/img/home/portfolio4.png"


function Profile2() {
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
      <div className="w-full flex flex-col space-y-8">
            {/* kegiatan pertama */}
      <div className="relative w-[80vw] mx-auto flex flex-col space-y-8 items-center justify-center h-[105vh] lg:h-[85vh]">
        {/* <Image alt="svg" src="" width={100} height={100} className="absolute left-[50px] top-[40%]" /> */}
        
        <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] font-bold text-gray-600 leading-[50px]">About Us</motion.h1>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-center text-lg">
            PT. Lexica Cala Nusa adalah perusahaan konstruksi yang berdedikasi untuk memberikan solusi berkualitas tinggi dalam pembangunan gedung komersial dan hunian. Sejak didirikan, kami telah membangun reputasi sebagai mitra yang dapat diandalkan dengan mengutamakan inovasi, keunggulan teknis, dan kepuasan pelanggan.
      
      </motion.h3>

      </div>
      {/* kegiatan pertama */}
      <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[65vh]">
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
          <div className='w-[400px] h-[300px] rounded-2xl'>
            <Image src={Portfolio1} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </motion.div>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Kontruksi Komersial</h1>
          <p className='text-lg text-start'>
          Kami menawarkan layanan konstruksi komersial yang mencakup pembangunan gedung perkantoran, pusat perbelanjaan, hotel dan resort, restoran, serta fasilitas industri dan gudang. Dengan fokus pada kualitas dan efisiensi, kami memastikan setiap proyek komersial kami memenuhi standar tinggi dan kebutuhan spesifik klien.
          </p>
          <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
             
      </motion.h3>

      </div>
      {/* kegiatan Kedua sm */}
      <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 w-[80vw] mx-auto flex lg:hidden flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[65vh]">
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
          <div className='w-[400px] h-[300px] rounded-2xl'>
            <Image src={Portfolio2} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </motion.div>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Kontruksi Hunian</h1>
          <p className='text-lg text-start'>
          Kami menyediakan layanan konstruksi hunian yang meliputi pembangunan rumah pribadi, apartemen dan kondominium, townhouse, serta perumahan terpadu. Kami berkomitmen untuk menciptakan hunian yang nyaman, aman, dan sesuai dengan gaya hidup modern, memberikan tempat tinggal yang ideal bagi Anda dan keluarga.
          </p>
          <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
             
      </motion.h3>

      </div>
      {/* kegiatan Kedua lg */}
      <div className="w-screen hidden lg:inline-flex">
      <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 flex flex-col lg:flex-row space-y-8 items-end lg:items-center justify-between lg:justify-between w-[80%] mx-auto left-0 p-6 h-[60vh] lg:h-[55vh]">
      <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-start text-lg flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Kontruksi Hunian</h1>
          <p className='text-lg text-start'>
          Kami menyediakan layanan konstruksi hunian yang meliputi pembangunan rumah pribadi, apartemen dan kondominium, townhouse, serta perumahan terpadu. Kami berkomitmen untuk menciptakan hunian yang nyaman, aman, dan sesuai dengan gaya hidup modern, memberikan tempat tinggal yang ideal bagi Anda dan keluarga.
          
          </p>
          <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
             
</motion.h3>
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] text-end lg:flex-[0.35] font-bold leading-[50px]">
          <div className='w-[400px] h-[300px] rounded-2xl'>
            <Image src={Portfolio2} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </motion.div>
        

      </div>
      </div>
      {/* kegiatan ke ketiga */}
      <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[65vh]">
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
          <div className='w-[400px] h-[300px] rounded-2xl'>
            <Image src={Portfolio3} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </motion.div>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Arsitektur dan Desain Interior</h1>
          <p className='text-lg text-start'>
          Layanan arsitektur dan desain interior kami mencakup rumah pribadi, restoran, dan kantor. Dengan tim desainer berpengalaman, kami merancang ruang yang estetis dan fungsional, mencerminkan kepribadian dan kebutuhan klien, serta menciptakan lingkungan yang inspiratif dan nyaman.
          </p>
          <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
             
      </motion.h3>

      </div>
      {/* kegiatan Keempat sm */}
      <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 w-[80vw] mx-auto flex lg:hidden flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[86vh] lg:h-[65vh]">
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">
          <div className='w-[400px] h-[300px] rounded-2xl'>
            <Image src={Portfolio4} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </motion.div>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] lg:flex-[0.6] z-20 text-start text-lg flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Perabotan dan Mesin Dapur</h1>
          <p className='text-lg text-start'>
          Kami menyediakan perabotan dan mesin dapur berkualitas tinggi untuk memenuhi kebutuhan dapur profesional dan rumah tangga. Produk kami mengutamakan fungsionalitas, daya tahan, dan desain yang menarik, memastikan dapur Anda beroperasi dengan efisien dan terlihat menawan.</p>
          <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
             
      </motion.h3>

      </div>
      {/* kegiatan Keempat lg */}
      <div className="w-screen hidden lg:inline-flex">
      <div className="relative shadow-md shadow-gray-300 rounded-xl px-4 flex flex-col lg:flex-row space-y-8 items-end lg:items-center justify-between lg:justify-between w-[80%] mx-auto left-0 p-6 h-[60vh] lg:h-[55vh]">
      <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-start text-lg flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Perabotan dan Mesin Dapur</h1>
          <p className='text-lg text-start'>
          Kami menyediakan perabotan dan mesin dapur berkualitas tinggi untuk memenuhi kebutuhan dapur profesional dan rumah tangga. Produk kami mengutamakan fungsionalitas, daya tahan, dan desain yang menarik, memastikan dapur Anda beroperasi dengan efisien dan terlihat menawan.</p>
          <button className='px-4 py-2 bg-orange-400 w-[120px] text-white font-semibold rounded-lg'>See More</button>
             
</motion.h3>
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] text-end lg:flex-[0.35] font-bold leading-[50px]">
          <div className='w-[400px] h-[300px] rounded-2xl'>
            <Image src={Portfolio4} alt="test" width={1000} height={1000} quality={90} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </motion.div>
        

      </div>
      </div>
    </div>
  )
}

export default Profile2