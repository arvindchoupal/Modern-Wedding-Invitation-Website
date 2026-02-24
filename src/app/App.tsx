import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Arvind from "./arvind";
import Ajit from "./ajir";

// const TRACKING_ID = "G-KSGJBCBQ00";
// ReactGA.initialize(TRACKING_ID);

export default function App() {
  const location = useLocation();

//   useEffect(() => {
//     ReactGA.send({
//       hitType: "pageview",
//       page: location.pathname + location.search,
//     });
//   }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Arvind />} />
      <Route path="/Ajit" element={<Ajit />} />
    </Routes>
  );
}