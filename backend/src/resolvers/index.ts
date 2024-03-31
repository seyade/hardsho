import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.js";
import clientResolver from "./client.js";
import projectResolver from "./project.js";
import craftResolver from "./craft.js";

export default mergeResolvers([
	userResolver,
	clientResolver,
	projectResolver,
	craftResolver,
]);
