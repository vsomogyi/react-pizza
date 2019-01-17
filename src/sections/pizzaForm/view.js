import React from 'react';
import Toppings from './toppings';

const PizzaFormView = ({ pizzaSizes, size, setSize }) => (
  <div>
    <form>
      <select name="size" onChange={setSize}>
        {pizzaSizes.map(p => (
          <option value={p.name.toUpperCase()} key={p.name}>
            {p.name}
          </option>
        ))}
      </select>
    </form>
    <hr />
    <Toppings pizzaSize={size} />
    {size}
  </div>
);

export default PizzaFormView;
