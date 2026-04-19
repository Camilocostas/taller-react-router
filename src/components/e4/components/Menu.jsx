import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios";
import UsuarioDetalle from "./UsuarioDetalle";

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