import { useParams } from "react-router-dom";

const empresas = [
  { id: 1, nombre: "Empresa A", sedes: ["Sede Norte", "Sede Sur"] },
  { id: 2, nombre: "Empresa B", sedes: ["Sede Centro", "Sede Este"] },
];

function Sedes() {
  const { id } = useParams();
  const empresa = empresas.find((e) => e.id === parseInt(id));

  if (!empresa) {
    return <h2>Empresa no encontrada</h2>;
  }

  return (
    <div>
      <h3>Sedes de {empresa.nombre}</h3>
      <ul>
        {empresa.sedes.map((sede, index) => (
          <li key={index}>{sede}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sedes;