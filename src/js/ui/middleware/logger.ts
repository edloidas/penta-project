import { MiddlewareAPI, Dispatch, AnyAction } from 'redux';

// eslint-disable-next-line no-unused-vars
export default (middleware: MiddlewareAPI<any>) => (next: Dispatch<AnyAction>) => action => {
  console.log(action);
  return next(action);
};
