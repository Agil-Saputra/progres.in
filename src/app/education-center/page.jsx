"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Search, BookOpen, Flag, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Grid from "@/assets/grid.webp";
import CourseCard from "@/components/course-card";
import { useCourses } from "@/hooks/use-course";

export default function EducationCenter() {
  const { courses, loading, error } = useCourses();

  const handleCourseClick = (course) => {
    // Handle course click - could navigate to course detail page
    console.log("Course clicked:", course.slug);
    // In a real app, you might use router.push(`/courses/${course.slug}`)
  };
  return (
    <>
      <div className="mt-32">
        <Image
          src={Grid}
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          alt="Background Grid"
        />
        <Navbar />
        <div className="min-h-screen relative overflow-hidden max-w-full xl:max-w-[80%] mx-auto">
          {/* Top Left Card - 5000+ */}
          <Card className="absolute top-16 left-16 w-40 h-24 shadow-lg transform -rotate-6 bg-white max-lg:hidden">
            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
              <div className="text-2xl font-bold text-gray-900 mb-1">5000+</div>
              <div className="text-xs text-gray-600 text-center leading-tight">
                Materi Pembelajaran
              </div>
              <div className="mt-1">
                <BookOpen className="w-4 h-4 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          {/* Top Right Card - 10,000+ */}
          <Card className="absolute top-20 right-16 w-40 h-24 shadow-lg transform rotate-3 bg-white max-lg:hidden">
            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
              <div className="w-6 h-6 bg-blue-500 rounded mb-1"></div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                10,000+
              </div>
              <div className="text-xs text-gray-600 text-center leading-tight">
                Pengusaha UMKM
              </div>
            </CardContent>
          </Card>

          {/* Bottom Left Card - 6500+ */}
          <Card className="absolute top-72 left-8 w-40 h-24 shadow-lg transform -rotate-3 bg-white max-lg:hidden">
            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
              <div className="text-2xl font-bold text-gray-900 mb-1">6500+</div>
              <div className="text-xs text-gray-600 text-center leading-tight">
                Kisah Sukses UMKM
              </div>
              <div className="mt-1">
                <Flag className="w-4 h-4 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          {/* Bottom Right Card - 10 juta+ */}
          <Card className="absolute top-64 right-8 w-40 h-24 shadow-lg transform rotate-2 bg-white max-lg:hidden">
            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                10 juta+
              </div>
              <div className="text-xs text-gray-600 text-center leading-tight">
                Pelanggan Baru Didapatkan
              </div>
              <div className="mt-1">
                <TrendingUp className="w-4 h-4 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="flex flex-col items-center pt-40 lg:pt-48 min-h-screen px-4 py-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-blue-600 leading-tight">
                Pusat Pembelajaran UMKM
                <br />
                Terbaik di Indonesia
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Pelajari semua aspek bisnis dari nol hingga mahir. Materi
                lengkap, interaktif, dan disesuaikan dengan kebutuhan UMKM
                Indonesia.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mt-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Cari kursus atau artikel..."
                    className="pl-12 pr-4 py-6 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm text-xl"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button className="rounded-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                  Semua
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white font-medium"
                >
                  Pemasaran
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white font-medium"
                >
                  Keuangan
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white font-medium"
                >
                  Digital
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white font-medium"
                >
                  Produksi
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white font-medium"
                >
                  Ekspor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
