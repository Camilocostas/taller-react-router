import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Productos from "./components/Productos";
import ProductoDetalle from "./components/ProductoDetalle";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos/:codigo" element={<ProductoDetalle />} />
      </Routes>
    </>
  );
}

export default App;