import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes, mapProps } from 'recompose';
import { getOr } from 'lodash/fp';

const transformProps = ({ data, pizzaSize }) => ({
  basePrice: getOr(0, 'basePrice', data.pizzaSizeByName),
  maxToppings: getOr(null, 'maxToppings', data.pizzaSizeByName),
  toppings: getOr([], 'toppings', data.pizzaSizeByName).map(t => ({
    name: t.topping.name,
    price: t.topping.price,
    defaultSelected: t.defaultSelected,
  })),
  pizzaSize,
});

export default compose(
  setDisplayName('ToppingsTransform'),
  setPropTypes({
    pizzaSize: PropTypes.oneOf(['SMALL', 'MEDIUM', 'LARGE']),
    data: PropTypes.object,
  }),
  mapProps(transformProps),
);
