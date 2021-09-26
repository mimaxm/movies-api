import {
   MovieActionTypes,
   GetMovieLoadingAction,
   GetMovieErrorAction,
   GetMovieSuccessAction,
} from './movieTypes';
import {
   getMovieSuccess,
   getMovieError,
   getMovieLoading,
} from './movieActions';

describe('Action creators testing', () => {
   test('getMovieSuccess should return an object with properties', () => {
      const movie: object = {};
      const result: GetMovieSuccessAction = {
         type: MovieActionTypes.GET_MOVIE_SUCCESS,
         payload: movie,
      };
      expect(getMovieSuccess(movie)).toEqual(result);
   });

   test('GetMovieLoadingAction should return an object with properties', () => {
      const boolean: boolean = true;
      const result: GetMovieLoadingAction = {
         type: MovieActionTypes.GET_MOVIE_LOADING,
         payload: boolean,
      };
      expect(getMovieLoading(boolean)).toEqual(result);
   });

   test('GetMovieErrorAction should return an object with properties', () => {
      const error: string = 'error';
      const result: GetMovieErrorAction = {
         type: MovieActionTypes.GET_MOVIE_ERROR,
         payload: error,
      };
      expect(getMovieError(error)).toEqual(result);
   });
});
