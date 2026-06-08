import { Link, Outlet, useParams } from "react-router-dom";

const empresas = [
  { id: 1, nombre: "Empresa A", sedes: ["Sede Norte", "Sede Sur"] },
  { id: 2, nombre: "Empresa B", sedes: ["Sede Centro", "Sede Este"] },
];

function Empresas() {
  const { id } = useParams();

  if (!id) {
    return (
      <div>
        <h2>Lista de empresas</h2>
        <ul>
          {empresas.map((emp) => (
            <li key={emp.id}>
              <Link to={`/e8/empresas/${emp.id}`}>{emp.nombre}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const empresa = empresas.find((e) => e.id === parseInt(id));

  if (!empresa) {
    return <h2>Empresa no encontrada</h2>;
  }

  return (
    <div>
      <h2>{empresa.nombre}</h2>
      <Link to={`/e8/empresas/${id}/sedes`}>Ver sedes</Link>
      <Outlet />
    </div>
  );
}

export default Empresas;