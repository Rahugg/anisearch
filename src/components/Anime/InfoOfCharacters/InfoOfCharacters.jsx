import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "../AnimeCard/Animecard.css";

const InfoOfCharacters = ({ anime: array }) => {
  const { Idchar } = useParams();
  const characterList = array.filter((a) => a.author === Idchar);
  return characterList.map((anime) => (
    <article className="animelist">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={anime.image} alt={anime.author} />
        <div className="animelist-footer">
          <h3>Character: {anime.author}</h3>
          <h4>Anime: {anime.anime}</h4>
          <p>Quote: {anime.quote}</p>
        </div>
      </Card>
    </article>
  ));
};

export default InfoOfCharacters;
