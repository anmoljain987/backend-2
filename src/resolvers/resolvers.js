import { Detail } from "../models/details.model.js";
export const resolvers = {
  Query: {
    details: async (_, {}, {}) => {
      const res = await Detail.find();

      return res;
    },
  },
  Mutation: {
    createDetails: async (_, { name, phoneNumber, age }, { uid, email }) => {
      const User = await Detail.create({ name, phoneNumber, age, uid, email });
      return User;
    },
  },
  Detail: {
    user: async (detail) => {
      console.log({ detail });
      return { __typename: "User", uid: detail.uid };
    },
  },
};
