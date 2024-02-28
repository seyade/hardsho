import { ChangeEvent, ComponentProps } from "react";

type PaneProps = {
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	paneTitle?: string;
} & ComponentProps<"textarea">;

const Pane = ({ onChange, paneTitle, ...props }: PaneProps) => {
	return (
		<div className="css-pane w-full h-full bg-zinc-800 text-white rounded-sm">
			<h2 className="px-4 py-2 border-b-2 border-b-zinc-700">{paneTitle}</h2>

			<textarea
				className="p-4 border w-full h-full bg-zinc-800 text-white border-none resize-none outline-zinc-600"
				onChange={onChange}
				{...props}
			></textarea>
		</div>
	);
};

export default Pane;
