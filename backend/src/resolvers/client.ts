import {
	dataStore,
	PostgrestResponse,
	PostgrestSingleResponse,
} from "../databaseConfig/index.js";
import { Client, ClientInput } from "../types.js";

const clientResolver = {
	Client: {
		id: (parent: any) => parent.id ?? parent._id,
	},
	Query: {
		async clients(_: any, { userId }: { userId: string }): Promise<Client[]> {
			try {
				const { data, error }: PostgrestResponse<Client> = await dataStore
					.from("clients")
					.select()
					.eq("userId", userId);

				if (error) throw error;

				return data || [];
			} catch (error) {
				throw Error(`Query:Clients Error message: ${error}`);
			}
		},

		async client(_: any, { id }: { id: number }) {
			try {
				const { data, error }: PostgrestResponse<Client> = await dataStore
					.from("clients")
					.select()
					.eq("id", id);

				if (error) throw error;

				return data[0] || null;
			} catch (error) {
				throw Error(`Query:Client Error message: ${error}`);
			}
		},
	},
	Mutation: {
		async createClient(
			_: any,
			{ userId, input }: { userId: string; input: ClientInput }
		) {
			try {
				const { data, error }: PostgrestSingleResponse<Client | null> =
					await dataStore.from("clients").upsert([{ ...input, userId }]);

				if (error) {
					console.log("Create:Client Error log: ", error);
					throw error;
				}

				return data ? data[0] : null;
			} catch (error) {
				throw Error(`Create:Client Error message: ${error}`);
			}
		},

		async updateClient(
			_: any,
			{ id, input }: { id: string; input: ClientInput }
		) {
			try {
				const { data, error }: PostgrestSingleResponse<Client | null> =
					await dataStore.from("clients").update(input).eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Update:Client Error message: ${error}`);
			}
		},

		async deleteClient(_: any, { id }: { id: string }) {
			try {
				const { data, error }: PostgrestSingleResponse<Client | null> =
					await dataStore.from("clients").delete().eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Delete:Client Error message: ${error}`);
			}
		},
	},
};

export default clientResolver;
