import { getMoviesSuccess,getMoviesLoading, getMoviesError } from './movieListActions';
import { MovieListState } from './movieListTypes';
import { movieListReducer } from './movieListReducer';
import { Movie } from '../movie/movieTypes';

const movieListMock: Movie[] = [
   { imdbID: '123test', Title: 'test', Poster: 'url' },
   { imdbID: '123test', Title: 'test', Poster: 'url' }
];

const preloadedState: MovieListState = {
   movies: [],
   error: null,
   loading: false,
};

describe('movieListReducer test', () => {
   test('test type GET_MOVIES_SUCCESS', () => {
      const action: any = getMoviesSuccess(movieListMock);

      const newState = movieListReducer(preloadedState, action);

      expect(newState.movies.length).toBe(2);
      expect(newState.error).toBeNull();
      expect(newState.loading).toBeFalsy();
   });

   test('test type GET_MOVIES_LOADING', () => {
      const action: any = getMoviesLoading(true);

      const newState = movieListReducer(preloadedState, action);

      expect(newState.movies.length).toBe(0);
      expect(newState.error).toBeNull();
      expect(newState.loading).toBeTruthy();
   });

   test('test type GET_MOVIES_ERROR', () => {
      const action: any = getMoviesError("error message");

      const newState = movieListReducer(preloadedState, action);

      expect(newState.movies.length).toBe(0);
      expect(newState.error).toBeTruthy();
      expect(newState.loading).toBeFalsy();
   });
});
