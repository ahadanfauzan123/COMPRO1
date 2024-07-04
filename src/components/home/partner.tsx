import Image from 'next/image'
import React from 'react'
import Image1 from "../../../public/img/partner/partner1.png"
import Partner1 from "../../../public/img/home/partner1.png"
import Partner2 from "../../../public/img/home/partner2.png"
import Partner3 from "../../../public/img/home/partner3.png"

function Partner() {
  return (
    <div id='partner' className='mt-[120px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
      <h1 className="text-4xl w-[90%] nx-auto z-20 font-extrabold leading-[50px]"><span className="">Partners & Clients Who Trust Our Services</span></h1>
      <div className="w-full lg:w-[80%] mx-auto mt-[80px] lg:shadow-md lg:shadow-gray-300 lg:rounded-2xl flex items-center justify-center flex-wrap py-5 bg-orange-200 text-white">
        <div className='flex items-center justify-center mx-3 my-3 bg-white rounded-xl w-[300px] h-[140px]'>
          <Image src={Partner1} alt={""} width={1000} height={1000} className="w-[75%] h-[68%]" />
        </div>
        <div className='flex items-center justify-center mx-3 my-3 bg-white rounded-xl w-[300px] h-[140px]'>
          <Image src={Partner2} alt={""} width={1000} height={1000} className="w-[75%] h-[68%]" />
        </div>
        <div className='flex items-center justify-center mx-3 my-3 bg-white rounded-xl w-[300px] h-[140px]'>
          <Image src={Partner3} alt={""} width={1000} height={1000} className="w-[75%] h-[68%]" />
        </div>
      </div>
    </div>
  )
}

export default Partner