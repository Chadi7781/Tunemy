
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema } = graphql;
const _ = require('lodash')


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        status : {
            type: GraphQLString,
            resolve(parent, args) {
                return "Welcome To GraphQl"
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});