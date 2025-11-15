import { POKEMON_SPRITE_URL } from "@/lib/constants";
import { formatId } from "@/lib/formatId";
import BaseCard from "./BaseCard";

interface PokemonCardProps {
  pokemonName: string;
  pokemonId: number;
}

const PokemonCard = ({ pokemonName, pokemonId }: PokemonCardProps) => {
  return (
    <BaseCard className="flex flex-col gap-2 items-center p-3 sm:p-4">
      <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-100 rounded-md">
        <img
          src={`${POKEMON_SPRITE_URL}/${pokemonId}.png`}
          alt={pokemonName}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <h5 className="text-base sm:text-lg md:text-xl font-bold capitalize text-center">
        {pokemonName}
      </h5>
      <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center">
        #{formatId(pokemonId)}
      </p>
    </BaseCard>
  );
};

export default PokemonCard;
