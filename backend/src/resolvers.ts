import { createClient, PostgrestResponse } from "@supabase/supabase-js";
import {
	Project,
	CreateProjectInput,
	DeleteProjectInput,
	UpdateProjectInput,
} from "./types.js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
	process.env.SUPABASE_URL as string,
	process.env.SUPABASE_APIKEY as string
);

const resolvers = {
	Project: {
		id: (parent: any) => parent.id ?? parent._id,
	},
	Query: {
		async getProjects(): Promise<Project[]> {
			try {
				const { data, error }: PostgrestResponse<Project> = await supabase
					.from("projects")
					.select("*");

				if (error) throw error;

				return data || [];
			} catch (error) {
				throw Error(`Query:Projects Error message: ${error}`);
			}
		},

		async getOneProject(_parent: any, { id }: { id: number }) {
			try {
				const { data, error }: PostgrestResponse<Project> = await supabase
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
		async createProject(
			_parent: any,
			{ input }: { input: CreateProjectInput }
		) {
			try {
				const { data, error } = await supabase.from("projects").upsert([input]);

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
			_parent: any,
			{ input }: { input: UpdateProjectInput }
		) {
			try {
				const { data, error } = await supabase
					.from("projects")
					.update(input)
					.eq("id", input.id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Update:Project Error  message: ${error}`);
			}
		},

		async deleteProject(
			_parent: any,
			{ input }: { input: DeleteProjectInput }
		) {
			try {
				const { data, error } = await supabase
					.from("projects")
					.delete()
					.eq("id", input.id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Delete:Project Error  message: ${error}`);
			}
		},
	},
};

export default resolvers;
