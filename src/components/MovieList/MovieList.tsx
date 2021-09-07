import "./MovieList.scss";
import { MovieCard } from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { getMovieList, getLoading, getError } from "../../redux/movieList/movieListSelectors";
import { DataLoader } from "../Loader/Loader"
import { FC } from "react";
import { Movie } from "../../redux/movie/movieTypes";

export const MovieList: FC = () => {
	const movieList = useSelector(getMovieList);
	const isLoading = useSelector(getLoading);
	const isError = useSelector(getError);

	if (isLoading) return (
		<div className="movie-list">
			<DataLoader />
		</div>
	)

	if (isError) return (
		<div className="movie-list">
			<div className="error">No results found. Please try again</div>
		</div>
	)

	return (
		<div className="movie-list">
			{movieList.length ? (
				movieList.map((movie: Movie) => (
					<Link
						key={movie.imdbID}
						to={{
							pathname: `${routes.movies}/${movie.imdbID}`,
						}}
					>
						<MovieCard key={movie.imdbID} movieInfoObj={movie} />
					</Link>
				))
			) : null}
		</div>
	);
};
