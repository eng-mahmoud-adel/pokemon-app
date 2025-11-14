import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../getPokemonList";

export const usePokemonList = ({
  limit = 10,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}) => {
  return useQuery({
    queryKey: ["pokemon-list", { limit, offset }],
    queryFn: () => getPokemonList({ limit, offset }),
  });
};
