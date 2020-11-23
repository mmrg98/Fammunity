import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

// Actions

import {
  checkForToken,
  fetchFeeds,
  fetchLikers,
  fetchProfile,
} from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());
store.dispatch(fetchFeeds());
store.dispatch(fetchLikers());
//store.dispatch(fetchProfile());

export default store;
