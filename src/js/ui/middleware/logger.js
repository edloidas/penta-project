// eslint-disable-next-line no-unused-vars
export default store => next => action => {
  // eslint-disable-next-line no-console
  console.log(action);
  return next(action);
};
