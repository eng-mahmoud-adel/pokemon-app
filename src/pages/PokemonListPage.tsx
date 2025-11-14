import PokemonList from "@/components/PokemonList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SkeletonCard } from "@/components/SkeletonCard";

const PokemonListPage = () => {
  return (
    <div className="bg-indigo-100 p-6">
      <Suspense
        fallback={
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 20 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        }
      >
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <PokemonList />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default PokemonListPage;
