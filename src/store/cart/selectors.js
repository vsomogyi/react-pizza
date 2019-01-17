const rootSelector = state => state.cart;

export const getItems = state => rootSelector(state).getIn(['items']);
