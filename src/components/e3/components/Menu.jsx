import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/e3/productos/todos">Todos</Link> |{" "}
      <Link to="/e3/productos/electronicos">Electrónicos</Link> |{" "}
      <Link to="/e3/productos/ropa">Ropa</Link> |{" "}
      <Link to="/e3/productos/hogar">Hogar</Link>
    </nav>
  );
}

export default Menu;