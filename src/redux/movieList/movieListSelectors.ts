import { RootState } from "../store";

export const getMovieList = (state: RootState) => state.movieList.movies;
export const getLoading = (state: RootState) => state.movieList.loading;
export const getError = (state: RootState) => state.movieList.error;