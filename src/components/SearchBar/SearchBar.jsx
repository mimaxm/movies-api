import "./SearchBar.scss";
import logo from "./logo_search.png";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { movieListApi } from "../../redux/movieList/movieListApi";

export const SearchBar = () => {
	const dispatch = useDispatch();
	const refSearchInput = useRef();
	const searchSubmit = (event) => {
		event.preventDefault();
		if (refSearchInput.current.value.length > 2) {
			dispatch(movieListApi(refSearchInput.current.value));
		}
	};
	return (
		<div>
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>
			<form
				className="search-container"
				onSubmit={(e) => searchSubmit(e)}
				autoComplete="off"
			>
				<input
					type="text"
					id="search-bar"
					ref={refSearchInput}
					placeholder="Type the title of the movie here..."
               pattern="[A-Za-z0-9]{3,20}"
               title="Поисковый запрос должен включать не менее 3-х символов и состоять из букв латинского алфавита или цифр"
				/>
				<input type="submit" id="search-submit" value="" />
			</form>
		</div>
	);
};
