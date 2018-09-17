const express = require('express');

const mongoose = require('mongoose');

const { ApolloServer } = require('apollo-server-express');

const { database, appConfig } = require('./config');

const schema  = require('./schema');

const resolvers = require('./resolvers');

const app = express();



const server = new ApolloServer({
    typeDefs: schema,  
    resolvers  ,
    formatError: error => {
        console.log(error);
        return new Error('Internal server error');
      },
});

mongoose.connect(database.url)
        .then(
            () => {
                server.applyMiddleware( { app, path: "/bookstore" });

                app.listen( { port : appConfig.port }, () => {
                    console.log(`Bookstore start on port  ${appConfig.port}`)
                })
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
  


