import { useInfinitePokemonList } from "@/api/pokemon/hooks/useInfinitePokemonList";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const PokemonListInfinite = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePokemonList();

  const allPokemons = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-4">
        {allPokemons.map((pokemon) => {
          const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
          return (
            <Link to={`/pokemon/${pokemonId}`} key={pokemon.name}>
              <PokemonCard
                pokemonName={pokemon.name}
                pokemonId={Number(pokemonId)}
              />
            </Link>
          );
        })}
      </div>

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="w-fit mx-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isFetchingNextPage ? (
            <span className="flex items-center gap-2">
              <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Loading more Pokemon...
            </span>
          ) : (
            "Load More"
          )}
        </Button>
      )}
    </div>
  );
};

export default PokemonListInfinite;
