import { Routes, Route } from "react-router-dom";  // ← Solo Routes, Route
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Productos from "./components/Productos";
import Acerca from "./components/Acerca";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </>
  );
}

export default App;