import { useParams } from "react-router-dom";

const productos = [
  { codigo: "P001", nombre: "Laptop", precio: "$800", stock: 10 },
  { codigo: "P002", nombre: "Mouse", precio: "$20", stock: 50 },
  { codigo: "P003", nombre: "Teclado", precio: "$50", stock: 25 },
];

function ProductoDetalle() {
  const { codigo } = useParams();
  const producto = productos.find((p) => p.codigo === codigo);

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>Detalle del producto</h2>
      <p>Código: {codigo}</p>
      <p>Nombre: {producto.nombre}</p>
      <p>Precio: {producto.precio}</p>
      <p>Stock: {producto.stock} unidades</p>
    </div>
  );
}

export default ProductoDetalle;