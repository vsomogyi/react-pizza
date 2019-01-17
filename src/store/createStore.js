import makeRootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};
