import React from 'react';
import { Form, FieldArray } from 'formik';

const PizzaFormView = ({
  values,
  toppings,
  totalPrice,
  setTotalPrice,
  maxToppings,
  isChecked,
  isDisabled,
  onChange,
}) => (
  <div className="pizza-form__toppings">
    <Form>
      <FieldArray
        name="selectedToppings"
        render={arrayHelpers => (
          <div>
            {toppings.map(topping => (
              <div key={topping.name}>
                <label>
                  <input
                    name="selectedToppings"
                    type="checkbox"
                    value={topping.name}
                    checked={isChecked(values, topping)}
                    disabled={isDisabled(values, topping)}
                    onChange={onChange(arrayHelpers, values, topping)}
                  />
                  {topping.name} (+{topping.price})
                </label>
              </div>
            ))}
          </div>
        )}
      />
      <label className="pizza-form__label">Total price</label>
      <div className="pizza-form__price">{totalPrice}</div>
      <button className="pizza-form__button" type="submit">
        Add to cart
      </button>
    </Form>
  </div>
);

export default PizzaFormView;
