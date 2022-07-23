import React,{useState} from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Searchbox from '../Searchbox/Searchbox';
import {Quotedata} from '../../data/AnimeQuotes';
import './MainContent.css';

function MainContent() {
  const [animeList,setAnimeList] = useState(Quotedata);

  return (
    <main>
      <div className="main-head">
        <Searchbox placeholder="Enter an anime quote..."data={animeList}/>
      </div>
      <div className="anime-list">
        {animeList.map((anime) => (
          <CharacterCard anime={anime} key={anime.key} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
