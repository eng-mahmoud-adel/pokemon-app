import { Suspense, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import PokemonListPaginiated from "@/components/PokemonListPaginiated";
import { ErrorBoundary } from "react-error-boundary";
import { SkeletonCard } from "@/components/SkeletonCard";
import { PAGINATION_LIMIT, PAGINATION_OFFSET } from "@/lib/constants";

const PokemonListPaginiatedPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const limit = params.get("limit");
    const offset = params.get("offset");

    if (!limit || !offset) {
      navigate(
        `/pokemon/pagination?limit=${PAGINATION_LIMIT}&offset=${PAGINATION_OFFSET}`,
        {
          replace: true,
        }
      );
    }
  }, [params, navigate]);

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
          <PokemonListPaginiated />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default PokemonListPaginiatedPage;
