import { compose, setDisplayName, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { getPizzaSize } from '../../../store/pizzas/queries';
import withLoader from '../../../hoc/withLoader';

export default compose(
  setDisplayName('ToppingsSelect'),
  setPropTypes({
    pizzaSize: PropTypes.string,
  }),
  graphql(getPizzaSize, {
    options: ({ pizzaSize }) => ({
      variables: { name: pizzaSize },
    }),
  }),
  withLoader(),
);
