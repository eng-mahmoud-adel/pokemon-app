import { usePokemonList } from "@/api/pokemon/hooks/usePokemonList";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { data } = usePokemonList({ limit: 20, offset: 0 });

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.results.map((pokemon, index) => (
        <a href={pokemon.url} key={pokemon.name}>
          <PokemonCard pokemonName={pokemon.name} pokemonId={index + 1} />
        </a>
      ))}
    </div>
  );
};

export default PokemonList;
