import cart from './cart/reducers';
import { combineReducers } from 'redux';

export const makeRootReducer = asyncReducers => {
  let combined = combineReducers({
    cart,
    ...asyncReducers,
  });

  return (prevState, action) => {
    let state = prevState;

    return combined(state, action);
  };
};

export default makeRootReducer;
