import {
   GET_MOVIE_LOADING,
   GET_MOVIE_SUCCESS,
   GET_MOVIE_ERROR
} from "./movieTypes";

const preloadedState = {
	movie: {},
	error: null,
	loading: false,
};

export const movieReducer = (state = preloadedState, action) => {
	switch (action.type) {
		case GET_MOVIE_LOADING:
			return {
            ...state,
				loading: true,
			};
		case GET_MOVIE_SUCCESS:
			return {
            ...state,
				movie: action.payload,
            loading: false,
			};
			case GET_MOVIE_ERROR:
				return {
               ...state,
					error: action.payload,
					loading: false,
				};
		default:
			return state;
	}
};