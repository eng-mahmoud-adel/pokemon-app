import { useParams } from "react-router-dom";
import { Zap, Ruler, Weight } from "lucide-react";

import { formatId } from "@/lib/formatId";

import BaseCard from "./BaseCard";
import { usePokemonDetails } from "@/api/pokemon/hooks/usePokemonDetails";
import { Progress } from "@/components/ui/progress";

const PokemonDetailsCard = () => {
  const { id } = useParams();
  const { data } = usePokemonDetails(id as string);

  return (
    <BaseCard className="max-w-3xl mx-auto p-0 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-fuchsia-500 h-24 sm:h-28 text-center py-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-white flex items-center justify-center gap-2">
          <Zap className="w-6 h-6 sm:w-6 sm:h-6" />
          {data.name}
        </h1>
        <p className="text-sm sm:text-base text-fuchsia-100 font-medium">
          #{formatId(data.id)}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6">
        <div className="flex-1 flex flex-col items-center gap-5">
          {/* Pokemon Image */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gray-100 relative">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
              className="absolute inset-0 object-contain p-2"
            />
          </div>

          {/* Pokemon Type */}
          <div className="text-center">
            {data.types.map((type) => (
              <span
                key={type.type.name}
                className="inline-block px-4 py-1 rounded-full text-sm sm:text-base font-medium w-fit capitalize bg-red-500 text-white mr-2"
              >
                {type.type.name}
              </span>
            ))}
          </div>

          {/* Height & Weight */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-center">
            <div className="bg-gray-100 p-2 rounded-md px-6 sm:px-8 mb-2 sm:mb-0">
              <h6 className="text-sm sm:text-base font-medium flex items-center gap-2 justify-center">
                <Ruler className="w-4 h-4" />
                Height
              </h6>
              <p className="text-lg sm:text-xl font-bold">
                {data.height / 10} m
              </p>
            </div>
            <div className="bg-gray-100 p-2 rounded-md px-6 sm:px-8">
              <h6 className="text-sm sm:text-base font-medium flex items-center gap-2 justify-center">
                <Weight className="w-4 h-4" />
                Weight
              </h6>
              <p className="text-lg sm:text-xl font-bold">
                {data.weight / 10} kg
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Base Stats
            </h4>
            <div className="flex flex-col gap-2">
              {data.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <div className="flex items-center justify-between text-sm sm:text-base font-medium mb-1">
                    <p className="capitalize text-gray-700">{stat.stat.name}</p>
                    <p className="text-gray-900">{stat.base_stat}</p>
                  </div>
                  <Progress value={stat.base_stat} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Abilities */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Abilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.abilities.map((ability) => {
                const isHidden = ability.is_hidden;
                return (
                  <span
                    key={ability.ability.name}
                    className={`px-3 py-1 rounded-full border text-sm sm:text-base font-medium ${
                      isHidden
                        ? "bg-gray-100 border-gray-200 text-gray-500"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {ability.ability.name}
                    {isHidden && (
                      <span className="text-gray-500 text-xs"> (Hidden)</span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Base Experience */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Base Experience
            </h4>
            <p className="text-fuchsia-600 font-bold text-xl sm:text-2xl md:text-3xl">
              {data.base_experience} XP
            </p>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default PokemonDetailsCard;
