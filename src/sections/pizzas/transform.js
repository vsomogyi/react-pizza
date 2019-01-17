import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes, mapProps } from 'recompose';

const transformProps = ({ pizzas }) => {
  return {
    data: pizzas.pizzaSizes || [],
  };
};

const enhance = compose(
  setDisplayName('PizzasTransform'),
  setPropTypes({
    pizzas: PropTypes.object,
  }),
  mapProps(transformProps),
);

export default enhance;
