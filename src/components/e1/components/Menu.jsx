import { Link } from "react-router-dom";

function Menu() {
    return (
    <nav>
        <Link to="/e1">Inicio</Link> |{" "}
        <Link to="/e1/productos">Productos</Link> |{" "}
        <Link to="/e1/acerca">Acerca</Link>
    </nav>
    );
}

export default Menu;