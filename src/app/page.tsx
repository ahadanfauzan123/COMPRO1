import About1 from "@/components/home/about1";
import About2 from "@/components/home/about2";
import Footer from "@/components/footer";
import Header from "@/components/home/header";
import Navbar from "@/components/navbar";
// import Partner from "@/components/home/partner";
import Portofolio from "@/components/home/portofolio";
import Service from "@/components/home/service";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-white flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* About1 */}
      {/* <About1 /> */}
      {/* About2 */}
      <About2 />
      {/* Service */}
      <Service />
      {/* Portofolio */}
      <Portofolio />
      {/* Partner */}
      {/* <Partner /> */}
      {/* Footer */}
      <Footer />
      {/* <WhatsApp /> */}
    </main>
  );
}
