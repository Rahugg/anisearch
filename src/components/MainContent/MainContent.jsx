import React, { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Grid from "@mui/material/Grid";
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
          <Grid
            container
            spacing={4}
            className={"gridContainer"}
            justifyItems="center"
            style={{ marginTop: "20px" }}
          >
            {filteredData.length === 0 ? (
              <p class="line-1 anim-typewriter">Welcome to Anisearch!</p>
            ) : (
              filteredData.map((anime) => (
                <Grid key={anime.key} item xs={12} sm={6} md={4}>
                  <CharacterCard anime={anime} key={anime.key} />
                </Grid>
              ))
            )}
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
