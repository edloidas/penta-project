// @flow

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import start from './start';
import menu from './menu';

export default combineReducers({
  routing,
  start,
  menu
});
