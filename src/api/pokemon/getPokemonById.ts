import { fetcher } from "../fetcher";
import type { PokemonDetails } from "./types";

export const getPokemonById = async (id: string) => {
  return fetcher<PokemonDetails>(`${id}`);
};
