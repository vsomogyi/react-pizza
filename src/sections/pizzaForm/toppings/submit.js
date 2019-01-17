import { compose, setDisplayName, setPropTypes, withState } from 'recompose';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { create } from '../../../store/cart/actions';

const handleSubmit = (values, { props }) => {
  console.log({ values, props });
  props.addToCart(values);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    addToCart: values => {
      dispatch(
        create({
          size: values.size,
          selectedToppings: values.selectedToppings,
          price: values.price,
        }),
      );
    },
  };
};

export default compose(
  setDisplayName('ToppingsSubmit'),
  setPropTypes({
    pizzaSize: PropTypes.oneOf(['SMALL', 'MEDIUM', 'LARGE']),
    basePrice: PropTypes.number,
    maxToppings: PropTypes.number,
    toppings: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        defaultSelected: PropTypes.bool,
      }),
    ),
  }),
  connect(
    null,
    mapDispatchToProps,
  ),
  // withState('totalPrice', 'setTotalPrice', ({ toppings }) =>
  //   toppings.reduce(
  //     (acc, topping) => (topping.defaultSelected ? acc + topping.price : acc),
  //     0,
  //   ),
  // ),
  withFormik({
    displayName: 'PizzaForm',
    handleSubmit,
    enableReinitialize: true,
    mapPropsToValues: ({ pizzaSize, toppings, basePrice, maxToppings }) => ({
      size: pizzaSize,
      maxToppings,
      selectedToppings: toppings
        .filter(topping => topping.defaultSelected)
        .map(topping => topping.name),
      price:
        basePrice +
        toppings.reduce(
          (acc, topping) =>
            topping.defaultSelected ? acc + topping.price : acc,
          0,
        ),
    }),
  }),
  // withProps(({ toppings, values }) => ({
  //   toppingSum: toppings
  //     .filter(topping => values.selectedToppings.includes(topping.name))
  //     .reduce((acc, cur) => acc + cur.price, 0),
  // })),
);
