import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import Client from './store/client';
// import Pizzas from './sections/pizzas/index';
import PizzaForm from './sections/pizzaForm';
import createStore from './store/createStore';
import Cart from './sections/cart';

const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ApolloProvider client={Client}>
            <PizzaForm />
            <Cart />
          </ApolloProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
