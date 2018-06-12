import { Store, Dispatch } from 'redux';
// eslint-disable-next-line no-unused-vars
export default (store: Store<any>) => (next: Dispatch<any>) => (action: PAction<any>) => {
  // eslint-disable-next-line no-console
  console.log(action);
  return next(action);
};
