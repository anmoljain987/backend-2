import { ApolloServer } from "apollo-server";
import { mongoose } from "mongoose";
import { resolvers } from "./resolvers/resolvers.js";
import { typeDefs } from "./typeDefs/typeDefs.js";
import { buildSubgraphSchema } from "@apollo/federation";
import "dotenv/config";
import { ApolloServerPluginInlineTraceDisabled } from "apollo-server-core";
const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  plugins: [ApolloServerPluginInlineTraceDisabled()],
  context: async ({ req }) => {
    const uid = req.headers["x-uid"];

    return {
      uid,
    };
  },
});
const { env } = process;

const PORT = env.PORT || 3006;

mongoose
  .connect(env.DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen({ port: PORT }).then(({ url }) => {
      console.log("Server Started on " + url);
    });
  })
  .catch((e) => console.log(e));
