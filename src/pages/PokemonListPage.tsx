import PokemonList from "@/components/PokemonList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const PokemonListPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <PokemonList />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default PokemonListPage;
