import './App.css';
import Client from './store/client';
import Layout from './sections/layout';
import React, { Component } from 'react';
import createStore from './store/createStore';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ApolloProvider client={Client}>
            <Layout />
          </ApolloProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
