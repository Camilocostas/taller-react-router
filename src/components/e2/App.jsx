import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Lista from "./components/Lista";
import Detalle from "./components/Detalle";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;