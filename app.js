const express = require('express');

const mongoose = require('mongoose');

const { ApolloServer } = require('apollo-server-express');

const path = require('path');
const bodyParser = require('body-parser');

const { database, appConfig } = require('./config');

const schema  = require('./schema');

const resolvers = require('./resolvers');

const bookstore_router = require('./routers/bookstore_router');

const graqphql_server = express();


//const app = express();

const server = new ApolloServer({
    typeDefs: schema,  
    resolvers  ,
    formatError: error => {
        console.log(error);
        return new Error('Internal server error');
      },
});

graqphql_server.set('views', path.join(__dirname, 'public'));
graqphql_server.use(express.static(path.join(__dirname, 'public')));
graqphql_server.use(bodyParser.json());
graqphql_server.use(bodyParser.urlencoded({ extended: false }));

graqphql_server.use('/bookstore', bookstore_router);
  

mongoose.connect(database.url)
        .then(
            () => {
                server.applyMiddleware( { app:graqphql_server, path: "/bookstore-graphql" });

                graqphql_server.listen( { port : appConfig.bookstore_port }, () => {
                    console.log(`Bookstore start on port  ${appConfig.graphql_port}`)
                })

                graqphql_server.listen( {port : appConfig.graphql_port, path: "/bookstore"}, () =>  {
                    console.log(`Bookstore GraphQL start on port  ${appConfig.bookstore_port}`)
                })
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
  


