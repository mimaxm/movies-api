import axios from 'axios';
import { Dispatch } from 'redux';
import {
   API_KEY,
   BASE_URL
} from '../../constans/apiConstants';
import {
   getMoviesSuccess,
   getMoviesLoading,
   getMoviesError
} from './movieListActions';
import { MovieList } from './movieListTypes';

interface MovieListResponse {
   Search: MovieList
}

export const movieListApi = (searchQuery: string) => {
   return function (dispatch: Dispatch): void {
      dispatch(getMoviesLoading(true));
      axios
         .get<MovieListResponse>(BASE_URL, {
            params: {
               apiKey: API_KEY,
               s: searchQuery,
            },
         })
         .then((json) => dispatch(getMoviesSuccess(json.data.Search)))
         .catch(error => dispatch(getMoviesError(error.message)))
   };
};