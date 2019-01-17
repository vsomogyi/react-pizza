import React from 'react';

const Pizzas = ({ data }) => {
  return (
    <div>
      {data.map(size => (
        <div key={size.name}>
          {size.name} : {size.maxToppings} : {size.basePrice}
        </div>
      ))}
    </div>
  );
};

export default Pizzas;
