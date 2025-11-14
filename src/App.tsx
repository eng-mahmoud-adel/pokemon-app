import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" replace />} />

      <Route path="/pokemon" element={<PokemonListPage />}>
        <Route index element={<PokemonListPage />} />
        <Route path=":id" element={<PokemonDetailPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
