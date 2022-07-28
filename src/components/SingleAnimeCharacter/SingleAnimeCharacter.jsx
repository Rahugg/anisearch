import React from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleAnimeCharacter.css";

const SingleAnimeCharacter = ({ anime: array }) => {
  const { Id } = useParams();
  const anime = array.find((a) => a.key === Id);

  return (
    <>
      <section className="SingleAnimeCharacter-section">
        <Link to={"/"} className="btn btn-primary">
          Back Home
        </Link>
        <div className="SingleAnimeCharacter">
          <img src={anime.image} alt={anime.author} />
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
            <span className="SingleAnimeCharacter-data">Power and skills:</span>
            <span> {anime.power1}</span>
            <span> {anime.power2}</span>
            <span> {anime.power3}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default SingleAnimeCharacter;
