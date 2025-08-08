"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import CourseDetailSkeleton from "@/components/course-detail-skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock, 
  Play, 
  Share2, 
  Bookmark,
  ChevronRight 
} from "lucide-react";
import { useCourses } from "@/hooks/use-course";

export default function CourseDetail() {
  const params = useParams();
  const router = useRouter();
  const { courses, loading } = useCourses();
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (!loading && courses.length > 0) {
      const foundCourse = courses.find(c => c.slug === params.slug);
      if (foundCourse) {
        setCourse(foundCourse);
        
        // Get related courses from the same category
        const related = courses
          .filter(c => c.id !== foundCourse.id && c.category === foundCourse.category)
          .slice(0, 4);
        setRelatedCourses(related);
      }
      setPageLoading(false);
    }
  }, [loading, courses, params.slug]);

  const handleBack = () => {
    router.back();
  };

  const handleCourseClick = (selectedCourse) => {
    router.push(`/education-center/${selectedCourse.slug}`);
  };

  if (pageLoading || loading) {
    return <CourseDetailSkeleton />;
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Kursus Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">Kursus yang Anda cari tidak tersedia.</p>
          <Button onClick={handleBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Pusat Edukasi", href: "/education-center" },
    { label: course.category },
    { label: course.title }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="my-container mx-auto px-4 py-8">
          {/* Breadcrumb */}
         <div className="hidden lg:block">
			 <Breadcrumb items={breadcrumbItems} />
		 </div>

          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardContent className="p-6">
                  {/* Course Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {course.title}
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Video or Image Content */}
                  {course.type === "Video" && course.videoUrl ? (
                    <div className="relative w-full h-0 pb-[56.25%] mb-6 rounded-lg overflow-hidden">
                      <iframe
                        src={course.videoUrl}
                        title={course.title}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative mb-6">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Course Content */}
                  <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      {course.type === "Video" ? "Tentang Video Ini" : "Isi Artikel"}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {course.content}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {course.fullContent}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Share2 className="w-4 h-4 mr-2" />
                      Bagikan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Related Courses */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Materi Terkait
                  </h3>
                  
                  <div className="space-y-6">
                    {relatedCourses.map((relatedCourse) => (
                      <div 
                        key={relatedCourse.id}
                        className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                      >
                        <div 
                          className="cursor-pointer group"
                          onClick={() => handleCourseClick(relatedCourse)}
                        >
                          <div className="relative mb-3">
                            <Image
                              src={relatedCourse.image || "/placeholder.svg"}
                              alt={relatedCourse.title}
                              width={300}
                              height={160}
                              className="w-full h-20 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                            />
                            {relatedCourse.type === "Video" && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-blue-600/80 rounded-full p-2">
                                  <Play className="w-3 h-3 text-white fill-white" />
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                              <Clock className="w-3 h-3" />
                              <span>{relatedCourse.duration}</span>
                            </div>
                          </div>
                          
                          <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {relatedCourse.title}
                          </h4>
                          
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedCourse.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {relatedCourses.length === 0 && (
                    <p className="text-gray-500 text-center py-8">
                      Tidak ada materi terkait tersedia
                    </p>
                  )}

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link href="/education-center">
                      <Button variant="outline" className="w-full">
                        Lihat Semua Materi
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
