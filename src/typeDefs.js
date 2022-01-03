const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
module.exports = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.
    # This "Store" type can be used in other type declarations.
    type Store {
        id: String
        name: String
        city: String
        postalCode: String
        street: String
        number: Int
    }

    # The "Query" type is the root of all GraphQL queries.
    # (A "Mutation" type will be covered later on.)
    type Query {
        stores: [Store]
    }

    input StoreInput {
        name: String
        city: String
        postalCode: String
        street: String
        number: String
    }

    type Mutation {
        createStore(input: StoreInput): Store
    }
`;
