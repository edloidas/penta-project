import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import main from './main';

export default combineReducers({
  routing,
  main
});
