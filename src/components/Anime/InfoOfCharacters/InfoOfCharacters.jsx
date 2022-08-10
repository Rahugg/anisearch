import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./InfoOfCharacters.css";
import ReadMore from "../../readMoreButton/ReadMore";

const InfoOfCharacters = ({ anime: array }) => {
  const { Idchar } = useParams();
  const characterList = array.filter((a) => a.author === Idchar);

  return (
    <div className="container-anime">
      {characterList.map((anime) => (
        <article className="mainCharacterList">
          <Card>
            <CardMedia component="img" image={anime.image} alt={anime.author} />
            <div className="mainCharacterList-footer">
              <ReadMore text={anime.quote} />
              <h3>{anime.author}</h3>
              <p>Anime: {anime.anime}</p>
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
