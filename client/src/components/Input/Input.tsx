import React from "react";

type InputProps = {
	name: string;
	type?: string;
	labelText?: string;
	error?: { message?: string };
	register: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
	name,
	type,
	error,
	register,
	labelText,
	...props
}: InputProps) => {
	return (
		<div>
			{labelText && <label htmlFor={name}>{labelText}</label>}
			<input
				type={type}
				className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				{...register(name)}
				{...props}
			/>
			{error && <span className="text-red-700">{error.message}</span>}
		</div>
	);
};

export default Input;
