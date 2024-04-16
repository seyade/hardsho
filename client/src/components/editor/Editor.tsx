import { ChangeEvent, ComponentProps } from "react";

type EditorProps = {
	title?: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
} & ComponentProps<"textarea">;

const Editor = ({ onChange, title, ...props }: EditorProps) => {
	return (
		<div className="w-full h-full bg-white text-zinc-800 border-t-2 border-b-2 last:border-r-2 border-l-2 border-b-zinc-300">
			<h2 className="px-4 py-2 border-b-2 text-xs">{title}</h2>

			<textarea
				className="inconsolota font-bold p-4 border w-full h-full text-zinc-700 border-none resize-none outline-zinc-600"
				onChange={onChange}
				{...props}
			/>
		</div>
	);
};

export default Editor;
