import { MovieListActionTypes } from "./movieListTypes";
import { Movie } from "../movie/movieTypes";

export const getMoviesSuccess = (movies: Movie[]) => ({
   type: MovieListActionTypes.GET_MOVIES_SUCCESS,
   payload: movies,
});

export const getMoviesLoading = (boolean: boolean) => ({
   type: MovieListActionTypes.GET_MOVIES_LOADING,
   payload: boolean,
});

export const getMoviesError = (error: string) => ({
   type: MovieListActionTypes.GET_MOVIES_ERROR,
   payload: error,
});