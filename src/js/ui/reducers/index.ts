import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import start from './start';
import game from './game';
import settings from './settings';

export default combineReducers({
  routing,
  start,
  game,
  settings
});
