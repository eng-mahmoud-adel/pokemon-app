import { POKEMON_SPRITE_URL } from "@/lib/constants";
import BaseCard from "./BaseCard";

interface PokemonCardProps {
  pokemonName: string;
  pokemonId: number;
}

const PokemonCard = ({ pokemonName, pokemonId }: PokemonCardProps) => {
  return (
    <BaseCard className="flex flex-col gap-2 items-center">
      <div className="relative w-full h-48 bg-gray-100 rounded-md">
        <img
          src={`${POKEMON_SPRITE_URL}/${pokemonId}.png`}
          alt=""
          className="absolute size-full object-contain"
        />
      </div>
      <h5 className="text-lg font-bold capitalize">{pokemonName}</h5>
      <p className="text-sm text-gray-500">#{pokemonId}</p>
    </BaseCard>
  );
};

export default PokemonCard;
