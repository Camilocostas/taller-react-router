import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Empresas from "./components/Empresas";
import Sedes from "./components/Sedes";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Empresas />} />
        <Route path="/empresas/:id" element={<Empresas />}>
          <Route path="sedes" element={<Sedes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;