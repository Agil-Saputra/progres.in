"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Search, BookOpen, Flag, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Grid from "@/assets/grid.webp";
import CourseCard from "@/components/course-card";
import CourseCardSkeleton from "@/components/course-card-skeleton";
import { useCourses } from "@/hooks/use-course";
import { motion } from "motion/react";

export default function EducationCenter() {
  const { courses, loading } = useCourses();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [displayedCount, setDisplayedCount] = useState(6); // Initially show 6 courses
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const categories = ["Semua", "Pemasaran", "Keuangan", "Digital", "Produksi", "Ekspor"];

  const filteredCourses = useMemo(() => {
    if (!courses) return [];

    return courses.filter((course) => {
      const matchesSearch = !searchTerm || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "Semua" || 
        course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [courses, searchTerm, selectedCategory]);

  const displayedCourses = filteredCourses.slice(0, displayedCount);
  const hasMoreCourses = displayedCount < filteredCourses.length;

  const handleCourseClick = (course) => {
    console.log("Course clicked:", course.slug);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayedCount(6); 
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setDisplayedCount(6); 
  };

  const handleShowMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 6); 
      setIsLoadingMore(false);
    }, 500);
  };

  const handleShowLess = () => {
    setDisplayedCount(6);
    document.getElementById('courses-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <>
      <div className="lg:mt-32 pt-16">
        <Image
          src={Grid}
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          alt="Background Grid"
        />
        <Navbar />
        <div className="min-h-[80vh] relative overflow-hidden max-w-full xl:max-w-[80%] mx-auto">
          {/* Top Left Card - 5000+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          {/* Top Right Card - 10,000+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          {/* Bottom Left Card - 6500+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          {/* Bottom Right Card - 10 juta+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col items-center pt-40 lg:pt-48 px-4 py-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Main Heading */}
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-blue-600 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Pusat Pembelajaran UMKM
                <br />
                Terbaik di Indonesia
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Pelajari semua aspek bisnis dari nol hingga mahir. Materi
                lengkap, interaktif, dan disesuaikan dengan kebutuhan UMKM
                Indonesia.
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                className="relative max-w-2xl mx-auto mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Cari kursus atau artikel..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-12 pr-12 py-6 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm text-xl"
                  />
                  {searchTerm && (
                    <motion.button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Clear search"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </motion.div>

              {/* Category Filters */}
              <motion.div 
                className="flex flex-wrap justify-center gap-1 lg:gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleCategoryChange(category)}
                      className={`rounded-full px-6 py-2 font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                      }`}
                      variant={selectedCategory === category ? "default" : "outline"}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section id="courses-section" className="bg-white pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">   
            {!loading && (searchTerm || selectedCategory !== "Semua") && (
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {filteredCourses.length > 0 ? (
                    <>
                      Menampilkan <span className="font-semibold text-blue-600">{Math.min(displayedCount, filteredCourses.length)}</span> dari <span className="font-semibold text-blue-600">{filteredCourses.length}</span> hasil 
                      {searchTerm && (
                        <> untuk "<span className="font-semibold text-blue-600">{searchTerm}</span>"</>
                      )}
                      {selectedCategory !== "Semua" && (
                        <> dalam kategori <span className="font-semibold text-blue-600">{selectedCategory}</span></>
                      )}
                    </>
                  ) : (
                    <>
                      Tidak ada hasil ditemukan
                      {searchTerm && (
                        <> untuk "<span className="font-semibold">{searchTerm}</span>"</>
                      )}
                      {selectedCategory !== "Semua" && (
                        <> dalam kategori <span className="font-semibold">{selectedCategory}</span></>
                      )}
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Show total count when no filters applied */}
            {!loading && !searchTerm && selectedCategory === "Semua" && courses.length > 0 && (
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Menampilkan <span className="font-semibold text-blue-600">{Math.min(displayedCount, courses.length)}</span> dari <span className="font-semibold text-blue-600">{courses.length}</span> materi pembelajaran
                </p>
              </div>
            )}
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {loading ? (
              // Show skeleton loading while data is being fetched
              [...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CourseCardSkeleton />
                </motion.div>
              ))
            ) : (
              // Show filtered course cards when data is loaded
              displayedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CourseCard
                    course={course}
                    onCourseClick={handleCourseClick}
                  />
                </motion.div>
              ))
            )}

            {/* Show skeleton cards when loading more */}
            {isLoadingMore && (
              [...Array(3)].map((_, index) => (
                <motion.div
                  key={`loading-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CourseCardSkeleton />
                </motion.div>
              ))
            )}
          </motion.div>

          {/* Show More / Show Less Buttons */}
          {!loading && filteredCourses.length > 0 && (
            <div className="text-center mt-12">
              {hasMoreCourses ? (
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleShowMore}
                      disabled={isLoadingMore}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      {isLoadingMore ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Memuat...
                        </>
                      ) : (
                        <>
                          Tampilkan Lebih Banyak
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </Button>
                  </motion.div>
                  <p className="text-sm text-gray-500">
                    {filteredCourses.length - displayedCount} materi lainnya tersedia
                  </p>
                </div>
              ) : displayedCount > 6 ? (
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleShowLess}
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 px-12 py-3 rounded-full font-medium transition-all duration-200"
                    >
                      Tampilkan Lebih Sedikit
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </Button>
                  </motion.div>
                  <p className="text-sm text-gray-500">
                    Kembali ke 6 materi pertama
                  </p>
                </div>
              ) : null}
            </div>
          )}

          {!loading && filteredCourses.length === 0 && courses.length > 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tidak ada hasil yang ditemukan
                </h3>
                <p className="text-gray-500 mb-6">
                  Coba ubah kata kunci pencarian atau pilih kategori yang berbeda.
                </p>
                <div className="space-y-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => setSearchTerm("")}
                      variant="outline"
                      className="mr-2"
                    >
                      Hapus Pencarian
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => setSelectedCategory("Semua")}
                      variant="outline"
                    >
                      Lihat Semua Kategori
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {!loading && courses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada kursus tersedia saat ini.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
