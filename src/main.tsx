import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/arvind.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);