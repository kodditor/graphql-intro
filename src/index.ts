import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { Resolvers } from "./generated/graphql.js";
import { queryResolvers } from "./resolvers/queries.js";
import { mutationResolvers } from "./resolvers/mutations.js";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: parseInt(process.env.PORT, 10) || 4000,
  },
});

console.log(`Started serving on ${url}`);
