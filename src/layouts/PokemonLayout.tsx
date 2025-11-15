import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Zap } from "lucide-react";

const PokemonLayout = () => {
  const location = useLocation();

  const isPaginationPage = location.pathname.includes("/pagination");
  const isInfinitePage = location.pathname.includes("/infinite");

  const pageBgClass = isPaginationPage
    ? "bg-blue-50"
    : isInfinitePage
    ? "bg-green-50"
    : "bg-gray-50";

  const linkClass =
    "px-3 sm:px-4 py-2 rounded-md font-medium transition border";

  return (
    <div className={`min-h-dvh ${pageBgClass} p-4 sm:p-6 md:p-8`}>
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center flex items-center gap-2 justify-center">
          <Zap className="w-6 h-6 sm:w-6 sm:h-6 text-yellow-500" />
          Pokédex
        </h1>

        {isPaginationPage && (
          <p className="text-gray-600 text-center font-semibold text-sm sm:text-base">
            Discover and explore Pokemon with page controls
          </p>
        )}

        {isInfinitePage && (
          <p className="text-gray-600 text-center font-semibold text-sm sm:text-base">
            Discover and explore Pokemon with infinite scroll
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <NavLink
            to="/pokemon/pagination"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "bg-black text-white" : "border-gray-300 bg-white"
              }`
            }
          >
            Page Controls
          </NavLink>

          <NavLink
            to="/pokemon/infinite"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "bg-black text-white" : "border-gray-300 bg-white"
              }`
            }
          >
            Infinite Scroll
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default PokemonLayout;
