import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import sideBar from './sidebar';

export default (history) => combineReducers({
  router: connectRouter(history),
  sideBar,
});
