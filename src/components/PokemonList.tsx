import { useState } from "react";
import { usePokemonList } from "@/api/pokemon/hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import BasePagination from "./BasePagination";
import { usePagination } from "@/hooks/usePagination";
import { PAGINATION_LIMIT } from "@/lib/constants";

const PokemonList = () => {
  const [page, setPage] = useState(1);

  const offset = (page - 1) * PAGINATION_LIMIT;

  const { data } = usePokemonList({ limit: PAGINATION_LIMIT, offset });

  const { pages, totalPages } = usePagination({
    total: data.count,
    limit: PAGINATION_LIMIT,
    currentPage: page,
    siblingCount: 1,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-4">
        {data.results.map((pokemon) => {
          const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
          return (
            <a href={pokemon.url} key={pokemon.name}>
              <PokemonCard
                pokemonName={pokemon.name}
                pokemonId={Number(pokemonId)}
              />
            </a>
          );
        })}
      </div>

      <BasePagination
        pages={pages}
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </div>
  );
};

export default PokemonList;
