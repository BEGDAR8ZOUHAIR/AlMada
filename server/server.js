const express = require('express');
const dotenv = require("dotenv").config(); // import dotenv
const port = process.env.PORT || 6000; 
// const cors = require("cors"); // import cors
const connectDB = require("./config/db"); // import db connection
// const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');


// Connect to database
connectDB();

// Créez votre schéma GraphQL en utilisant la syntaxe de type GraphQL SDL (Domain Specific Language)
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Définissez les resolvers qui seront utilisés pour résoudre les requêtes et mutations envoyées au serveur
const rootValue = {
    message: () => 'Hello World!'
};

const app = express();

// Utilisez le middleware GraphQL pour gérer les requêtes GraphQL en utilisant votre schéma et vos resolvers
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`Server is running on port Server is running on http://localhost:${port}/graphql`);
});

