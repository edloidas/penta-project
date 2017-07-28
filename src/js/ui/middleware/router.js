// @flow
import { routerMiddleware } from 'react-router-redux';
import history from '../store/history';

export default routerMiddleware(history);
