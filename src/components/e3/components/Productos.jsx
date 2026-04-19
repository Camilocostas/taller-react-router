import { useParams } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Laptop", categoria: "electronicos" },
  { id: 2, nombre: "Camisa", categoria: "ropa" },
  { id: 3, nombre: "Sofá", categoria: "hogar" },
  { id: 4, nombre: "Mouse", categoria: "electronicos" },
  { id: 5, nombre: "Pantalón", categoria: "ropa" },
];

function Productos() {
  const { categoria } = useParams();
  
  let productosFiltrados = productos;
  if (categoria && categoria !== "todos") {
    productosFiltrados = productos.filter(p => p.categoria === categoria);
  }

  return (
    <div>
      <h2>Productos {categoria && categoria !== "todos" ? `- ${categoria}` : ""}</h2>
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>{producto.nombre} ({producto.categoria})</li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;