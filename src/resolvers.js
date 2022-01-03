const data = require("./data");

module.exports = {
    Query: {
        stores: () => data.getStores(),
    },
};
