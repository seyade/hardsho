import * as React from "react";

import { cn } from "@/lib/utils";

type ExtraInputProps = {
	labelText?: string;
	error?: { message?: string };
	register: any;
};

export interface InputProps
	extends ExtraInputProps,
		React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, register, name, error, labelText, ...props }, ref) => {
		console.log("NAME:::", error);

		return (
			<div>
				{labelText && <label htmlFor={name}>{labelText}</label>}
				<input
					type={type}
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					{...register(name)}
					ref={ref}
					{...props}
				/>
				{error && <span className="text-red-800">{error?.message}</span>}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
