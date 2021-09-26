import "./DetailMovie.scss";
import { Header } from "../../components/Header/Header";
import { getMovieDetails } from "../../redux/movie/movieApi";
import { useEffect } from "react";
import { DataLoader } from "../../components/Loader/Loader";
import { MovieInfo } from "./MovieInfo";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getError, getLoading } from "../../redux/movie/movieSelectors";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface MatchParams {
	movieId: string;
}

export const DetailMovie: FC = () => {
	const dispatch = useDispatch();

	const movie = useSelector(getMovie);
	const isLoading = useSelector(getLoading);
	const isError = useSelector(getError);

	const { movieId } = useParams<MatchParams>();

	useEffect(() => {
		dispatch(getMovieDetails(movieId));
	}, [dispatch, movieId]);

	if (isLoading) return (
		<>
			<Header />
			<DataLoader />
		</>
	)

	if (isError) return (
		<>
			<Header />
			<div className="error">
				Error: Movie not found
			</div>
		</>
	)
	return (
		<>
			<Header />
			<MovieInfo data={movie} />
		</>
	);
};
