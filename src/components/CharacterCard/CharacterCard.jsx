import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./Charactercard.css";
import ReadMore from "../readMoreButton/ReadMore.js";

function CharacterCard({ anime }) {
  return (
    <article className="mainCharacterList">
      <Card style={{ width: "100%" }}>
        <CardMedia
          component="img"
          image={anime.image}
          alt={anime.author}
          className="card__image"
          height="340"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <CardContent>
          <ReadMore text={anime.quote} />
          {/*check the youtube video 2:25 */}
          <h3>{anime.author}</h3>
          <Link
            className="btn btn-primary btn-details"
            to={"/character/" + anime.key}
          >
            Details
          </Link>
        </CardContent>
      </Card>
    </article>
  );
}
export default CharacterCard;
