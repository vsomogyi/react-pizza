import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { create } from '../../../store/cart/actions';
import { uniqueId } from 'lodash/fp';
import { withFormik } from 'formik';
import {
  compose,
  setDisplayName,
  setPropTypes,
  withState,
  withProps,
} from 'recompose';

const handleSubmit = (values, { props }) => {
  props.addToCart(values);
};

const mapPropsToValues = ({ toppings }) => ({
  selectedToppings: toppings
    .filter(topping => topping.defaultSelected)
    .map(topping => topping.name),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: values => {
      dispatch(
        create({
          id: uniqueId(),
          size: ownProps.pizzaSize,
          selectedToppings: values.selectedToppings,
          price: ownProps.totalPrice,
        }),
      );
    },
  };
};

const isChecked = (values, topping) =>
  values.selectedToppings.includes(topping.name);

const isDisabled = maxToppings => (values, topping) =>
  maxToppings &&
  values.selectedToppings.length >= maxToppings &&
  !values.selectedToppings.includes(topping.name);

const onChange = (setTotalPrice, totalPrice) => (
  arrayHelpers,
  values,
  topping,
) => e => {
  if (e.target.checked) {
    arrayHelpers.push(topping.name);
    setTotalPrice(totalPrice + topping.price);
  } else {
    const idx = values.selectedToppings.indexOf(topping.name);
    arrayHelpers.remove(idx);
    setTotalPrice(totalPrice - topping.price);
  }
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
  withState('totalPrice', 'setTotalPrice', ({ toppings, basePrice }) =>
    toppings.reduce(
      (acc, topping) => (topping.defaultSelected ? acc + topping.price : acc),
      basePrice,
    ),
  ),
  connect(
    null,
    mapDispatchToProps,
  ),
  withFormik({
    displayName: 'PizzaForm',
    enableReinitialize: true,
    handleSubmit,
    mapPropsToValues,
  }),
  withProps(({ maxToppings, setTotalPrice, totalPrice }) => ({
    isChecked,
    isDisabled: isDisabled(maxToppings),
    onChange: onChange(setTotalPrice, totalPrice),
  })),
);
