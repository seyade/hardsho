"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
import Input from "@/components/Input/Input";
import { Button } from "@/components/ui/button";

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
		<div>
			<h1 className="text-3xl font-bold">Sign Up</h1>

			<section>
				<form onSubmit={handleSubmit(onHandleSubmit)}>
					<Input
						name="username"
						register={register}
						error={errors.username}
						placeholder="Username"
					/>

					<Input
						name="email"
						register={register}
						error={errors.email}
						placeholder="Email"
					/>

					<Input
						name="password"
						register={register}
						error={errors.password}
						placeholder="Password"
						type="password"
					/>

					<Input
						name="confirmPassword"
						register={register}
						error={errors.confirmPassword}
						placeholder="Confirm Password"
						type="password"
					/>

					<Button type="submit">Sign up</Button>
				</form>
			</section>
		</div>
	);
};

export default SignUp;
