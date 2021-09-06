import { NO_POSTER } from "../../constans";

export const MovieInfo = ( data ) => {
	console.log(data)
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
	} = data.data;

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