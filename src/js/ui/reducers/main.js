import { handleActions } from 'redux-actions';

const initialState = [{
  text: 'Use Redux',
  id: 0,
}];

export default handleActions({
  // eslint-disable-next-line object-shorthand
  'show about'(state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      text: action.payload,
    }, ...state];
  },
  // eslint-disable-next-line object-shorthand
  'exit game'(state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      text: action.payload,
    }, ...state];
  },
}, initialState);
