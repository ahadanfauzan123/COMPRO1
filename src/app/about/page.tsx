import About1 from '@/components/about/about1'
import CompanyLocation from '@/components/about/companyLocation'
import Core1 from '@/components/about/core1'
import ImageBanner from '@/components/imageBanner'
import Project1 from '@/components/about/project1'
import Slider1 from '@/components/about/slider1'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Banner from "../../../public/img/banner3.png"

function About() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-white flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* ImageBanner */}
      <ImageBanner title='About' pathDescription='Home / About' bannerImage={Banner} />
      {/* about */}
      <About1 />
      {/* slider */}
      <Slider1 />
      {/* core */}
      <Core1 />
      {/* Projects */}
      <Project1 />
      {/* company location */}
      <CompanyLocation / >
      {/* footer */}
      <Footer />
    </main>
  )
}

export default About