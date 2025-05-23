import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Skeleton className="aspect-square w-full rounded-lg" />

      <div>
        <Skeleton className="h-10 w-3/4 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-24" />
        </div>

        <div className="flex items-center gap-3 mb-6">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-6 w-24" />
        </div>

        <Separator className="my-6" />

        <Skeleton className="h-24 w-full mb-6" />

        <div className="space-y-6">
          <div className="flex items-center">
            <Skeleton className="h-6 w-16 mr-4" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-12" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>

          <div className="flex gap-4">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 w-12" />
            <Skeleton className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  )
}
