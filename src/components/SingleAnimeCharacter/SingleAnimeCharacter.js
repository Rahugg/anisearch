import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleAnimeCharacter.css";

const SingleAnimeCharacter = ({ anime: array }) => {
  const {Id}  = useParams();
  const anime = array.find((a) => a.key === Id)
    console.log(anime);
  return (
    <>
      <section className="section Singlecharacter-section">
        <Link to={"/"} className="btn btn-primary">
          Back Home
        </Link> 
        <div className="Singlecharacter">
          <img
            src={anime.image}
            alt={anime.author}
          />
          <div className="Singlecharacter-info">
            <p>
              <span className="Singlecharacter-data">Anime:</span>
              {anime.anime}
            </p>
            <p>
              <span className="Singlecharacter-data">SingleCharacter:</span>
              {anime.author}
            </p>
            <p>
              <span className="Singlecharacter-data">Age:</span>
              {anime.age}
            </p>
            <p>
              <span className="Singlecharacter-data">Episode:</span>
              {anime.episode}
            </p>
            <p>
              <span className="Singlecharacter-data"> Birthday:</span>
              {anime.birthday}
            </p>
            <p>
              <span className="Singlecharacter-data">Power and skills:</span>
              <span> {anime.power1}</span>
              <span> {anime.power2}</span>
              <span> {anime.power3}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleAnimeCharacter;
