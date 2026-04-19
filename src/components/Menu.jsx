import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/usuarios">Usuarios</Link> |{" "}
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Menu;