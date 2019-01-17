import React from 'react';
import { Form, FieldArray } from 'formik';

const PizzaFormView = ({ values, toppings }) => (
  <div>
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
                    checked={values.selectedToppings.includes(topping.name)}
                    disabled={
                      values.maxToppings &&
                      values.selectedToppings.length >= values.maxToppings &&
                      !values.selectedToppings.includes(topping.name)
                    }
                    onChange={e => {
                      if (e.target.checked) {
                        arrayHelpers.push(topping.name);
                        values.price = values.price + topping.price;
                      } else {
                        const idx = values.selectedToppings.indexOf(
                          topping.name,
                        );
                        arrayHelpers.remove(idx);
                        values.price = values.price - topping.price;
                      }
                    }}
                  />
                  {topping.name} (+{topping.price})
                </label>
              </div>
            ))}
          </div>
        )}
      />
      <hr />
      <div>Price: {values.price}</div>
      <button type="submit">Order</button>
    </Form>
  </div>
);

export default PizzaFormView;
