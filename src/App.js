import "./App.css";
import Header from "./components/Header/Header";
import React from "react";
import Anime from "./components/Anime/Anime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/anime" element={<Anime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
