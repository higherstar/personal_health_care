import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import * as History from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

export const history = History.createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
);

export default createStore(rootReducer(history), initialState, composedEnhancers);
