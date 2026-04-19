import { useParams, useSearchParams } from "react-router-dom";

const ciudades = [
  { id: 1, nombre: "Bogotá", poblacion: "8 millones" },
  { id: 2, nombre: "Medellín", poblacion: "2.5 millones" },
  { id: 3, nombre: "Cali", poblacion: "2.2 millones" },
];

function Ciudades() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const modo = searchParams.get("modo");
  
  if (!id) {
    return <h2>Selecciona una ciudad</h2>;
  }
  
  const ciudad = ciudades.find((c) => c.id === parseInt(id));
  
  if (!ciudad) {
    return <h2>Ciudad no encontrada</h2>;
  }

  return (
    <div>
      <h2>Ciudad: {ciudad.nombre}</h2>
      {modo === "compacto" ? (
        <p>Modo compacto activado</p>
      ) : (
        <div>
          <p>Población: {ciudad.poblacion}</p>
          <p>Modo completo activado</p>
        </div>
      )}
    </div>
  );
}

export default Ciudades;