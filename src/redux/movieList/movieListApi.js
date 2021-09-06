import axios from 'axios';
import {
   API_KEY,
   BASE_URL
} from '../../constans/apiConstants';
import {
   getMoviesSuccess,
   getMoviesLoading,
   getMoviesError
} from './movieListActions';

export const movieListApi = (searchQuery) => {
   return function (dispatch) {
      dispatch(getMoviesLoading(true));
      axios
         .get(BASE_URL, {
            params: {
               apiKey: API_KEY,
               s: searchQuery,
            },
         })
         .then((json) => dispatch(getMoviesSuccess(json.data.Search)))
         .catch(error => dispatch(getMoviesError(error.message)))
   };
};