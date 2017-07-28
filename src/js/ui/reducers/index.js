// @flow

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import start from './start';
import game from './game';

export default combineReducers({
  routing,
  start,
  game
});
