import './styles.css';
import React from 'react';
import PizzaForm from '../../sections/pizzaForm';
import Cart from '../../sections/cart';

export default () => (
  <div className="layout">
    <h1>Waldo Pizza</h1>
    <PizzaForm />
    <Cart />
  </div>
);
