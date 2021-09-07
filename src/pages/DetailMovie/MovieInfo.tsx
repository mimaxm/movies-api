import { FC } from "react";
import { NO_POSTER } from "../../constans";
interface DataInfo {
	Plot: string,
	Type: string,
	Poster: string,
	Title: string,
	Year: string,
	imdbRating: string,
	Runtime: string,
	Genre: string,
	Actors: string,
	Country: string
}
interface MovieInfoProps {
	data: any
}

export const MovieInfo: FC<MovieInfoProps> = ({ data }) => {
	const {
		Plot,
		Type,
		Poster,
		Title,
		Year,
		imdbRating,
		Runtime,
		Genre,
		Actors,
		Country,
	}: DataInfo = data;

   const posterUrl = Poster !== "N/A" ? Poster : NO_POSTER;

	return (
		<div className="detail-movie container">
			<div className="detail-movie__poster">
				<img src={posterUrl} alt={Title} />
			</div>
			<div className="detail-movie__info">
				<h2>
					{Title} ({Year})
				</h2>
				<div className="detail-movie__descr">
					<p>{Plot}</p>
					<ul>
						<li>
							<span>Type:</span> {Type}
						</li>
						<li>
							<span>Genre:</span> {Genre}
						</li>
						<li>
							<span>IMDB Raiting:</span> {imdbRating}
						</li>
						<li>
							<span>Runtime:</span> {Runtime}
						</li>
						<li>
							<span>Actors:</span> {Actors}
						</li>
						<li>
							<span>Country:</span> {Country}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};