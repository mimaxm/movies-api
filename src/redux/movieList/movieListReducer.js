import {
   GET_MOVIES_LOADING,
   GET_MOVIES_SUCCESS,
   GET_MOVIES_ERROR
} from "./movieListTypes";

const preloadedState = {
	movies: [],
	error: null,
	loading: false,
};

export const movieListReducer = (state = preloadedState, action) => {
	switch (action.type) {
		case GET_MOVIES_LOADING:
			return {
				movies: [],
				error: null,
				loading: true,
			};
		case GET_MOVIES_SUCCESS:
			return {
				movies: [...action.payload],
				error: null,
				loading: false,
			};
			case GET_MOVIES_ERROR:
				return {
					movies: [],
					error: action.payload,
					loading: false,
				};
		default:
			return state;
	}
};