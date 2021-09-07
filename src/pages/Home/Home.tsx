import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MovieList } from "../../components/MovieList/MovieList";
import { Header } from "../../components/Header/Header";
import { FC } from "react";

export const Home: FC = () => {
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
