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
	email: string;
	password: string;
};

const LoginSchema = z.object({
	email: z.string().email("This is not an email."),
	password: z
		.string()
		.min(6, { message: "Password is too short, min. 6 characters" })
		.max(20, { message: "Password too long, not more than 20 characters" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
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
				<h2 className="spacegrotesk mb-4 text-4xl font-extrabold">Login</h2>

				<p className="mb-4 font-semibold text-zinc-500">Welcome back.</p>
				<form onSubmit={handleSubmit(onHandleSubmit)}>
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

					<Button type="submit" className="w-full mb-4">
						Login
					</Button>

					<div>
						<p className="mb-4 font-semibold text-zinc-500">
							Don&apos;t have an account yet?{" "}
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

export default Login;
