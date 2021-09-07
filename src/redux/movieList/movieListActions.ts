import { MovieListActionTypes } from "./movieListTypes";

export const getMoviesSuccess = (movies: any[]) => ({
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