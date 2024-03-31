import {
	dataStore,
	PostgrestResponse,
	PostgrestSingleResponse,
} from "../databaseConfig";
import { User, UserInput } from "../types";

const userResolver = {
	User: {
		id: (parent: any) => parent.id ?? parent._id,
	},
	Query: {
		async users(): Promise<User[]> {
			try {
				const { data, error }: PostgrestResponse<User> = await dataStore
					.from("users")
					.select("*");

				if (error) throw error;

				return data || [];
			} catch (error) {
				throw Error(`Query:Users Error message: ${error}`);
			}
		},

		async client(_: any, { id }: { id: number }) {
			try {
				const { data, error }: PostgrestResponse<User> = await dataStore
					.from("users")
					.select()
					.eq("id", id);

				if (error) throw error;

				return data[0] || null;
			} catch (error) {
				throw Error(`Query:User Error message: ${error}`);
			}
		},
	},
	Mutation: {
		async createClient(_: any, { input }: { input: UserInput }) {
			try {
				const { data, error }: PostgrestSingleResponse<User | null> =
					await dataStore.from("users").upsert([input]);

				if (error) {
					console.log("Create:User Error log: ", error);
					throw error;
				}

				return data ? data[0] : null;
			} catch (error) {
				throw Error(`Create:User Error message: ${error}`);
			}
		},

		async updateClient(
			_: any,
			{ id, input }: { id: string; input: UserInput }
		) {
			try {
				const { data, error }: PostgrestSingleResponse<User | null> =
					await dataStore.from("users").update(input).eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Update:User Error message: ${error}`);
			}
		},

		async deleteClient(_: any, { id }: { id: string }) {
			try {
				const { data, error }: PostgrestSingleResponse<User | null> =
					await dataStore.from("users").delete().eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Delete:User Error message: ${error}`);
			}
		},
	},
};

export default userResolver;
