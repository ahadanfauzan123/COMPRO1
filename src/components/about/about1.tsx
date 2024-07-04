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
                      Visi kami adalah menjadi pemimpin terdepan dalam industri konstruksi di Indonesia dengan reputasi tak tertandingi dalam inovasi, keunggulan teknis, dan kepuasan pelanggan di seluruh proyek pembangunan gedung komersial dan hunian. Kami berkomitmen untuk menetapkan standar tertinggi dalam setiap aspek proyek, dari perencanaan hingga penyelesaian, dengan tujuan mencapai keunggulan dan ketahanan di setiap proyek yang kami tangani.<br />
                        <br />
                        Misi kami mencakup lima pilar utama: memberikan kualitas terbaik dengan memanfaatkan teknologi terbaru dan praktik industri terbaik; mengutamakan keamanan dan keberlanjutan dalam setiap proyek melalui praktik konstruksi yang bertanggung jawab; mengedepankan kolaborasi dengan membangun hubungan yang kuat dengan klien, arsitek, dan mitra; terus mendorong inovasi dan pembaruan berkelanjutan untuk meningkatkan efisiensi dan kualitas; serta memastikan penyelesaian proyek tepat waktu dan sesuai anggaran tanpa mengorbankan standar kualitas tinggi yang kami junjung.
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