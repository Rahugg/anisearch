import React from "react";
import { useParams,Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./InfoOfCharacters.css";

const InfoOfCharacters = ({ anime: array }) => {
  const { Idchar } = useParams();
  const characterList = array.filter((a) => a.author === Idchar);

  return (
    <div className="container-anime">
      {characterList.map((anime) => (
        <article className="mainCharacterList">
          <Card>
            <CardMedia
              component="img"
              image={anime.image}
              alt={anime.author}
            />
            <div className="mainCharacterList-footer">
              <h3>Character: {anime.author}</h3>
              <h4>Anime: {anime.anime}</h4>
              <p>Quote: {anime.quote}</p>
              <Link
                className="btn btn-primary btn-details"
                to={"/character/" + anime.key}
              >
                Details
              </Link>
            </div>
          </Card>
        </article>
      ))}
    </div>
  );
};

export default InfoOfCharacters;
