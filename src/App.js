import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Anime from "./components/Anime/Anime";
import MainContent from "./components/MainContent/MainContent";
import "./App.css";
import RandomQuote from "./components/RandomQuote/RandomQuote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Anime" element={<Anime />} />
        <Route path='/' element ={<MainContent/>}/>
        <Route path='RandomQuote' element ={<RandomQuote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
