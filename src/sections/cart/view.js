import './styles.css';
import React from 'react';

const CartView = ({ items, removeItem }) => (
  <div className="cart">
    <h2>Cart</h2>
    {items.map((item, i) => (
      <div className="cart__item" key={i}>
        <div className="cart__subitem">
          <label className="cart__label">Pizza size:</label>
          <span className="cart__value">{item.size}</span>
        </div>
        <div className="cart__subitem">
          <label className="cart__label">Selected toppings:</label>
          <span className="cart__value">
            {item.selectedToppings.map(topping => (
              <span className="cart__topping" key={topping}>
                {topping}
              </span>
            ))}
          </span>
        </div>
        <div className="cart__subitem">
          <label className="cart__label">Price:</label>
          <span className="cart__value">{item.price}</span>
        </div>
        <div className="cart__remove" onClick={() => removeItem(item.id)}>
          remove
        </div>
      </div>
    ))}
  </div>
);

export default CartView;
