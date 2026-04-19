import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Usuarios from "./components/Usuarios";
import UsuarioDetalle from "./components/UsuarioDetalle";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Usuarios />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
      </Routes>
    </>
  );
}

export default App;