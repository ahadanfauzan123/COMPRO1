"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimation, Variants, useScroll } from "framer-motion"
import { FaFireAlt, FaRegLightbulb  } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";
import Link from 'next/link';



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
            PT Panca Armada Andalan merupakan perusahaan yang telah berpengalaman 
bertahun-tahun dalam industri karoseri mobil di Indonesia. Dengan dedikasi yang 
tinggi dan tim profesional yang berpengalaman, kami telah berhasil membangun 
reputasi yang kuat sebagai salah satu produsen karoseri terkemuka di negara 
ini.
Di PT Panca Armada Andalan, kami menyediakan berbagai macam layanan 
berkualitas untuk memenuhi kebutuhan transportasi Anda. Mulai dari pembuatan 
kendaraan bermotor komersial seperti bus dan truk, hingga modifikasi mobil 
penumpang dan kendaraan khusus lainnya, kami siap membantu Anda 
mewujudkan visi dan misi bisnis Anda.
      
      </motion.h3>

      </div>
      {/* kegiatan ketiga */}
      <div className="relative w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[65vh]">
        {/* <Image alt="svg" src="" width={100} height={100} className="absolute left-[50px] top-[40%]" /> */}
        <FaRegLightbulb  className='z-10 h-24 w-24 absolute left-[45px] top-[40%] text-opacity-50 text-yellow-600'/>
        <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Inovasi Berkelanjutan</motion.h1>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-start text-lg">
            Kami selalu berupaya untuk meningkatkan 
kualitas dan efisiensi layanan kami melalui inovasi dan penelitian terbaru 
dalam bidang karoseri mobil.

      
      </motion.h3>

      </div>
      {/* kegiatan keempat */}
      <div className="w-screen">
      <div className="relative flex flex-col lg:flex-row space-y-8 items-end lg:items-center justify-between lg:justify-between w-[80%] mx-auto left-0 p-6 h-[60vh] lg:h-[55vh]">
      {/* <Image alt="svg" src="" width={100} height={100} className="absolute right-[50px] top-[40%]" />
         */}
         <MdOutlinePhoneInTalk  className='z-10 h-24 w-24 text-opacity-50 absolute right-[50px] top-[40%] text-red-200'/>
                         
      <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-start text-lg">
          Kepuasan pelanggan adalah prioritas 
utama kami. Tim kami siap memberikan pelayanan terbaik mulai dari 
konsultasi desain hingga layanan purna jual.
</motion.h3>
        <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] text-end lg:flex-[0.35] font-bold leading-[50px]">Pelayanan Pelanggan Prima</motion.h1>
        

      </div>
      </div>
      {/* kegiatan kelima */}
      <div className="relative w-[80vw] mx-auto flex flex-col lg:flex-row space-y-8 items-start lg:items-center justify-center lg:justify-between h-[65vh]">
        {/* <Image alt="svg" src="" width={100} height={100} className="absolute left-[50px] top-[40%]" /> */}
        <GiGreenhouse  className='z-10 h-24 w-24 text-opacity-50 absolute left-[45px] top-[40%] text-green-600'/>
        <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant1}
        className="text-5xl z-20 flex-[0.2] lg:flex-[0.35] font-bold text-gray-600 leading-[50px]">Komitmen Lingkungan</motion.h1>
        <motion.h3 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariant2}
        className="flex-[0.4] z-20 text-start text-lg">
             Kami peduli terhadap lingkungan dan 
berkomitmen untuk mengurangi dampak negatif produksi terhadap 
lingkungan sekitar.

      
      </motion.h3>

      </div>
    </div>
  )
}

export default Profile2