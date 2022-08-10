import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./Animecharacters.css";

const Animecharacters = ({ anime: array }) => {
  const { Idchar } = useParams();

  const characterList = array.filter((a) => a.anime === Idchar);

  return (
    <div className="container-anime">
      {characterList.map((anime) => (
        <article className="mainCharacterList">
          <Card style={{width:"100%"}}>
            <CardMedia
              component="img"
              image={anime.image}
              alt={anime.author}
              className="card__image"
              height="340"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <CardContent >
            
                <h3>{anime.author}</h3>
                <h4>Anime: {anime.anime}</h4>
                <Link
                  className="btn btn-primary btn-details"
                  to={"/Anime/Characters/" + anime.author}
                >
                  Details
                </Link>
              
            </CardContent>
          </Card>
        </article>
      ))}
      ;
    </div>
  );
};

export default Animecharacters;
