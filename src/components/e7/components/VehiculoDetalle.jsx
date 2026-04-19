import { useParams } from "react-router-dom";

const vehiculos = [
  { placa: "ABC123", marca: "Toyota", modelo: "Corolla", año: 2020 },
  { placa: "XYZ789", marca: "Honda", modelo: "Civic", año: 2021 },
  { placa: "DEF456", marca: "Mazda", modelo: "3", año: 2019 },
];

function VehiculoDetalle() {
  const { placa } = useParams();
  const vehiculo = vehiculos.find((v) => v.placa === placa);

  if (!vehiculo) {
    return <h2>Vehículo no encontrado</h2>;
  }

  return (
    <div>
      <h2>Detalle del vehículo</h2>
      <p>Placa: {placa}</p>
      <p>Marca: {vehiculo.marca}</p>
      <p>Modelo: {vehiculo.modelo}</p>
      <p>Año: {vehiculo.año}</p>
    </div>
  );
}

export default VehiculoDetalle;  