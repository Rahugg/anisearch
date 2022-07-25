import React, { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Grid from '@mui/material/Grid';
import Searchbox from "../Searchbox/Searchbox";
import { Quotedata } from "../../data/AnimeQuotes";
import "./MainContent.css";

function MainContent() {
  const [animeList, setAnimeList] = useState(Quotedata);

  return (
    <main>
      <div className="container-main">
        <div className="main-search">
          <Searchbox placeholder="Enter an anime quote..." data={animeList} />
        </div>
        <div className="container-anime">
          <Grid
            container
            spacing={4}
            className={"gridContainer"}
            justifyItems="center"
            style={{ marginTop: "20px" }}
          >
            {animeList.map((anime) => (
              <Grid key={anime.key} item xs={12} sm={6} md={4}>
                <CharacterCard anime={anime} key={anime.key} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
