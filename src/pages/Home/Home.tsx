import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MovieList } from "../../components/MovieList/MovieList";
import { Header } from "../../components/Header/Header";

export const Home = () => {
	return (
		<>
			<Header />
			<div className="container">
				<SearchBar />
				<MovieList />
			</div>
		</>
	);
};
