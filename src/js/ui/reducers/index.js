// @flow

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import startScreen from './startScreen';
import mainMenu from './mainMenu';

export default combineReducers({
  routing,
  startScreen,
  mainMenu
});
