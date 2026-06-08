import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Ciudades from "./components/Ciudades";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Ciudades />} />
        <Route path="/ciudades/:id" element={<Ciudades />} />
      </Routes>
    </>
  );
}

export default App;