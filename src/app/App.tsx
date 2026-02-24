import { Routes, Route, useLocation } from "react-router-dom";
import Arvind from "./arvind";
import Ajit from "./ajir";

export default function App() {
  const location = useLocation();

  const isAjit = location.pathname.includes("Ajit_Sanjana");

  return (
    <Routes>
      <Route
        path="*"
        element={isAjit ? <Ajit /> : <Arvind />}
      />
    </Routes>
  );
}