
const Project = require('../models/Project');
const Client = require('../models/Client');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,

} = require('graphql');
const { Query } = require('mongoose');

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
// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLString },
        clientId: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        // this is the relationship between the project and the client
        client: {   
            type: ClientType,
            resolve(parent, args)
            {
                return clients.findById(parent.clientId);
            }
        }
    }),
});

// Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args)
            {
               return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } }, // args is an object that contains the arguments that we pass to the query
            resolve(parent, args)
            {
                return Project.findById(args.id);
            },
        },
    
        
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args)
            {
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } }, // args is an object that contains the arguments that we pass to the query
            resolve(parent, args)
            {
                return Client.findById(args.id);
            },
        },
    },
});
// MUtation
const mutation = new GraphQLObjectType ({
    name: 'Mutation',
    fields: {
        addClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) },  
            },
            resolve(parent, args)
            {
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,

                });
                return client.save();
            }
        } 
    }
    

});

module.exports = new GraphQLSchema({
    query: RootQuery,
});






