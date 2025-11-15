import { useParams } from "react-router-dom";
import { Zap, Ruler, Weight } from "lucide-react";

import BaseCard from "./BaseCard";
import { usePokemonDetails } from "@/api/pokemon/hooks/usePokemonDetails";
import { Progress } from "@/components/ui/progress";

const PokemonDetailsCard = () => {
  const { id } = useParams();
  const { data } = usePokemonDetails(id as string);

  return (
    <BaseCard className="max-w-3xl mx-auto p-0 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-fuchsia-500 h-24 text-center py-5">
        <h1 className="text-3xl font-bold capitalize text-white flex items-center justify-center gap-2">
          <Zap className="size-6" />
          {data.name}
        </h1>
        <p className="text-sm text-fuchsia-100 font-medium">#{data.id}</p>
      </div>

      <div className="flex gap-6 p-6">
        <div className="flex-1 flex flex-col gap-5">
          {/* Pokemon Image */}
          <div className="size-60 rounded-full bg-gray-100 relative mx-auto">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt="pokemon_img"
              className="absolute inset-0 object-contain p-2"
            />
          </div>

          {/* Pokemon Type */}
          <div className="text-center">
            <span
              key={data.types[0].type.name}
              className="px-4 py-1 rounded-full text-sm font-medium w-fit capitalize bg-red-500 text-white"
            >
              {data.types[0].type.name}
            </span>
          </div>

          {/* Pokemon Height & Weight */}
          <div className="flex justify-center items-center gap-2 text-center">
            <div className="bg-gray-100 p-2 rounded-md px-8">
              <h6 className="text-sm font-medium flex items-center gap-2">
                <Ruler className="size-4" />
                Height
              </h6>
              <p className="text-xl font-bold">{data.height / 10} m</p>
            </div>
            <div className="bg-gray-100 p-2 rounded-md px-8">
              <h6 className="text-sm font-medium flex items-center gap-2">
                <Weight className="size-4" />
                Weight
              </h6>
              <p className="text-xl font-bold">{data.weight / 10} kg</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {/* Stats */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Base Stats</h4>
            <div className="flex flex-col gap-2">
              {data.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <div className="flex items-center justify-between text-sm font-medium mb-1">
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
            <h4 className="text-xl font-semibold mb-2">Abilities</h4>
            <div className="flex flex-col gap-2">
              {data.abilities.map((ability) => {
                const isHidden = ability.is_hidden;
                return (
                  <>
                    <span
                      key={ability.ability.name}
                      className={`
                      px-3 py-1 rounded-full border text-sm font-medium w-fit
                      ${isHidden ? "bg-gray-100" : "bg-white border-gray-300"}
                    `}
                    >
                      {ability.ability.name}
                      <span className="text-gray-500 text-sm">
                        {isHidden && " (Hidden)"}
                      </span>
                    </span>
                  </>
                );
              })}
            </div>
          </div>

          {/* Base Experience */}
          <div>
            <h4 className="text-xl font-semibold">Base Experience</h4>
            <p className="text-fuchsia-600 font-bold text-2xl">
              {data.base_experience} XP
            </p>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default PokemonDetailsCard;
