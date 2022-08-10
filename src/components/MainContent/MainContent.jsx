import React, { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Searchbox from "../Searchbox/Searchbox";
import { Quotedata } from "../../data/AnimeQuotes";
import "./MainContent.css";
import MainGif from "../../data/assets/Naruto.gif";

function MainContent() {
  const [animeList] = useState(Quotedata);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <main>
      <div className="container-main">
        <div className="main-search">
          <Searchbox
            placeholder="Enter an anime quote..."
            data={animeList}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
          />
        </div>
        {filteredData.length === 0 ? (
          <div className="image_Container" style = {{height:"800px"}}>
            <img src={MainGif} alt="MainFight" style = {{height:"250px"}} />
          </div>
        ) : (
          <div className="container-anime">
            {filteredData.map((anime) => (
              <CharacterCard anime={anime} key={anime.key} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MainContent;
