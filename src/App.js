import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Anime from "./components/Anime/Anime";
import MainContent from './components/MainContent/MainContent';import "./App.css";
import {Quotedata} from "./AnimeQuotes.js";

function App() {
  const [animeList, setAnimeList] = useState(Quotedata);
  const [search, SetSearch] = useState("");

  const HandleSearch = (e) => {
    e.preventDefault();

    setAnimeList(search);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/anime" element={<Anime />} />
      </Routes>
      <div className="content-wrap">
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
