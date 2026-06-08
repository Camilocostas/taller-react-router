import { useState } from "react";
import { useNavigate } from "react-router-dom";

const vehiculos = [
  { placa: "ABC123", marca: "Toyota", modelo: "Corolla" },
  { placa: "XYZ789", marca: "Honda", modelo: "Civic" },
  { placa: "DEF456", marca: "Mazda", modelo: "3" },
];

function BuscarVehiculo() {
  const [placaSeleccionada, setPlacaSeleccionada] = useState("");
  const navigate = useNavigate();

  const handleBuscar = () => {
    if (placaSeleccionada) {
      navigate(`/e7/vehiculos/${placaSeleccionada}`);
    }
  };

  return (
    <div>
      <h2>Consulta de vehículos</h2>
      <select value={placaSeleccionada} onChange={(e) => setPlacaSeleccionada(e.target.value)}>
        <option value="">Seleccione una placa</option>
        {vehiculos.map((vehiculo) => (
          <option key={vehiculo.placa} value={vehiculo.placa}>
            {vehiculo.placa} - {vehiculo.marca} {vehiculo.modelo}
          </option>
        ))}
      </select>
      <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
}

export default BuscarVehiculo;