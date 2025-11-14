import { Skeleton } from "@/components/ui/skeleton";
import BaseCard from "./BaseCard";

export function SkeletonCard() {
  return (
    <BaseCard className="space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </BaseCard>
  );
}
