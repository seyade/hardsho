import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import {
	dataStore,
	PostgrestResponse,
	PostgrestSingleResponse,
} from "../databaseConfig/index.js";
import { Craft, CraftInput } from "../types.js";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

const craftResolver = {
	Craft: {
		id: (parent: any) => parent.id ?? parent._id,
	},
	Query: {
		async crafts(
			_: any,
			{ projectId }: { projectId: string }
		): Promise<Craft[]> {
			try {
				const { data, error }: PostgrestResponse<Craft> = await dataStore
					.from("crafts")
					.select()
					.eq("projectId", projectId);

				if (error) throw error;

				return data || [];
			} catch (error) {
				throw Error(`Query:Crafts Error message: ${error}`);
			}
		},

		async craft(_: any, { id }: { id: string }) {
			try {
				const { data, error }: PostgrestResponse<Craft> = await dataStore
					.from("crafts")
					.select()
					.eq("id", id);

				if (error) throw error;

				return data[0] || null;
			} catch (error) {
				throw Error(`Query:Craft Error message: ${error}`);
			}
		},
	},
	Mutation: {
		async createCraft(
			_: any,
			{ projectId, input }: { projectId: string; input: CraftInput }
		) {
			try {
				const { data, error }: PostgrestSingleResponse<Craft | null> =
					await dataStore.from("crafts").upsert([
						{
							...input,
							projectId,
							htmlCode: input.htmlCode && purify.sanitize(input.htmlCode),
							cssCode: input.cssCode && purify.sanitize(input.cssCode),
							jsCode: input.jsCode && purify.sanitize(input.jsCode),
						},
					]);

				if (error) {
					console.log("Create:Craft Error  log: ", error);
					throw error;
				}

				return data ? data[0] : null;
			} catch (error) {
				throw Error(`Create:Craft Error  message: ${error}`);
			}
		},

		async updateCraft(
			_: any,
			{ id, input }: { id: string; input: CraftInput }
		) {
			try {
				const { data, error }: PostgrestSingleResponse<Craft | null> =
					await dataStore
						.from("crafts")
						.update({
							...input,
							htmlCode: input.htmlCode && purify.sanitize(input.htmlCode),
							cssCode: input.cssCode && purify.sanitize(input.cssCode),
							jsCode: input.jsCode && purify.sanitize(input.jsCode),
						})
						.eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Update:Craft Error  message: ${error}`);
			}
		},

		async deleteCraft(_: any, { id }: { id: string }) {
			try {
				const { data, error }: PostgrestSingleResponse<Craft | null> =
					await dataStore.from("crafts").delete().eq("id", id);

				if (error) throw error;

				return data;
			} catch (error) {
				throw Error(`Delete:Craft Error  message: ${error}`);
			}
		},
	},
};

export default craftResolver;
