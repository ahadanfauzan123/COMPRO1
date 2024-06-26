"use client"
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Banner1 from "../../../public/img/banner1.png"

function About1() {
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
        <div id="about" className="w-full flex pt-[60px] flex-col bg-white text-gray-600">
              <div className=" w-full min-h-[90vh] lg:min-h-[70vh] flex flex-col space-y-8 lg:space-y-0 items-center justify-center">
                <div
                className="flex w-full flex-col items-center justify-between">
                  {/* 1 */}
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
                      Code Craft adalah perusahaan yang berfokus pada penyediaan solusi digital inovatif untuk membantu bisnis meningkatkan kehadiran mereka secara online. Kami didedikasikan untuk membantu bisnis-bisnis yang belum memiliki website untuk mengembangkan kehadiran online yang kuat dan efektif.
        <br />
        <br />
        Di Code Craft, kami percaya bahwa setiap bisnis memiliki potensi untuk sukses dalam dunia digital yang terus berkembang. Itulah mengapa kami berkomitmen untuk menyediakan layanan yang memenuhi kebutuhan unik setiap klien kami, dengan fokus pada inovasi, kreativitas, dan hasil yang berorientasi pada tujuan. Kami memahami bahwa setiap bisnis memiliki cerita uniknya sendiri, dan kami bersemangat untuk menjadi bagian dari perjalanan Anda dalam mengubah visi menjadi kenyataan digital. 
                      </p>
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
                  {/* 2 */}
                  <div className='w-[90%] mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-center justify-between my-[48px]'>
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
                      <h1 className="w-full text-end text-[42px] font-extrabold "><span className="">Company History</span></h1>
                      <p className=" w-full lg:w-[65%] text-end">
                        Code Craft adalah perusahaan yang berfokus pada penyediaan solusi digital inovatif untuk membantu bisnis meningkatkan kehadiran mereka secara online. Kami didedikasikan untuk membantu bisnis-bisnis yang belum memiliki website untuk mengembangkan kehadiran online yang kuat dan efektif.
                        <br />
                        <br />
                        Di Code Craft, kami percaya bahwa setiap bisnis memiliki potensi untuk sukses dalam dunia digital yang terus berkembang. Itulah mengapa kami berkomitmen untuk menyediakan layanan yang memenuhi kebutuhan unik setiap klien kami, dengan fokus pada inovasi, kreativitas, dan hasil yang berorientasi pada tujuan. Kami memahami bahwa setiap bisnis memiliki cerita uniknya sendiri, dan kami bersemangat untuk menjadi bagian dari perjalanan Anda dalam mengubah visi menjadi kenyataan digital. 
                      </p>
                      {/* <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link> */}
                    </motion.div>
                    
                  </div>
                </div>
              </div>
            </div>
  )
}

export default About1