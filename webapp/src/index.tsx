
import * as React  from 'react';
import * as ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './App';

const httpLink = createHttpLink({
    uri: 'http://localhost:8070/bookstore-graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <HashRouter>
            <App/>  
        </HashRouter>       
    </ApolloProvider>,

    document.getElementById('container')
)