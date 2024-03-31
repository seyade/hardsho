import { v4 as uuid4 } from "uuid";
import {
	dataStore,
	PostgrestResponse,
	PostgrestSingleResponse,
} from "../databaseConfig/index.js";
import { Project, ProjectInput } from "../types.js";

const projectResolver = {
	Project: {
		id: (parent: any) => parent.id ?? parent._id,
	},
	Query: {
		async projects(
			_any: any,
			{ clientId }: { clientId: string }
		): Promise<Project[]> {
			try {
				const { data, error }: PostgrestResponse<Project> = await dataStore
					.from("projects")
					.select()
					.eq("clientId", clientId);

				if (error) throw error;

				return data || [];
			} catch (error) {
				throw Error(`Query:Projects Error message: ${error}`);
			}
		},

		async project(_: any, { id }: { id: number }) {
			try {
				const { data, error }: PostgrestResponse<Project> = await dataStore
					.from("projects")
					.select()
					.eq("id", id);

				if (error) throw error;

				return data[0] || null;
			} catch (error) {
				throw Error(`Query:Project Error message: ${error}`);
			}
		},
	},
	Mutation: {
		async createProject(_: any, { input }: { input: ProjectInput }) {
			try {
				const { data, error }: PostgrestSingleResponse<Project | null> =
					await dataStore.from("projects").upsert([input]);

				if (error) {
					console.log("Create:Project Error  log: ", error);
					throw error;
				}

				return data ? data[0] : null;
			} catch (error) {
				throw Error(`Create:Project Error  message: ${error}`);
			}
		},

		async updateProject(
			_: any,
			{ id, input }: { id: string; input: ProjectInput }
		) {
			try {
				const { data, error }: PostgrestSingleResponse<Project | null> =
					await dataStore.from("projects").update(input).eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Update:Project Error  message: ${error}`);
			}
		},

		async deleteProject(_: any, { id }: { id: string }) {
			try {
				const { data, error }: PostgrestSingleResponse<Project | null> =
					await dataStore.from("projects").delete().eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Delete:Project Error  message: ${error}`);
			}
		},
	},
};

export default projectResolver;
