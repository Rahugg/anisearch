import React,{useState} from 'react';
import Animecard from './AnimeCard/Animecard';
import {animeData} from '../../data/Animes'

function Anime() {
	const [Animes]=useState(animeData);
	return (
		Animes.map(anime =>(
			<Animecard anime ={anime} key={anime.key} /> 
		))
	)
}

export default Anime;