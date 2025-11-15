import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonById } from "../getPokemonById";

export const usePokemonDetails = (id: string) => {
  return useSuspenseQuery({
    queryKey: ["pokemon-details", id],
    queryFn: () => getPokemonById(id),
  });
};
