import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Play, FileText } from 'lucide-react'
import { motion } from "motion/react"

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
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 py-0 h-full">
        <motion.div 
          className="relative cursor-pointer" 
          onClick={handleClick}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={300}
              height={400}
              className="w-full h-72 object-cover"
            />
          </motion.div>
          {course.type === "Video" && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-blue-600 rounded-full p-4 shadow-lg"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Play className="w-6 h-6 text-white fill-white" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        
        <CardContent className="p-6 flex flex-col h-full">
          <motion.div 
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Clock className="w-4 h-4" />
              </motion.div>
              <span>{course.duration}</span>
            </div>
            {course.category && (
              <>
                <span className="text-gray-300">•</span>
                <motion.span 
                  className="text-gray-500 text-sm"
                  whileHover={{ color: "#3b82f6" }}
                >
                  {course.category}
                </motion.span>
              </>
            )}
          </motion.div>
          
          <motion.h3 
            className="font-bold text-gray-900 mb-3 line-clamp-2 leading-tight text-lg cursor-pointer" 
            onClick={handleClick}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              color: "#3b82f6",
              x: 5
            }}
          >
            {course.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed h-16 flex-grow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {course.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={handleClick}
              variant={course.type === "Video" ? "default" : "outline"}
              className={`w-full text-sm font-semibold py-3 transition-all duration-200 ${
                course.type === "Video"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                  : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <ButtonIcon className="w-4 h-4 mr-2" />
              </motion.div>
              {course.buttonText}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
