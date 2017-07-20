// @flow

// eslint-disable-next-line no-unused-vars
export default (store: Store) => (next: Dispatch) => (action: PAction<any>) => {
  // eslint-disable-next-line no-console
  console.log(action);
  return next(action);
};
