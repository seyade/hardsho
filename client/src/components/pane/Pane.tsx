import { ChangeEvent, ComponentProps } from "react";

type PaneProps = {
	paneTitle?: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
} & ComponentProps<"textarea">;

const Pane = ({ onChange, paneTitle, ...props }: PaneProps) => {
	return (
		<div className="css-pane w-full h-full bg-white text-zinc-800 border-t-2 border-b-2 last:border-r-2 border-l-2 border-b-zinc-300">
			<h2 className="px-4 py-2 border-b-2 text-xs">{paneTitle}</h2>

			<textarea
				className="inconsolota font-bold p-4 border w-full h-full text-zinc-700 border-none resize-none outline-zinc-600"
				onChange={onChange}
				{...props}
			/>
		</div>
	);
};

export default Pane;
