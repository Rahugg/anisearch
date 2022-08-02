import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./Charactercard.css";

function CharacterCard({ anime }) {
  return (
    <article className="mainCharacterList">
      <Card>
        <CardMedia component="img" image={anime.image} alt={anime.author} />
        <div className="mainCharacterList-footer">
          <h3>Character: {anime.author}</h3>
          <h4>Anime: {anime.anime}</h4>
          <p>Quote: {anime.quote}</p>
          <Link
            className="btn btn-primary btn-details"
            to={"/character/" + anime.author}
          >
            Details
          </Link>
        </div>
      </Card>
    </article>
  );
}
export default CharacterCard;
