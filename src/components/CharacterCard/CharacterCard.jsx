import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CharacterCard({ anime }) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardHeader title={anime.author} subheader={anime.anime} />
      <CardMedia
        component="img"
        image={anime.image}
        alt={anime.author}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {anime.quote}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CharacterCard;
