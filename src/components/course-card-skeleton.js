import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CourseCardSkeleton() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative">
        <Skeleton className="w-full h-72" />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Skeleton className="w-16 h-5 rounded-full" />
          <Skeleton className="w-20 h-4" />
        </div>
        
        <Skeleton className="w-full h-5 mb-2" />
        <Skeleton className="w-3/4 h-5 mb-4" />
        
        <div className="space-y-2 mb-4">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-1/2 h-4" />
        </div>
        
        <Skeleton className="w-full h-10 rounded-md" />
      </CardContent>
    </Card>
  );
}
