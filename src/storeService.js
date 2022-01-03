const stores = require("./data").stores;
const products = require("./data").products;
const uuid = require("uuid");

function createStore({ name, city, postalCode, street, number }) {
    const newStore = { id: uuid(), name, city, postalCode, street, number };
    stores.push(newStore);
    return newStore;
}

function getStores() {
    return stores;
}

function getStore(storeId) {
    return stores.find((s) => s.id === storeId);
}

function getStoreProducts(storeId) {
    return products.filter((p) => p.storeId === storeId);
}

module.exports = {
    createStore,
    getStores,
    getStore,
    getStoreProducts,
};
