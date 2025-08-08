"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Zap, TrendingUp, Sparkle } from "lucide-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";

// Import marquee images
import marqueImg1 from "@/assets/lanPageMarque (1).png";
import marqueImg2 from "@/assets/lanPageMarque (2).png";
import marqueImg3 from "@/assets/lanPageMarque (3).png";
import marqueImg4 from "@/assets/lanPageMarque (4).png";
import tentangKamiBg from "@/assets/tentangKamiBG.webp";

// Import HIFI images
import hifiProfile from "@/assets/HIFI-Profile.png";
import hifiLandingPage from "@/assets/HIFI-Landing Page.png";
import hifiEducationCenter from "@/assets/HIFI-Education Center.png";
import hifiEditTemplate from "@/assets/HIFI-Edit Template.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 leading-tight mb-6">
                Bikin Website untuk Usahamu dalam 5 Menit!
              </h1>
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
                Perluas jangkauan bisnismu dan raih lebih banyak pelanggan
                dengan website profesional.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
                Buat Website Sekarang
              </Button>
            </div>

            {/* Right Content - Website Previews Marquee */}
            <div className="flex-1 relative">
              <div className="relative w-full max-w-3xl mx-auto">
                {/* Horizontal Marquee Container */}
                <div className="overflow-hidden rounded-2xl bg-gray-50 p-4">
                  <Marquee>
                    <MarqueeFade side="left" />
                    <MarqueeFade side="right" />
                    <MarqueeContent
                      autoFill={true}
                      pauseOnHover={true}
                      speed={40}
                    >
                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg1}
                            alt="Website Template 1"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>

                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg2}
                            alt="Website Template 2"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>

                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg3}
                            alt="Website Template 3"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>

                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg4}
                            alt="Website Template 4"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>
                    </MarqueeContent>
                  </Marquee>
                </div>

                {/* Second row with reverse direction */}
                <div className="overflow-hidden rounded-2xl bg-gray-50 p-4 mt-4">
                  <Marquee>
                    <MarqueeFade side="left" />
                    <MarqueeFade side="right" />
                    <MarqueeContent
                      autoFill={true}
                      pauseOnHover={true}
                      speed={35}
                      direction="right"
                    >
                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg4}
                            alt="Website Template 4"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>

                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg1}
                            alt="Website Template 1"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>

                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg3}
                            alt="Website Template 3"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>

                      <MarqueeItem className="mx-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-64 h-48">
                          <Image
                            src={marqueImg2}
                            alt="Website Template 2"
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </MarqueeItem>
                    </MarqueeContent>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <div className="overflow-hidden">
        {/* First Marquee - Blue Background */}
        <div className="bg-blue-600 text-white py-4">
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
        <div className="bg-white text-blue-600 py-4">
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
      <section className="relative overflow-visible">
        {/* Background with Gradient - Full screen width */}
        <div
          className="relative min-h-[100vh] flex justify-center"
          style={{
            width: "100vw",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, #2563eb, #1d4ed8, #1e40af, #1e3a8a)",
          }}
        >
          {/* Centered Text Content */}
          <div className="relative z-10 max-w-6xl mx-auto pt-36 text-center px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Tentang Kami
            </h2>

            <p className="text-white text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
              Buka potensi penuh bisnis Anda di dunia digital dengan platform
              kami, yang memadukan kemudahan membuat website penjual dengan
              penguasaan strategi pemasaran online yang efektif.
            </p>
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
        </div>

        {/* Images - Overlapping below the background */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-96">
          <div className="flex justify-between items-center gap-8">
            {/* First Image - Cropped to 60% height */}
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-lg h-80">
                <Image
                  src={hifiLandingPage}
                  alt="HIFI Landing Page"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Second Image - Full height */}
            <div className="flex-1">
              <div className="h-52">
                <Image
                  src={hifiEditTemplate}
                  alt="HIFI Edit Template"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Third Image - Cropped to 60% height */}
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-lg h-80">
                <Image
                  src={hifiEducationCenter}
                  alt="HIFI Education Center"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Fourth Image - Full height */}
            <div className="flex-1">
              <div className="h-52">
                <Image
                  src={hifiProfile}
                  alt="HIFI Profile"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Tentang Kami Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading - Full Width */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Solusi Digital untuk Pertumbuhan UMKM Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left Column - Two column text at top */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <p className="text-gray-600 text-base leading-relaxed">
                  Memasuki pasar digital adalah tantangan. Kami mengerti.
                  Kesulitan dalam pemasaran online, membuat konten promosi yang
                  menarik, dan mengelola website secara optimal adalah kendala
                  nyata yang dihadapi banyak UMKM di Indonesia.
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  Progres.in adalah jawaban atas tantangan tersebut. Kami
                  menyediakan platform terintegrasi yang dirancang khusus untuk
                  menyederhanakan proses digitalisasi bisnis Anda.
                </p>
              </div>
            </div>

            {/* Bottom Row - Image on left, Text on right */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <div className="max-w-lg">
                  <div className="bg-gray-100 rounded-2xl p-8">
                    <Image
                      src="/api/placeholder/400/320"
                      alt="Woman Working"
                      width={500}
                      height={320}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                    Kami Mempercepat Digitalisasi UMKM Indonesia
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed">
                    Kami percaya pada kekuatan transformatif digitalisasi untuk
                    Usaha Mikro, Kecil, dan Menengah (UMKM) yang menjadi tulang
                    punggung ekonomi Indonesia. Misi kami adalah mengakselerasi
                    pertumbuhan ekonomi yang adil dan berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
