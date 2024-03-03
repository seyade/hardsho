import { readFileSync } from "fs";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

app.use("/project", (req: Request, res: Response) => {
	return res.status(200).json({
		message: "Enter the Hardsho app.",
		version: "1.0.0",
		name: "Hardsho",
	});
});

await server.start();

app.use("/graphql", cors(), express.json(), expressMiddleware(server));

app.listen(PORT, () => {
	console.log(`Hardsho app running on server host: ${PORT}`);
});
