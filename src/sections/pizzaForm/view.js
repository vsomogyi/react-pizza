import './styles.css';
import React from 'react';
import Toppings from './toppings';

const PizzaFormView = ({ pizzaSizes, size, setSize }) => (
  <div className="pizza-form">
    <h2>Select pizza</h2>
    <form>
      <label className="pizza-form__label">Pizza size</label>
      <select name="size" onChange={setSize} className="pizza-form__select">
        {pizzaSizes.map(p => (
          <option value={p.name} key={p.name}>
            {p.name}
          </option>
        ))}
      </select>
    </form>
    <label className="pizza-form__label">Toppings</label>
    <Toppings pizzaSize={size} />
  </div>
);

export default PizzaFormView;
