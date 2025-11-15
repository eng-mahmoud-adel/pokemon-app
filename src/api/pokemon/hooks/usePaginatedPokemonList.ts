import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonList } from "../getPokemonList";

export const usePaginatedPokemonList = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  return useSuspenseQuery({
    queryKey: ["pokemon-list", { limit, offset }],
    queryFn: () => getPokemonList({ limit, offset }),
  });
};
