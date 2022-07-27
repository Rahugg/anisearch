import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Anime from "./components/Anime/Anime";
import MainContent from "./components/MainContent/MainContent";
import RandomQuote from "./components/RandomQuote/RandomQuote";
import SingleAnimeCharacter from "./components/SingleAnimeCharacter/SingleAnimeCharacter";
import {Quotedata} from './data/AnimeQuotes';

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Anime" element={<Anime />} />
        <Route path='/' element ={<MainContent/>}/>
        <Route path='RandomQuote' element ={<RandomQuote/>}/>

        <Route path="/character/:Id" element={<SingleAnimeCharacter anime ={Quotedata} key = {Quotedata.key} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
