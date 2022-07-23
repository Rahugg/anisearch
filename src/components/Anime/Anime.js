import React from 'react';

function AnimeCard({anime}) {
	return (
		<article className="anime-card">
			<a 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.anime }</h3>
			</a>
		</article>
	)
}

export default AnimeCard