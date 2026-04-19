import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/productos/todos">Todos</Link> |{" "}
      <Link to="/productos/electronicos">Electrónicos</Link> |{" "}
      <Link to="/productos/ropa">Ropa</Link> |{" "}
      <Link to="/productos/hogar">Hogar</Link>
    </nav>
  );
}

export default Menu;