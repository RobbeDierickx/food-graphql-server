const stores = require("./data").stores;
const uuid = require("uuid");

function createStore({ name, city, postalCode, street, number }) {
    const newStore = { id: uuid(), name, city, postalCode, street, number };
    stores.push(newStore);
    return newStore;
}

function getStores() {
    return stores;
}

module.exports = {
    createStore,
    getStores,
};
