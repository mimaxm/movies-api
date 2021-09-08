import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MovieList } from "../../components/MovieList/MovieList";
import { Header } from "../../components/Header/Header";
import { getMovieList } from "../../redux/movieList/movieListSelectors";
import { useSelector } from "react-redux";
import { FC } from "react";
import { EmptyList } from "../../components/EmptyList/EmptyList";

export const Home: FC = () => {
	const movieList = useSelector(getMovieList);
	return (
		<>
			<Header />
			<div className="container">
				<SearchBar />
				{movieList.length ? <MovieList /> : <EmptyList />}
				
			</div>
		</>
	);
};
