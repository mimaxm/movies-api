import "./MovieCard.scss";
import { FC } from "react";
import { NO_POSTER } from "../../constans";

interface MovieCardProps {
	movieInfoObj: any
}

interface MovieInfo {
	Poster: string,
	Title: string
}

export const MovieCard: FC<MovieCardProps> = ({ movieInfoObj }) => {
	const { Poster, Title }: MovieInfo = movieInfoObj;
	const posterUrl = Poster !== "N/A" ? `url('${Poster}')` : `url(${NO_POSTER})`;
	
	return (
		<div className="movie-card" style={{ backgroundImage: posterUrl }}>
			<h3 className="movie-card__title">{Title}</h3>
		</div>
	);
};
