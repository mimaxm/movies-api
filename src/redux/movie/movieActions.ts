import { MovieActionTypes } from "./movieTypes";

export const getMovieSuccess = (movie: object) => ({
   type: MovieActionTypes.GET_MOVIE_SUCCESS,
   payload: movie
});

export const getMovieLoading = (boolean: boolean) => ({
   type: MovieActionTypes.GET_MOVIE_LOADING,
   payload: boolean
});

export const getMovieError = (error: null | string) => ({
   type: MovieActionTypes.GET_MOVIE_ERROR,
   payload: error
});