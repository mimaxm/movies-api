import {
   GET_MOVIE_LOADING,
   GET_MOVIE_SUCCESS,
   GET_MOVIE_ERROR
} from "./movieTypes";

export const getMovieSuccess = (movie) => ({
   type: GET_MOVIE_SUCCESS,
   payload: movie,
});

export const getMovieLoading = (boolean) => ({
   type: GET_MOVIE_LOADING,
   payload: boolean,
});

export const getMovieError = (error) => ({
   type: GET_MOVIE_ERROR,
   payload: error,
});