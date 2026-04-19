import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import BuscarVehiculo from "./components/BuscarVehiculo";
import VehiculoDetalle from "./components/VehiculoDetalle";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<BuscarVehiculo />} />
        <Route path="/vehiculos/:placa" element={<VehiculoDetalle />} />
      </Routes>
    </>
  );
}

export default App;