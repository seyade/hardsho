"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
import Input from "@/components/Input/Input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import Header from "@/components/header/Header";

type User = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const SignUpSchema = z
	.object({
		username: z
			.string()
			.min(3, { message: "Username should be min. 3 characters" }),
		email: z.string().email("This is not an email."),
		password: z
			.string()
			.min(6, { message: "Password is too short, min. 6 characters" })
			.max(20, { message: "Password too long, not more than 20 characters" }),
		confirmPassword: z.string(),
	})
	.refine((data: User) => data.password === data.confirmPassword, {
		message: "Passwords don't match.",
		path: ["confirmPassword"],
	});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchemaType>({
		resolver: zodResolver(SignUpSchema),
	});

	const router = useRouter();

	const onHandleSubmit = async (data: User) => {
		console.log("FormDATA: ", data);

		const supabase = createClient();

		const { error } = await supabase.auth.signUp({
			email: data.email,
			password: data.password,
		});

		if (error) console.log(`Error msg::: ${error}`);

		// router.push("/dashboard");
	};

	return (
		<div className="plusjakartasans px-11 py-5">
			<Header />

			<section className="opensans flex flex-col justify-center text-center p-11 m-auto w-1/3">
				<h2 className="spacegrotesk mb-4 text-4xl font-medium">Sign Up</h2>

				<p className="mb-4 font-semibold text-zinc-200">
					Let&apos;s get started to show your craft.
				</p>

				<form onSubmit={handleSubmit(onHandleSubmit)}>
					<Input
						name="username"
						register={register}
						error={errors.username}
						placeholder="Username"
						className="w-full px-3 py-3 mb-4 rounded-md text-zinc-700 text-sm font-semibold bg-zinc-100"
					/>

					<Input
						name="email"
						register={register}
						error={errors.email}
						placeholder="Email"
						className="w-full px-3 py-3 mb-4 rounded-md text-zinc-700 text-sm font-semibold bg-zinc-100"
					/>

					<Input
						name="password"
						register={register}
						error={errors.password}
						placeholder="Password"
						type="password"
						className="w-full px-3 py-3 mb-4 rounded-md text-zinc-700 text-sm font-semibold bg-zinc-100"
					/>

					<Input
						name="confirmPassword"
						register={register}
						error={errors.confirmPassword}
						placeholder="Confirm Password"
						type="password"
						className="w-full px-3 py-3 mb-4 rounded-md text-zinc-700 text-sm font-semibold bg-zinc-100"
					/>

					<Button
						type="submit"
						className="w-full mb-4 bg-purple-950 hover:bg-purple-900 transition-all ease-in-out duration-300"
					>
						Create Account
					</Button>

					<div>
						<p className="mb-4 font-semibold text-zinc-200">
							Already have an account?{" "}
							<Link className="text-purple-700 font-bold" href="/login">
								Log in
							</Link>
						</p>
					</div>
				</form>
			</section>
		</div>
	);
};

export default SignUp;
