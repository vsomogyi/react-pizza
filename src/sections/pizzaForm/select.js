import { compose, setDisplayName } from 'recompose';
import { graphql } from 'react-apollo';
import { getPizzaSizes } from '../../store/pizzas/queries';
import withLoader from '../../hoc/withLoader';

export default compose(
  setDisplayName('PizzaFormSelect'),
  graphql(getPizzaSizes, {
    // Use the transform in the transform layer so we can rely on the withLoader
    // props: props => {
    //   return {
    //     data: props.data.pizzaSizes,
    //   };
    // },
  }),
  withLoader(),
);
