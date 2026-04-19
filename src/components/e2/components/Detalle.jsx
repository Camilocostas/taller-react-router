import { useParams } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1" },
  { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2" },
  { id: 3, nombre: "Producto 3", descripcion: "Descripción del producto 3" },
];

function Detalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h2>Detalle del producto</h2>
      <p>ID: {id}</p>
      <p>Nombre: {producto?.nombre}</p>
      <p>Descripción: {producto?.descripcion}</p>
    </div>
  );
}

export default Detalle;