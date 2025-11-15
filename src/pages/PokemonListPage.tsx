import { Suspense, useEffect } from "react";
import PokemonList from "@/components/PokemonList";
import { ErrorBoundary } from "react-error-boundary";
import { SkeletonCard } from "@/components/SkeletonCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PAGINATION_LIMIT, PAGINATION_OFFSET } from "@/lib/constants";

const PokemonListPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const limit = params.get("limit");
    const offset = params.get("offset");

    if (!limit || !offset) {
      navigate(
        `/pokemon?limit=${PAGINATION_LIMIT}&offset=${PAGINATION_OFFSET}`,
        {
          replace: true,
        }
      );
    }
  }, [params, navigate]);

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
