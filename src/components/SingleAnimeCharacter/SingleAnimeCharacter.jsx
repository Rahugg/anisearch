import * as React from "react";
import { useParams, Link } from "react-router-dom";
import './SingleAnimeCharacter.css';

const SingleAnimeCharacter = ({ anime }) => {
  return (
    <>
      <section className="section Singlecharacter-section">
        <Link to={"/"} className="btn btn-primary">
          Back Home
        </Link>
        <h2></h2>
        <div className="Singlecharacter">
          <img src={anime.image} alt={anime.author} />
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
              <span className="Singlecharacter-data">Sex:</span>
              {anime.sex}
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
