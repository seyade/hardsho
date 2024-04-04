"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
import Input from "@/components/Input/Input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

	const navigate = useRouter();

	const onHandleSubmit = async (data: User) => {
		console.log("FormDATA: ", data);
		navigate.push("/dashboard");
	};

	return (
		<div className="py-2 px-11">
			<header className="flex mb-6">
				<h1 className="text-3xl font-extrabold">.Onbod</h1>
			</header>

			<section className="opensans flex flex-col justify-center text-center p-11 m-auto w-1/3">
				<h2 className="spacegrotesk mb-4 text-4xl font-extrabold">Sign Up</h2>

				<p className="mb-4 font-semibold text-zinc-500">
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

					<Button type="submit" className="w-full mb-4">
						Create Account
					</Button>

					<div>
						<p className="mb-4 font-semibold text-zinc-500">
							Already have an account?{" "}
							<Link className="text-blue-800 font-bold" href="/login">
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
