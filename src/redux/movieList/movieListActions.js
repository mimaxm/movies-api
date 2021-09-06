import {
   GET_MOVIES_LOADING,
   GET_MOVIES_SUCCESS,
   GET_MOVIES_ERROR
} from "./movieListTypes";

export const getMoviesSuccess = (movies) => ({
   type: GET_MOVIES_SUCCESS,
   payload: movies,
});

export const getMoviesLoading = (boolean) => ({
   type: GET_MOVIES_LOADING,
   payload: boolean,
});

export const getMoviesError = (error) => ({
   type: GET_MOVIES_ERROR,
   payload: error,
});