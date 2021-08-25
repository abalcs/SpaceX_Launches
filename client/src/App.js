import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import logo from './spacex_logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto'}}></img>
          <Launches />
        </div>
      </ApolloProvider>
    );
  } 
}

export default App;
