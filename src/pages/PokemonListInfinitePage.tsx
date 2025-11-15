import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SkeletonCard } from "@/components/SkeletonCard";
import PokemonListInfinite from "@/components/PokemonListInfinite";
import { PAGINATION_LIMIT } from "@/lib/constants";

const PokemonListInfinitePage = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
    </>
  );
};

export default PokemonListInfinitePage;
