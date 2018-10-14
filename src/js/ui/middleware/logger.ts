import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';

/* tslint:disable max-line-length no-console */
export default (middleware: MiddlewareAPI<any>) => (
  next: Dispatch<AnyAction>
) => action => {
  console.log(action);
  return next(action);
};
/* tslint:ensable max-line-length no-console */
