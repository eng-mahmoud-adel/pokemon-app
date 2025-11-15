import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import PokemonListPaginiatedPage from "./pages/PokemonListPaginiatedPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PokemonLayout from "./layouts/PokemonLayout";
import PokemonListInfinitePage from "./pages/PokemonListInfinitePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon/pagination" replace />} />

      <Route path="/pokemon" element={<PokemonLayout />}>
        <Route index element={<Navigate to="pagination" replace />} />
        <Route path="pagination" element={<PokemonListPaginiatedPage />} />
        <Route path="infinite" element={<PokemonListInfinitePage />} />
      </Route>

      <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
