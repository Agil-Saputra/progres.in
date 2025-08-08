import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function CourseDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center space-x-2 mb-6">
          <Skeleton className="w-4 h-4" />
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-4 h-4" />
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-4 h-4" />
          <Skeleton className="w-32 h-4" />
        </div>

        {/* Back Button Skeleton */}
        <Skeleton className="w-32 h-10 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                {/* Course Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="w-16 h-6 rounded-full" />
                  <Skeleton className="w-20 h-4" />
                </div>
                
                <Skeleton className="w-full h-8 mb-4" />
                <Skeleton className="w-3/4 h-8 mb-6" />
                
                <div className="space-y-2 mb-6">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-2/3 h-4" />
                </div>

                {/* Video/Content Area */}
                <Skeleton className="w-full h-64 mb-6" />
                
                {/* Content Text */}
                <div className="space-y-3">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-3/4 h-4" />
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-5/6 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="w-32 h-6 mb-4" />
                
                <div className="space-y-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <Skeleton className="w-full h-20 mb-3" />
                      <div className="flex items-center gap-2 mb-2">
                        <Skeleton className="w-12 h-5 rounded-full" />
                        <Skeleton className="w-16 h-4" />
                      </div>
                      <Skeleton className="w-full h-4 mb-2" />
                      <Skeleton className="w-3/4 h-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
