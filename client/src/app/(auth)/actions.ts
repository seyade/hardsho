import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export const signUp = async (formData: any) => {
	console.log("DATA:::", formData);

	const supabase = await createClient();
	const { error } = await supabase.auth.signUp({
		email: formData.email,
		password: formData.password,
	});

	if (error) throw Error(`Oops:: ${error}`);

	revalidatePath("/", "layout");
	redirect("/dashboard");
};

export const signIn = async (formData: any) => {
	const supabase = await createClient();
	const { error } = await supabase.auth.signInWithPassword({
		email: formData?.email,
		password: formData?.password,
	});

	if (error) throw Error(`Oops:: ${error}`);

	revalidatePath("/", "layout");
	redirect("/dashboard");
};

export const signOut = async () => {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) await supabase.auth.signOut();
};
