import { MiddlewareAPI, Dispatch } from 'redux';

// eslint-disable-next-line no-unused-vars
export default (middleware: MiddlewareAPI<any>) => (next: Dispatch<any>) => action => {
  console.log(action);
  return next(action);
};
