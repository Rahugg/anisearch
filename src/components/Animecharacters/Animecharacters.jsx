import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "../Anime/AnimeCard/Animecard.css";

const Animecharacters = ({ anime: array }) => {
  const { Idchar } = useParams();

  const characterList = array.filter((a) => a.anime === Idchar);

  return characterList.map((anime) => (
    <article className="animelist">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={anime.image} alt={anime.author} />
        <div className="animelist-footer">
          <h3>Character: {anime.author}</h3>
          <h4>Anime: {anime.anime}</h4>
          <Link
            className="btn btn-primary btn-details"
            to={"/Anime/Characters/" + anime.author}
          >
            Details
          </Link>
        </div>
      </Card>
    </article>
  ));
};

export default Animecharacters;
