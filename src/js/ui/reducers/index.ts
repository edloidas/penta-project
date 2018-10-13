import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import game from './game';
import settings from './settings';
import start from './start';

export default combineReducers({
  routing,
  start,
  game,
  settings,
});
