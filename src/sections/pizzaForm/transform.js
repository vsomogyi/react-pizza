import {
  compose,
  setDisplayName,
  setPropTypes,
  mapProps,
  withState,
} from 'recompose';
import PropTypes from 'prop-types';

const transformProps = ({ size, setSize, data }) => ({
  size,
  setSize: e => setSize(e.target.value.toUpperCase()),
  pizzaSizes: data.pizzaSizes || [],
});

export default compose(
  setDisplayName('PizzaFormTransform'),
  setPropTypes({
    data: PropTypes.object,
  }),
  withState('size', 'setSize', ({ data }) =>
    data.pizzaSizes[0].name.toUpperCase(),
  ),
  mapProps(transformProps),
);
