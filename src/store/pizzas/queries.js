import gql from 'graphql-tag';

export const getPizzaSizes = gql`
  {
    pizzaSizes {
      name
    }
  }
`;

export const getPizzaSize = gql`
  query PizzaSizeByName($name: PizzaSizes!) {
    pizzaSizeByName(name: $name) {
      basePrice
      maxToppings
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
    }
  }
`;

export const getAllData = gql`
  query {
    pizzaSizes {
      name
      maxToppings
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
      basePrice
    }
  }
`;
