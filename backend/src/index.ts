import { readFileSync } from "fs";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
// import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import {} from "@graphql-tools/merge";
// import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";
import { startStandaloneServer } from "@apollo/server/standalone";
// import resolvers from "./resolvers.example.js";
import rootResolver from "./resolvers/index.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT as string, 10) || 4000;

const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

const server = new ApolloServer({
	typeDefs,
	resolvers: rootResolver,
});

console.log("PORT:: ", typeof PORT);

const { url } = await startStandaloneServer(server, {
	listen: {
		port: 5000,
	},
	context: async ({ req }: any) => req,
});

console.log(`Apollo server running in ${url}`);

app.use("/project", (req: Request, res: Response) => {
	return res.status(200).json({
		message: "Enter the Hardsho app.",
		version: "1.0.0",
		name: "Hardsho",
	});
});

// ROUTES
app.get("/", (req: Request, res: Response) => {
	res.status(200).json({ app: "Hardsho", version: "1.0.0" });
});

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({ app: "Hardsho", version: "1.0.0" });
});

app.get("/projects", (req: Request, res: Response) => {
	res.status(200).json({ app: "Hardsho", method: "GET all projects" });
});

app.get("/projects/:id", (req: Request, res: Response) => {
	res.status(200).json({
		app: "Hardsho",
		method: "GET one project",
		projectId: req.params.id,
	});
});

app.post("/projects", (req: Request, res: Response) => {
	res.status(200).json({ app: "Hardsho", method: "CREATE a project" });
});

app.put("/projects/:id", (req: Request, res: Response) => {
	res.status(200).json({
		app: "Hardsho",
		method: "UPDATE a project",
		projectId: req.params.id,
	});
});

app.delete("/projects/:id", (req: Request, res: Response) => {
	res.status(200).json({
		app: "Hardsho",
		method: "DELETEa a project",
		projectId: req.params.id,
	});
});

app.listen(PORT, () => {
	console.log(`Hardsho app running on server host: ${PORT}`);
});
