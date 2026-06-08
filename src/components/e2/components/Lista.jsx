    import { Link } from "react-router-dom";

    const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
    ];

    function Lista() {
    return (
        <div>
        <h2>Lista de productos</h2>
        <ul>
            {productos.map((producto) => (
            <li key={producto.id}>
                <Link to={`/e2/detalle/${producto.id}`}>{producto.nombre}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
    }

    export default Lista;