import BaseCard from "@/components/BaseCard";
import { usePokemonList } from "@/api/pokemon/hooks/usePokemonList";

const PokemonList = () => {
  const { data } = usePokemonList({ limit: 10, offset: 0 });

  console.log("data", data);

  return (
    <div className="grid grid-cols-4">
      <BaseCard />
    </div>
  );
};

export default PokemonList;
