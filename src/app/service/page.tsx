import ImageBanner from '@/components/imageBanner'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Core2 from '@/components/service/core2'
import Slider3 from '@/components/service/slider3'
import OurService from '@/components/service/ourService'
import Banner from "../../../public/img/banner3.png"

function Service() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-white flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* ImageBanner */}
      <ImageBanner title='Service' pathDescription='Home / Service' bannerImage={Banner} />
      {/* core */}
      <Core2 />
      {/* our service */}
      <OurService />
      {/* slider */}
      <Slider3 />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default Service