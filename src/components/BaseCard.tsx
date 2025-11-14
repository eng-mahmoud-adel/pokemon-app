const BaseCard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 border items-center border-gray-200 rounded-lg shadow-sm">
      <div className="relative w-full h-48 bg-gray-100 rounded-md">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt=""
          className="absolute size-full object-contain"
        />
      </div>
      <h5 className="text-lg font-bold">Charmander</h5>
      <p className="text-sm text-gray-500">#004</p>
    </div>
  );
};

export default BaseCard;
