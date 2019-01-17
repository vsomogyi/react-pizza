import { compose, setDisplayName } from 'recompose';
import { graphql } from 'react-apollo';
import { getAllData } from '../../store/pizzas/queries';
import withLoader from '../../hoc/withLoader';

export default compose(
  setDisplayName('PizzasSelect'),
  graphql(getAllData, {
    name: 'pizzas',
    // Use the transform in the transform layer so we can rely on the withLoader
    // props: props => {
    //   return {
    //     pizzas: props.pizzas.pizzaSizes,
    //   };
    // },
  }),
  withLoader('pizzas'),
);
