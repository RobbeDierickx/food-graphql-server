const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
module.exports = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.
    # This "Store" type can be used in other type declarations.
    type Product {
        id: String
        name: String
        description: String
        price: Float
    }

    type Store {
        city: String
        id: String
        name: String
        number: Int
        postalCode: String
        street: String
        products: [Product]
    }

    # The "Query" type is the root of all GraphQL queries.
    # (A "Mutation" type will be covered later on.)
    type Query {
        stores: [Store]
        store(id: String): Store
    }

    input StoreInput {
        city: String
        name: String
        number: Int
        postalCode: String
        street: String
    }

    type Mutation {
        createStore(input: StoreInput): Store
    }
`;
