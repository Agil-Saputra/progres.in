import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Play, FileText } from 'lucide-react'


export default function CourseCard({ course, onCourseClick }) {
  const handleClick = () => {
    if (onCourseClick) {
      onCourseClick(course);
    }
  };

  const ButtonIcon = course.type === "Video" ? Play : FileText;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        {course.type === "Video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-600 rounded-full p-3 shadow-lg">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge 
            variant={course.type === "Video" ? "destructive" : "secondary"}
            className={`text-xs font-medium ${
              course.type === "Video" 
                ? "bg-red-100 text-red-700 hover:bg-red-100" 
                : "bg-green-100 text-green-700 hover:bg-green-100"
            }`}
          >
            {course.type}
          </Badge>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Clock className="w-3 h-3" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {course.description}
        </p>
        
        <Button 
          onClick={handleClick}
          variant={course.type === "Video" ? "default" : "outline"}
          className={`w-full text-sm font-medium ${
            course.type === "Video"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "border-blue-600 text-blue-600 hover:bg-blue-50"
          }`}
        >
          <ButtonIcon className="w-4 h-4 mr-2" />
          {course.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
