import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'


const link = new HttpLink({
  uri: 'http://localhost:4000/'
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

