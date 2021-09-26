import { MovieListActionTypes, MovieListAction, MovieListState } from "./movieListTypes";

const preloadedState: MovieListState = {
	movies: [],
	error: null,
	loading: false,
};

export const movieListReducer = (state = preloadedState, action: MovieListAction): MovieListState => {
	switch (action.type) {
		case MovieListActionTypes.GET_MOVIES_LOADING:
			return {
				...state,
				movies: [],
				error: null,
				loading: true,
			};
		case MovieListActionTypes.GET_MOVIES_SUCCESS:
			return {
				...state,
				movies: [...action.payload],
				error: null,
				loading: false,
			};
			case MovieListActionTypes.GET_MOVIES_ERROR:
				return {
					...state,
					movies: [],
					error: action.payload,
					loading: false,
				};
		default:
			return state;
	}
};