import * as actions from './actions';
import I from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = I.Map({
  items: I.List(),
});

const handleCreate = (state, { payload }) => {
  return state.updateIn(['items'], value => value.merge(payload));
};

const handleRemove = (state, { payload }) => {
  return state.updateIn(['items'], value =>
    value.filter(item => {
      return item.id !== payload;
    }),
  );
};

export default handleActions(
  {
    [actions.create]: handleCreate,
    [actions.remove]: handleRemove,
  },
  initialState,
);
