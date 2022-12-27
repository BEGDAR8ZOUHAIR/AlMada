const { projects, clients } = require('../sampleData.js');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
} = require('graphql')

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } }, // args is an object that contains the arguments that we pass to the query
            resolve(parent, args)
            {
                return clients.find((client) => client.id === args.id);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});






