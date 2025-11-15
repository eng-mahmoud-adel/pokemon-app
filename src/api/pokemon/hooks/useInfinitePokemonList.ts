import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../getPokemonList";
import { PAGINATION_LIMIT } from "@/lib/constants";

export const useInfinitePokemonList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["pokemon-infinite"],
    queryFn: ({ pageParam = 0 }) =>
      getPokemonList({
        limit: PAGINATION_LIMIT,
        offset: pageParam,
      }),

    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.length * PAGINATION_LIMIT;

      if (loaded >= lastPage.count) return null;

      return loaded;
    },

    initialPageParam: 0,
  });
};
