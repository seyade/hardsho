import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user";
import clientResolver from "./client";
import projectResolver from "./project";
import craftResolver from "./craft";

export default mergeResolvers([
	userResolver,
	clientResolver,
	projectResolver,
	craftResolver,
]);
