import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard"

function MainContent(props) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <CharacterCard anime={anime} key={anime.key} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
