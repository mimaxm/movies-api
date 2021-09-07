import "./SearchBar.scss";
import logo from "./logo_search.png";
import { useDispatch } from "react-redux";
import { useState, FC } from "react";
import { movieListApi } from "../../redux/movieList/movieListApi";

export const SearchBar: FC = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	}
	
	const dispatch = useDispatch();
	const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (searchValue.length > 2) {
			dispatch(movieListApi(searchValue));
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
					value={searchValue}
					onChange={onChangeInput}
					placeholder="Type the title of the movie here..."
               pattern="[A-Za-z0-9]{3,20}"
               title="Поисковый запрос должен включать не менее 3-х символов и состоять из букв латинского алфавита или цифр"
				/>
				<input type="submit" id="search-submit" value="" />
			</form>
		</div>
	);
};
