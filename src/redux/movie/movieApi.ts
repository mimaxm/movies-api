import axios from 'axios';
import { Dispatch } from 'redux';
import {
   API_KEY,
   BASE_URL
} from '../../constans/apiConstants';
import {
   getMovieSuccess,
   getMovieLoading,
   getMovieError
} from './movieActions';

export const getMovieDetails = (id: string) => {
   return function (dispatch: Dispatch) {
      dispatch(getMovieLoading(true));
      axios.get(BASE_URL, {
            params: {
               apiKey: API_KEY,
               i: id,
               plot: 'full',
            },
         })
         .then((movie) => dispatch(getMovieSuccess(movie.data)))
         .catch(error => dispatch(getMovieError(error.message)));
   }
};