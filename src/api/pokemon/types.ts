export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  stats: Stat[];
}

interface Ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}
