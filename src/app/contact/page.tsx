import ImageBanner from '@/components/imageBanner'
import Address from '@/components/address'
import Navbar from '@/components/navbar'
import React from 'react'
import ContactSection from '@/components/contact/contactSection'
import Footer from '@/components/footer'
import CompanyLocation from '@/components/about/companyLocation'
import Banner from "../../../public/img/banner3.png"

function Contact() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-white flex min-h-screen w-screen flex-col items-center">
      {/* navbar */}
      <Navbar />
      {/* ImageBanner */}
      <ImageBanner title='Contact' pathDescription='Home / Contact' bannerImage={Banner} />
      {/* contact section */}
      <ContactSection />
      {/* company Location */}
      <CompanyLocation />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default Contact