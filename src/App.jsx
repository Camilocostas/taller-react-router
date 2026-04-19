import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importar los Apps de cada ejercicio
import Ejercicio1 from "./components/e1/App";
import Ejercicio2 from "./components/e2/App";
import Ejercicio3 from "./components/e3/App";
import Ejercicio4 from "./components/e4/App";
import Ejercicio5 from "./components/e5/App";
import Ejercicio6 from "./components/e6/App";
import Ejercicio7 from "./components/e7/App";
import Ejercicio8 from "./components/e8/App";
import Ejercicio9 from "./components/e9/App";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Taller de React Router - Selecciona un ejercicio</h1>
        <nav style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
          <Link to="/e1">Ejercicio 1</Link> |{" "}
          <Link to="/e2">Ejercicio 2</Link> |{" "}
          <Link to="/e3">Ejercicio 3</Link> |{" "}
          <Link to="/e4">Ejercicio 4</Link> |{" "}
          <Link to="/e5">Ejercicio 5</Link> |{" "}
          <Link to="/e6">Ejercicio 6</Link> |{" "}
          <Link to="/e7">Ejercicio 7</Link> |{" "}
          <Link to="/e8">Ejercicio 8</Link> |{" "}
          <Link to="/e9">Ejercicio 9</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/e1/*" element={<Ejercicio1 />} />
          <Route path="/e2/*" element={<Ejercicio2 />} />
          <Route path="/e3/*" element={<Ejercicio3 />} />
          <Route path="/e4/*" element={<Ejercicio4 />} />
          <Route path="/e5/*" element={<Ejercicio5 />} />
          <Route path="/e6/*" element={<Ejercicio6 />} />
          <Route path="/e7/*" element={<Ejercicio7 />} />
          <Route path="/e8/*" element={<Ejercicio8 />} />
          <Route path="/e9/*" element={<Ejercicio9 />} />
          <Route path="/" element={<h2>Selecciona un ejercicio del menú</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;