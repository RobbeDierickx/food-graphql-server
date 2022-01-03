const { gql } = require("apollo-server");

module.exports = gql`
    type Store {
        id: ID
        name: String
    }

    type Query {
        stores: [Store]
    }
`;
