const data = require("./storeService");
const yup = require("yup");

const createStoreSchema = yup.object().shape({
    name: yup.string().min(1).max(255).required(),
    city: yup.string().max(255),
    number: yup.number().positive().integer(),
    postalCode: yup.string().max(4),
    street: yup.string().max(255),
});

// Resolvers define the technique for fetching the types in the
// schema.
module.exports = {
    Query: {
        stores: () => data.getStores(),
    },
    Mutation: {
        createStore: async (parent, { input }) => {
            try {
                await createStoreSchema.validate(input);
            } catch (e) {
                throw new UserInputError("Invalid input.", { validationErrors: e.errors });
            }
            const { name, city, postalCode, street, number } = input;
            return data.createStore({ name, city, postalCode, street, number });
        },
    },
};
