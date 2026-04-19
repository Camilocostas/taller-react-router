import { Link } from "react-router-dom";

function Menu() {
    return (
    <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/productos">Productos</Link> |{" "}
        <Link to="/acerca">Acerca</Link>
    </nav>
    );
}

export default Menu;