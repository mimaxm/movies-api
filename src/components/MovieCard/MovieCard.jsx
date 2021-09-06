import "./MovieCard.scss";
import { NO_POSTER } from "../../constans";

export const MovieCard = ({ movieInfoObj: { Poster, Title } }) => {
	const posterUrl = Poster !== "N/A" ? `url('${Poster}')` : `url(${NO_POSTER})`;
	
	return (
		<div className="movie-card" style={{backgroundImage: posterUrl}}>
			<h3 className="movie-card__title">{Title}</h3>
		</div>
	);
};
