import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Play, FileText } from 'lucide-react'

export default function CourseCard({ course, onCourseClick }) {
  const router = useRouter();

  const handleClick = () => {
    if (onCourseClick) {
      onCourseClick(course);
    }
    // Navigate to course detail page
    router.push(`/education-center/${course.slug}`);
  };

  const ButtonIcon = course.type === "Video" ? Play : FileText;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100 py-0">
      <div className="relative cursor-pointer" onClick={handleClick}>
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={300}
          height={400}
          className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
        />
        {course.type === "Video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-blue-600 rounded-full p-4 shadow-lg transform scale-90 hover:scale-100 transition-transform duration-200">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          {course.category && (
            <>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 text-sm">{course.category}</span>
            </>
          )}
        </div>
        
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 leading-tight text-lg hover:text-blue-600 transition-colors cursor-pointer" onClick={handleClick}>
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed h-16">
          {course.description}
        </p>
        
        <Button 
          onClick={handleClick}
          variant={course.type === "Video" ? "default" : "outline"}
          className={`w-full text-sm font-semibold py-3 transition-all duration-200 ${
            course.type === "Video"
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
              : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
        >
          <ButtonIcon className="w-4 h-4 mr-2" />
          {course.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
