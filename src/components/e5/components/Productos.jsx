import { Link } from "react-router-dom";

const productos = [
  { codigo: "P001", nombre: "Laptop", precio: "$800" },
  { codigo: "P002", nombre: "Mouse", precio: "$20" },
  { codigo: "P003", nombre: "Teclado", precio: "$50" },
];

function Productos() {
  return (
    <div>
      <h2>Catálogo de productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.codigo}>
            <Link to={`/productos/${producto.codigo}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;