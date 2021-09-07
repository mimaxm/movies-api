import { Movie } from "../movie/movieTypes";

export enum MovieListActionTypes {
	GET_MOVIES_LOADING = "GET_MOVIES_LOADING",
	GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS",
	GET_MOVIES_ERROR = "GET_MOVIES_ERROR"
}

export type MovieListState = Readonly<{
	movies: Movie[],
	error: null | string,
	loading: boolean
}>

export type MovieList = {
	imdbID: string,
	Poster: string,
	Title: string
}

export interface GetMovieListLoadingAction {
	type: MovieListActionTypes.GET_MOVIES_LOADING
}

export interface GetMovieListSuccessAction {
	type: MovieListActionTypes.GET_MOVIES_SUCCESS,
	payload: any[]
}

export interface GetMovieListErrorAction {
	type: MovieListActionTypes.GET_MOVIES_ERROR,
	payload: string
}

export type MovieListAction = GetMovieListLoadingAction | GetMovieListSuccessAction | GetMovieListErrorAction;