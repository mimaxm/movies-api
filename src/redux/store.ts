import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieListReducer } from "./movieList/movieListReducer";
import { movieReducer } from "./movie/movieReducer";

const rootReducer = combineReducers({
   movieList: movieListReducer,
   movie: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));