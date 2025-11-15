import { Skeleton } from "@/components/ui/skeleton";
import BaseCard from "./BaseCard";
import { cn } from "@/lib/utils";

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <BaseCard className={cn("space-y-3", className)}>
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </BaseCard>
  );
}
