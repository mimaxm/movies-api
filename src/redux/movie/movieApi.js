import axios from 'axios';
import {
   API_KEY,
   BASE_URL
} from './../../constans/apiConstants';
import {
   getMovieSuccess,
   getMovieLoading,
   getMovieError
} from './movieActions';

export const getMovieDetails = (id) => {
   return function (dispatch) {
      dispatch(getMovieLoading(true));
      axios.get(BASE_URL, {
            params: {
               apiKey: API_KEY,
               i: id,
               plot: 'full',
            },
         })
         .then((movie) => dispatch(getMovieSuccess(movie)))
         .catch(error => dispatch(getMovieError(error.message)));
   }
};