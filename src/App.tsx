import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" replace />} />

      <Route path="/pokemon" element={<PokemonListPage />} />

      <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
