import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className=" rounded-xl shadow-md overflow-hidden">
          {/* Header Skeleton */}
          <div className="p-3 sm:p-4 flex items-center space-x-3">
            <Skeleton className="rounded-full w-10 h-10 sm:w-12 sm:h-12" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-3 w-[150px]" />
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="px-3 sm:px-4 pb-2 space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>

          {/* Image Skeleton */}
          <div className="mt-2">
            <Skeleton className="w-full h-48 sm:h-64 md:h-96" />
          </div>

          {/* Actions Skeleton */}
          <div className="px-2 sm:px-4 py-3 flex items-center justify-between border-t dark:border-gray-700">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
