import {
	createClient,
	PostgrestResponse,
	PostgrestSingleResponse,
} from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const dataStore = createClient(
	process.env.SUPABASE_URL as string,
	process.env.SUPABASE_APIKEY as string
);

export { dataStore, PostgrestResponse, PostgrestSingleResponse };
