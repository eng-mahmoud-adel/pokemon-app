import { Link } from "react-router-dom";
import { usePokemonList } from "@/api/pokemon/hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import BasePagination from "./BasePagination";
import { usePagination } from "@/hooks/usePagination";
import { PAGINATION_LIMIT, PAGINATION_OFFSET } from "@/lib/constants";
import { useUrlSearchParams } from "@/hooks/useUrlSearchParams";

const PokemonList = () => {
  const { searchParams, updateParams } = useUrlSearchParams();

  const limit = Number(searchParams.get("limit") ?? PAGINATION_LIMIT);
  const offset = Number(searchParams.get("offset") ?? PAGINATION_OFFSET);

  const currentPage = Math.floor(offset / limit) + 1;

  const { data } = usePokemonList({ limit, offset });

  const { pages, totalPages } = usePagination({
    total: data.count,
    limit: PAGINATION_LIMIT,
    currentPage,
    siblingCount: 1,
  });

  const changePage = (newPage: number) => {
    updateParams({
      limit,
      offset: (newPage - 1) * limit,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-4">
        {data.results.map((pokemon) => {
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

      <BasePagination
        pages={pages}
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={changePage}
        limit={limit}
      />
    </div>
  );
};

export default PokemonList;
