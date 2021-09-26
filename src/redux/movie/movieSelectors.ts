import { RootState } from "../store";

export const getMovie = (state: RootState) => state.movie.movie;
export const getLoading = (state: RootState) => state.movie.loading;
export const getError = (state: RootState) => state.movie.error;