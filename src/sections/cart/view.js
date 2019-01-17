import React from 'react';

const CartView = ({ items }) => <div>{items.map(i => JSON.stringify(i))}</div>;

export default CartView;
