import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./SingleAnimeCharacter.css";

const SingleAnimeCharacter = ({ anime: array }) => {
  const { Id } = useParams();
  const anime = array.find((a) => a.key === Id);

  return (
    <>
      <div className="container__for__button">
        <Link to={"/"} className="btn btn-primary">
          Back Home
        </Link>
      </div>
      <div className="containerForSingleCharacter">
        <section className="SingleAnimeCharacter-section">
          <div className="image__character">
            <CardMedia component="img" image={anime.image} alt={anime.author} />
          </div>
          <div className="SingleAnimeCharacter-info">
            <p>
              <span className="SingleAnimeCharacter-data">Anime:</span>
              {anime.anime}
            </p>
            <p>
              <span className="SingleAnimeCharacter-data">Character:</span>
              {anime.author}
            </p>
            <p>
              <span className="SingleAnimeCharacter-data">Age:</span>
              {anime.age}
            </p>
            <p>
              <span className="SingleAnimeCharacter-data">Episode:</span>
              {anime.episode}
            </p>
            <p>
              <span className="SingleAnimeCharacter-data"> Birthday:</span>
              {anime.birthday}
            </p>
            <p>
              <span className="SingleAnimeCharacter-data">
                Power and skills:
              </span>
              <span> {anime.power1}</span>
              <span> {anime.power2}</span>
              <span> {anime.power3}</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleAnimeCharacter;
