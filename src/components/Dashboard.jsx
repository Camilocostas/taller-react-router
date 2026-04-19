import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="usuarios">Usuarios</Link> |{" "}
        <Link to="configuracion">Configuración</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Dashboard;