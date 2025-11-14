import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" replace />} />

      <Route path="/pokemon" element={<PokemonList />}>
        <Route index element={<PokemonList />} />
        <Route path=":id" element={<PokemonDetail />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
