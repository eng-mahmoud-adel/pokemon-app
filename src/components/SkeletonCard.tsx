import { Skeleton } from "@/components/ui/skeleton";
import BaseCard from "./BaseCard";
import { cn } from "@/lib/utils";

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <BaseCard className={cn("space-y-3 p-3 sm:p-4", className)}>
      <Skeleton className="h-32 sm:h-40 md:h-48 w-full rounded-xl" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-2/3 sm:w-3/4" />
        <Skeleton className="h-4 w-1/2 sm:w-2/3" />
      </div>
    </BaseCard>
  );
}
