import React, { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Searchbox from "../Searchbox/Searchbox";
import { Quotedata } from "../../data/AnimeQuotes";
import "./MainContent.css";

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
        <div className="container-anime">
          {filteredData.length === 0
            ? animeList.map((anime) => (
                <CharacterCard anime={anime} key={anime.key} />
              ))
            : filteredData.map((anime) => (
                <CharacterCard anime={anime} key={anime.key} />
              ))}
        </div>
      </div>
    </main>
  );
}

export default MainContent;
