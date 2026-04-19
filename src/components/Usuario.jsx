import { Link } from "react-router-dom";

const usuarios = [
  { id: 1, nombre: "Ana García" },
  { id: 2, nombre: "Luis Pérez" },
  { id: 3, nombre: "Marta López" },
];

function Usuarios() {
  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <Link to={`/usuarios/${usuario.id}`}>{usuario.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;