import "./DetailMovie.scss";
import { Header } from "../../components/Header/Header";
import { getMovieDetails } from "../../redux/movie/movieApi";
import { useEffect } from "react";
import { DataLoader } from "../../components/Loader/Loader";
import { MovieInfo } from "./MovieInfo";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getError, getLoading } from "../../redux/movie/movieSelectors";

export const DetailMovie = (props) => {
	const dispatch = useDispatch();

	const movie = useSelector(getMovie);
	const isLoading = useSelector(getLoading);
	const isError = useSelector(getError);

	const { movieId } = props.match.params;

	useEffect(() => {
		dispatch(getMovieDetails(movieId));
	}, [movieId]);
	
	console.log(movie);
	return (
		<>
			<Header />
			{ isLoading ? <DataLoader /> : <MovieInfo data={movie?.data ? movie.data : {}} /> }
		</>
	);
};
