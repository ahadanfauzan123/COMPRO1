import About2 from "@/components/home/about2";
import Footer from "@/components/footer";
import Header from "@/components/home/header";
import Navbar from "@/components/navbar";
import Partner from "@/components/home/partner";
import Service from "@/components/home/service";
import Portofolio1 from "@/components/home/portofolio1";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-gray-600 scroll-smooth bg-white flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* About2 */}
      <About2 />
      {/* Portofolio */}
      <Portofolio1 />
      {/* Service */}
      {/* <Service /> */}
      {/* Partner */}
      <Partner />
      {/* Footer */}
      <Footer />
      {/* <WhatsApp /> */}
    </main>
  );
}
