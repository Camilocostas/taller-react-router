import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Productos from "./components/Productos";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos/:categoria" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;