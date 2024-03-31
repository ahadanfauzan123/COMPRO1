import ImageBanner from '@/components/service/imageBanner'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Tabs1 from '@/components/service/tabs'

function Projects() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-white flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* ImageBanner */}
      <ImageBanner />
      {/* tabs */}
      <Tabs1 />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default Projects