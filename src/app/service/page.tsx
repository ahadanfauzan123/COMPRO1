import About1 from '@/components/about/about1'
import Core1 from '@/components/about/core1'
import ImageBanner from '@/components/service/imageBanner'
import Project1 from '@/components/about/project1'
import Slider1 from '@/components/about/slider1'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Core2 from '@/components/service/core2'
import Slider3 from '@/components/service/slider3'

function Service() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-white flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* ImageBanner */}
      <ImageBanner />
      {/* core */}
      <Core2 />
      {/* slider */}
      <Slider3 />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default Service