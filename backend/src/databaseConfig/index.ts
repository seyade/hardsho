import {
	createClient,
	PostgrestResponse,
	PostgrestSingleResponse,
} from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

console.log("ENV::", process.env.SUPABASE_URL!, process.env.SUPABASE_APIKEY!);

const dataStore = createClient(
	process.env.SUPABASE_URL!,
	process.env.SUPABASE_APIKEY!
);

export { dataStore, PostgrestResponse, PostgrestSingleResponse };
