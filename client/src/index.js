import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import App from './components/App.jsx';

const client = new ApolloClient({
  uri: 'http://0.0.0.0:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${localStorage.getItem('token') || ''}`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
