import { useParams } from "react-router-dom";

const usuarios = [
  { id: 1, nombre: "Ana García", email: "ana@email.com" },
  { id: 2, nombre: "Luis Pérez", email: "luis@email.com" },
  { id: 3, nombre: "Marta López", email: "marta@email.com" },
];

function UsuarioDetalle() {
  const { id } = useParams();
  const usuario = usuarios.find((u) => u.id === parseInt(id));

  if (!usuario) {
    return <h2>Usuario no encontrado</h2>;
  }

  return (
    <div>
      <h2>Detalle del usuario</h2>
      <p>ID del usuario: {id}</p>
      <p>Nombre: {usuario.nombre}</p>
      <p>Email: {usuario.email}</p>
    </div>
  );
}

export default UsuarioDetalle;