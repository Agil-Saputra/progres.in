"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Sparkle, Clock, Globe, Headphones, Rocket } from "lucide-react";
import { MagicMarquee } from "@/components/magicui/marquee";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Import data
import testimonialsData from "@/data/testimonials.json";
import successStoriesData from "@/data/success-stories.json";

// Import components
import Slider from "@/components/slider";
import SuccessStoryCard from "@/components/success-story-card";

// Import HIFI images
import hifiDashboard from "@/assets/HIFI-Dashboard.png";
import lanPage1 from "@/assets/lanPageMarque (1).png";
import lanPage2 from "@/assets/lanPageMarque (2).png";
import womanWorking from "@/assets/womanWorking.png"

const VerticalMarquee = () => {
  return (
    <div className="relative flex h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto flex-row items-center justify-center overflow-hidden z-[1] rotate-3 md:rotate-6">
      {/* First Column - Moving Up */}
      <MagicMarquee
        vertical={true}
        className="h-full"
        pauseOnHover={false}
        repeat={3}
      >
        <div className="relative w-[200px] md:w-[300px] lg:w-[400px] h-[400px] md:h-[600px] lg:h-[800px] mb-2 transition-all duration-300">
          <Image
            src={lanPage1}
            alt="lanPage1"
            fill
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </MagicMarquee>

      {/* Second Column - Moving Down */}
      <MagicMarquee
        vertical={true}
        reverse={true}
        className="h-full"
        pauseOnHover={false}
        repeat={3}
      >
        <div className="relative w-[200px] md:w-[300px] lg:w-[400px] h-[400px] md:h-[600px] lg:h-[800px] mb-2 transition-all duration-300">
          <Image
            src={lanPage2}
            alt="lanPage2"
            fill
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </MagicMarquee>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const successRef = useRef(null);
  const testimonialsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const isSuccessInView = useInView(successRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="pt-32 pb-16 px-6"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Bikin Website untuk Usahamu dalam 5 Menit!
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Perluas jangkauan bisnismu dan raih lebih banyak pelanggan
                dengan website profesional.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
                  Buat Website Sekarang
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Website Previews Vertical Marquee */}
            <motion.div 
              className="flex-1 relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-2xl mx-auto h-[350px] md:h-[450px] lg:h-[500px]">
                {/* Vertical Marquee Container */}
                <VerticalMarquee />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Scrolling Ticker */}
      <div className="overflow-hidden relative z-20">
        {/* First Marquee - Blue Background */}
        <div className="bg-blue-600 text-white py-4 ">
          <Marquee>
            <MarqueeContent autoFill={true} pauseOnHover={false} speed={50}>
              {new Array(10).fill(null).map((_, index) => (
                <MarqueeItem key={index} className="mx-2">
                  <span className="inline-flex items-center text-lg font-semibold whitespace-nowrap">
                    <Sparkle className="w-5 h-5 mr-3" />
                    Bangun Bisnismu!
                  </span>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>

        {/* Second Marquee - White Background */}
        <div className="bg-white text-blue-600 py-4 ">
          <Marquee>
            <MarqueeContent
              autoFill={true}
              pauseOnHover={false}
              speed={50}
              direction="right"
            >
              {new Array(10).fill(null).map((_, index) => (
                <MarqueeItem key={index} className="mx-2">
                  <span className="inline-flex items-center text-lg font-semibold whitespace-nowrap">
                    <Sparkle className="w-5 h-5 mr-3" />
                    Raih Market Baru
                  </span>
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div>

      {/* Tentang Kami Section */}
      <motion.section 
        ref={aboutRef}
        className="relative overflow-visible"
        initial={{ opacity: 0 }}
        animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background with Gradient - Full screen width */}
        <motion.div
          className="relative min-h-[100vh] flex justify-center"
          style={{
            width: "100vw",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, #2563eb, #1d4ed8, #1e40af, #1e3a8a)",
          }}
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-full"
          />
          {/* Centered Text Content */}
          <div className="relative z-10 max-w-6xl mx-auto pt-36 text-center px-6">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tentang Kami
            </motion.h2>

            <motion.p 
              className="text-white text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Buka potensi penuh bisnis Anda di dunia digital dengan platform
              kami, yang memadukan kemudahan membuat website penjual dengan
              penguasaan strategi pemasaran online yang efektif.
            </motion.p>
          </div>

          {/* SVG Wave at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 600"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,480L120,470.7C240,461,480,442,720,448C960,454,1200,486,1320,501.3L1440,517L1440,600L1320,600C1200,600,960,600,720,600C480,600,240,600,120,600L0,600Z"
              />
            </svg>
          </div>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto -mt-[30rem]">
          <div className="flex justify-between items-center gap-8">
            <motion.div 
              className="flex-1 px-6"
              initial={{ opacity: 0, y: 100 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="overflow-hidden rounded-lg shadow-lg h-fit max-lg:mt-40 md:h-[40rem] ">
                <Image
                  src={hifiDashboard}
                  alt="HIFI Landing Page"
                  width={1500}
                  height={600}
                  className="w-full h-full object-contain md:object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Detail Tentang Kami Section */}
      <motion.section 
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Heading - Full Width */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Solusi Digital untuk Pertumbuhan UMKM Anda
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left Column - Two column text at top */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.p 
                  className="text-gray-600 text-base leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Memasuki pasar digital adalah tantangan. Kami mengerti.
                  Kesulitan dalam pemasaran online, membuat konten promosi yang
                  menarik, dan mengelola website secara optimal adalah kendala
                  nyata yang dihadapi banyak UMKM di Indonesia.
                </motion.p>

                <motion.p 
                  className="text-gray-600 text-base leading-relaxed"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Progres.in adalah jawaban atas tantangan tersebut. Kami
                  menyediakan platform terintegrasi yang dirancang khusus untuk
                  menyederhanakan proses digitalisasi bisnis Anda.
                </motion.p>
              </div>
            </div>

            {/* Bottom Row - Image on left, Text on right */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <motion.div 
                  className="max-w-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gray-100 rounded-2xl">
                    <Image
                      src={womanWorking}
                      alt="Woman Working"
                      width={500}
                      height={320}
                      className="w-full h-72 object-cover rounded-xl"
                    />
                  </div>
                </motion.div>

                {/* Text Section */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                    Kami Mempercepat Digitalisasi UMKM Indonesia
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed">
                    Kami percaya pada kekuatan transformatif digitalisasi untuk
                    Usaha Mikro, Kecil, dan Menengah (UMKM) yang menjadi tulang
                    punggung ekonomi Indonesia. Misi kami adalah mengakselerasi
                    pertumbuhan ekonomi yang adil dan berkelanjutan.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        ref={featuresRef}
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Mengapa Memilih <span className="text-blue-600">Progres.in</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Platform terdepan dengan fitur lengkap untuk mengembangkan bisnis
              UMKM Anda secara digital
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Feature 1 - Website Siap dalam 5 Menit - Large Left */}
            <motion.div 
              className="md:col-span-2 lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isFeaturesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Clock className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Website Siap dalam 5 Menit
                </h3>
                <p className="text-blue-50 text-lg leading-relaxed">
                  Tanpa coding, tanpa ribet. Template profesional siap pakai
                  dengan customization mudah untuk semua jenis bisnis UMKM.
                </p>
              </div>
              <motion.div 
                className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/5 rounded-full"></div>
            </motion.div>

            {/* Feature 2 - Jangkauan Global & SEO Optimal - Top Right */}
            <motion.div 
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-white via-blue-50 to-blue-100 border-2 border-blue-100 rounded-3xl p-8 text-gray-800 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <Globe className="w-7 h-7 text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Jangkauan Global & SEO Optimal
                </h3>
                <p className="text-gray-600">
                  Website dioptimasi untuk mesin pencari agar mudah ditemukan
                  pelanggan di Google dan platform digital lainnya.
                </p>
              </div>
              <motion.div 
                className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>

            {/* Feature 3 - Tingkatkan Penjualan hingga 300% - Bottom Right Small */}
            <motion.div 
              className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 180 }}
                >
                  <Rocket className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold mb-3">
                  Tingkatkan Penjualan hingga 300%
                </h3>
                <p className="text-blue-50 text-sm mb-4">
                  Fitur e-commerce lengkap dengan payment gateway dan marketing
                  tools.
                </p>
                <motion.div 
                  className="bg-white/10 rounded-lg p-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg font-bold">2000+</div>
                  <div className="text-blue-100 text-xs">UMKM Sukses</div>
                </motion.div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full"></div>
            </motion.div>

            {/* Feature 4 - Training Gratis - Bottom Right Small */}
            <motion.div 
              className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100 border-2 border-blue-100 rounded-3xl p-6 text-gray-800 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isFeaturesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Headphones className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800">
                    Training Gratis
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Pelatihan digital marketing dan manajemen website.
                  </p>
                </div>
                <motion.div 
                  className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg font-bold text-blue-700">100+</div>
                  <div className="text-gray-600 text-xs">Video Tutorial</div>
                </motion.div>
              </div>
              <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section 
        ref={successRef}
        className="py-20" 
        id="success-stories"
        initial={{ opacity: 0 }}
        animate={isSuccessInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isSuccessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Kisah <span className="text-blue-600">Sukses</span> UMKM
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Belajar dari pengalaman pelaku UMKM yang telah berhasil
              mengembangkan bisnisnya dengan strategi yang tepat.
            </p>
          </motion.div>

          {/* Success Stories Slider */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSuccessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Slider
              slidesPerView={1}
              spaceBetween={30}
              autoplay={true}
              navigation={true}
              pagination={true}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
            >
              {successStoriesData.map((story) => (
                <SuccessStoryCard key={story.id} story={story} />
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Marquee Section */}
      <motion.section 
        ref={testimonialsRef}
        className="py-16" 
        id="testimonials"
        initial={{ opacity: 0 }}
        animate={isTestimonialsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-600 text-lg">
              Lihat bagaimana Progres.in membantu UMKM berkembang
            </p>
          </motion.div>

          {/* First row - Left to Right */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isTestimonialsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Marquee>
              <MarqueeContent
                autoFill={true}
                pauseOnHover={true}
                speed={30}
                direction="left"
              >
                {testimonialsData.slice(0, 5).map((testimonial, index) => (
                  <MarqueeItem key={testimonial.id} className="mx-4">
                    <motion.div
                      className={`${
                        index % 2 === 0
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      } rounded-2xl p-6 w-96 shadow-lg`}
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              index % 2 === 0 ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {testimonial.name}
                          </h4>
                          <p
                            className={`text-sm ${
                              index % 2 === 0
                                ? "text-blue-100"
                                : "text-gray-500"
                            }`}
                          >
                            {testimonial.business}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`leading-relaxed ${
                          index % 2 === 0 ? "text-white" : "text-gray-600"
                        }`}
                      >
                        "{testimonial.testimonial}"
                      </p>
                      {/* Star Rating */}
                      <div className="flex mt-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className={`w-4 h-4 ${
                              index % 2 === 0
                                ? "text-yellow-300"
                                : "text-yellow-400"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    </motion.div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </motion.div>

          {/* Second row - Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isTestimonialsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Marquee>
              <MarqueeContent
                autoFill={true}
                pauseOnHover={true}
                speed={30}
                direction="right"
              >
                {testimonialsData.slice(5, 10).map((testimonial, index) => (
                  <MarqueeItem key={testimonial.id} className="mx-4">
                    <motion.div
                      className={`${
                        index % 2 === 1
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      } rounded-2xl p-6 w-96 shadow-lg`}
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              index % 2 === 1 ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {testimonial.name}
                          </h4>
                          <p
                            className={`text-sm ${
                              index % 2 === 1
                                ? "text-blue-100"
                                : "text-gray-500"
                            }`}
                          >
                            {testimonial.business}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`leading-relaxed ${
                          index % 2 === 1 ? "text-white" : "text-gray-600"
                        }`}
                      >
                        "{testimonial.testimonial}"
                      </p>
                      {/* Star Rating */}
                      <div className="flex mt-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className={`w-4 h-4 ${
                              index % 2 === 1
                                ? "text-yellow-300"
                                : "text-yellow-400"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    </motion.div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
