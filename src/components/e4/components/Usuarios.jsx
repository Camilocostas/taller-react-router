import { Link } from "react-router-dom";

const usuarios = [
  { id: 1, nombre: "Ana García", email: "ana@email.com" },
  { id: 2, nombre: "Luis Pérez", email: "luis@email.com" },
  { id: 3, nombre: "Marta López", email: "marta@email.com" },
];

function Usuarios() {
  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <Link to={`/e4/usuarios/${usuario.id}`}>{usuario.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;