import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../getPokemonById";

export const usePokemonDetails = (id: string) => {
  return useQuery({
    queryKey: ["pokemon-details", id],
    queryFn: () => getPokemonById(id),
  });
};
