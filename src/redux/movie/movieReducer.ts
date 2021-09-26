import { MovieState } from "./movieTypes";
import { MovieAction, MovieActionTypes } from "./movieTypes";

const preloadedState: MovieState = {
	movie: {},
	error: null,
	loading: false
};

export const movieReducer = (state = preloadedState, action: MovieAction): MovieState => {
	switch (action.type) {
		case MovieActionTypes.GET_MOVIE_LOADING:
			return {
            ...state,
				loading: true
			};
		case MovieActionTypes.GET_MOVIE_SUCCESS:
			return {
            ...state,
				movie: action.payload,
            loading: false
			};
			case MovieActionTypes.GET_MOVIE_ERROR:
				return {
               ...state,
					error: action.payload,
					loading: false
				};
		default:
			return state;
	}
};