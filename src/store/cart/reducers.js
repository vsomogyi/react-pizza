import * as actions from './actions';
import I from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = I.Map({
  items: I.List(),
});

const handleCreate = (state, { payload }) => {
  console.log(state.updateIn(['items'], value => value.merge(payload)));
  return state.updateIn(['items'], value => value.merge(payload));
};

export default handleActions(
  {
    [actions.create]: handleCreate,
  },
  initialState,
);
