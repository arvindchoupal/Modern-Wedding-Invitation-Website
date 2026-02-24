import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { WeddingCard } from "./components/WeddingCard";
import { StoryReveal } from "./components/StoryReveal";
import { Gallery } from "./components/Gallery";
import { Volume2, VolumeX } from "lucide-react";
import aud from "./reel.mp3";
import Arvind from "./arvind";
import Ajit from "./ajir";

export default function App() {
 

  return (

      <Routes>
        <Route path="/" element={<Arvind />} />
        <Route path="/Ajit" element={<Ajit />} />
      </Routes>
  );
}