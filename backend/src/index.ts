import { readFileSync } from "fs";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";

dotenv.config();

const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 5000 },
});

console.log(`Graphql server runs at ${url}`);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", () => {});

app.listen(PORT, () => {
	console.log(`Hardsho app running on server host: ${PORT}`);
});
