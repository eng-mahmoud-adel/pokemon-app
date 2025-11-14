import { fetcher } from "../fetcher";
import type { PokemonListResponse } from "./types";

export const getPokemonList = async (limit: number, offset: number) => {
  return fetcher<PokemonListResponse>(`?limit=${limit}&offset=${offset}`);
};
