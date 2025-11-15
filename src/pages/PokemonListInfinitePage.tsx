import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SkeletonCard } from "@/components/SkeletonCard";
import PokemonListInfinite from "@/components/PokemonListInfinite";
import { PAGINATION_LIMIT } from "@/lib/constants";

const PokemonListInfinitePage = () => {
  return (
    <div className="bg-indigo-100 p-6">
      <Suspense
        fallback={
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: PAGINATION_LIMIT }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        }
      >
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <PokemonListInfinite />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default PokemonListInfinitePage;
