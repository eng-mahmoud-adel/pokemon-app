import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonList } from "../getPokemonList";

export const usePokemonList = ({
  limit = 20,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}) => {
  return useSuspenseQuery({
    queryKey: ["pokemon-list", { limit, offset }],
    queryFn: () => getPokemonList({ limit, offset }),
  });
};
