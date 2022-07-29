import React from "react";
import { Link } from "react-router-dom";
import "./Animecard.css";

const Animecard = ({ anime }) => {
  return (
    <article className="animelist">
      <div className="img-container">
        <img src={anime.img} alt={anime.anime} height="500px" />
      </div>
      <div className="animelist-footer">
        <h3>Name: {anime.anime}</h3>
        <h4>Episodes: {anime.episodes}</h4>
        <p>Genre: {anime.genre}</p>
        <Link
          className="btn btn-primary btn-details"
          to={"/Anime/" + anime.key}
        >
          Details
        </Link>
      </div>
    </article>
  );
};

export default Animecard;
