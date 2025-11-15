import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Zap } from "lucide-react";

const PokemonLayout = () => {
  const location = useLocation();

  const isPaginationPage = location.pathname.includes("/pagination");
  const isInfinitePage = location.pathname.includes("/infinite");

  const linkClass = "px-4 py-2 rounded-md font-medium transition border";

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center flex items-center gap-2 justify-center">
        <Zap className="size-6 text-yellow-500" />
        Pokédex
      </h1>

      {isPaginationPage && (
        <p className="text-gray-600 text-center font-semibold">
          Discover and explore Pokemon with page controls
        </p>
      )}

      {isInfinitePage && (
        <p className="text-gray-600 text-center font-semibold">
          Discover and explore Pokemon with infinite scroll
        </p>
      )}

      <div className="flex items-center justify-center gap-4">
        <NavLink
          to="/pokemon/pagination"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-black text-white" : "border-gray-300"
            }`
          }
        >
          Page Controls
        </NavLink>

        <NavLink
          to="/pokemon/infinite"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "bg-black text-white" : "border-gray-300"
            }`
          }
        >
          Infinite Scroll
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default PokemonLayout;
