export type MovieState = Readonly<{
	movie: object,
	error: null | string,
	loading: boolean
}>

export type Movie = {
	imdbID: string,
	Poster: string,
	Title: string
}

export enum MovieActionTypes {
	GET_MOVIE_LOADING = "GET_MOVIE_LOADING",
	GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS",
	GET_MOVIE_ERROR = "GET_MOVIE_ERROR"
}

export interface GetMovieLoadingAction {
	type: MovieActionTypes.GET_MOVIE_LOADING
	payload: boolean
}

export interface GetMovieSuccessAction {
	type: MovieActionTypes.GET_MOVIE_SUCCESS,
	payload: object
}

export interface GetMovieErrorAction {
	type: MovieActionTypes.GET_MOVIE_ERROR,
	payload: string
}

export type MovieAction = GetMovieLoadingAction | GetMovieSuccessAction | GetMovieErrorAction;