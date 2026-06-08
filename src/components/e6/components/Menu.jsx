import { Link } from "react-router-dom";

const ciudades = [
  { id: 1, nombre: "Bogotá" },
  { id: 2, nombre: "Medellín" },
  { id: 3, nombre: "Cali" },
];

function Menu() {
  return (
    <nav>
      {ciudades.map((ciudad) => (
        <span key={ciudad.id}>
          <Link to={`/e6/ciudades/${ciudad.id}`}>{ciudad.nombre}</Link>{" "}
          <Link to={`/e6/ciudades/${ciudad.id}?modo=compacto`}>(compacto)</Link> |{" "}
        </span>
      ))}
    </nav>
  );
}

export default Menu;