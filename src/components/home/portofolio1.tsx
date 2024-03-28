"use client"
import React from 'react'
import AnimatedCounter from './animatedCounter'
import Image from 'next/image'
import Image1 from "../../../public/img/portofolio/portofolio1.png"

function Portofolio1() {
  return (
      <div id='portofolio' className='mt-[120px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
      <h1 className="text-4xl z-20 font-extrabold leading-[50px]"><span className="">PORTOFOLIO</span></h1>
      <div className="w-full lg:w-[80%] mx-auto mt-[80px] lg:shadow-md lg:shadow-gray-300 lg:rounded-2xl flex items-center justify-center space-x-[50px] lg:space-x-[120px] py-5 bg-orange-200 text-gray-600">
              <div className="text-5xl flex flex-col items-center justify-between h-[86px] space-y-2">
                <h1 className=" font-extrabold"><AnimatedCounter from={0} to={50} /><span>+</span></h1>
                <p className=" text-xs lg:text-[14px] font-light h-[30px]">Klien</p>
              </div>
              <div className="text-5xl flex flex-col items-center justify-between h-[86px] space-y-2">
                <h1 className=" font-extrabold"><AnimatedCounter from={0} to={50} /><span></span>+</h1>
                <p className=" text-xs lg:text-[14px] font-light h-[30px]">Pengadaan</p>
              </div>
              <div className="text-5xl flex flex-col items-center justify-between h-[86px] space-y-2">
                <h1 className=" font-extrabold"><AnimatedCounter from={0} to={50} /><span></span>+</h1>
                <p className=" text-xs lg:text-[14px] font-light h-[30px]">Distributor</p>
              </div>
          </div>
      {/* 3 */}
      <div className="flex  items-center justify-between flex-col lg:flex-row space-y-4 lg:space-y-0 w-full lg:w-[80%] mx-auto mt-[80px] lg:shadow-md lg:shadow-gray-300 lg:rounded-2xl  py-5 text-white">
      {/* 3.1 */}
      <div className='relative w-[80%] sm:mx-auto lg:w-[32%] h-[240px] rounded-xl  flex items-center justify-center'>
      <Image src={Image1} alt="test" width={1000} height={1000} quality={90} className='absolute w-full h-full object-cover rounded-xl' />
      <h1 className='text-white font-bold text-3xl z-20'>Projects</h1> 
      </div>
      {/* 3.2 */}
      <div className='relative w-[80%] sm:mx-auto lg:w-[32%] h-[240px] rounded-xl  flex items-center justify-center'>
      <Image src={Image1} alt="test" width={1000} height={1000} quality={90} className='absolute w-full h-full object-cover rounded-xl' />
      <h1 className='text-white font-bold text-3xl z-20'>Team</h1> 
      </div>
      {/* 3.3 */}
      <div className='relative w-[80%] sm:mx-auto lg:w-[32%] h-[240px] rounded-xl  flex items-center justify-center'>
      <Image src={Image1} alt="test" width={1000} height={1000} quality={90} className='absolute w-full h-full object-cover rounded-xl' />
      <h1 className='text-white font-bold text-3xl z-20'>Contact</h1> 
      </div>
      </div>
    </div>
  )
}

export default Portofolio1