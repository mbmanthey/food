import React, { Component } from 'react';

import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { StackNavigator } from 'react-navigation';
import PlaceScreen from './app/screens/PlaceScreen';
import HomeScreen from './app/screens/HomeScreen';
import Context from './app/lib/Context';

const keys = require('./config.json')
const token = keys.YelpAuth
const link = createHttpLink({
  uri: 'https://api.yelp.com/v3/graphql',
  headers : {
    authorization: token ? `Bearer ${token}` : "",
  }
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Places: {
      screen: PlaceScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
)

export default class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Context>
        <ApolloProvider client={client}>
          <RootStack/>
        </ApolloProvider>
      </Context>
    )
  }
}
