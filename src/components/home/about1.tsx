import Image from 'next/image'
import React from 'react'
// import Logo from "../../public/img/profile/image1.png"
import Link from 'next/link'

function About1() {
  return (
      <div id="about" className="w-full flex pt-[60px] flex-col bg-white text-gray-600">
      <div className=" w-full min-h-[90vh] lg:h-[70vh] flex flex-col space-y-8 lg:space-y-0 items-center justify-start">
        <div
        className="flex w-full flex-col items-center justify-between">
          {/* about */}
          <div className='w-[90%] mx-auto flex flex-col lg:flex-col space-y-12 lg:space-y-0 items-center justify-between my-[48px]'>
            {/* left */}
            <div className='flex-1 flex items-center justify-start flex-col space-y-9'>
              <h1 className="w-full text-center text-[42px] font-extrabold "><span className="">About Us</span></h1>
              <p className=" w-full lg:w-[90%] text-center">
              Code Craft adalah perusahaan yang berfokus pada penyediaan solusi digital inovatif untuk membantu bisnis meningkatkan kehadiran mereka secara online. Kami didedikasikan untuk membantu bisnis-bisnis yang belum memiliki website untuk mengembangkan kehadiran online yang kuat dan efektif.
              </p>
              <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link>
            </div>
            {/* right */}
            {/* <div className='w-[500px] h-full rounded-2xl bg-gray-200'> */}
              {/* <Image src={Logo} alt="logo" width={1000} height={1000} quality={90} className="w-full h-full rounded-2xl object-cover" /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About1