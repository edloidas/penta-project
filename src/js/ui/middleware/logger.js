// eslint-disable-next-line no-unused-vars
export default store => next => (action) => {
  console.log(action);
  return next(action);
};
