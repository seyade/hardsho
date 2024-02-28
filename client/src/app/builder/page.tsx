"use client";

import Pane from "@/components/pane/Pane";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const Builder = () => {
	const [HTMLValue, setHTMLValue] = useState("");
	const [CSSValue, setCSSValue] = useState("");
	const [JSValue, setJSValue] = useState("");

	const iframeRef = useRef();

	const onHandleHTML = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.currentTarget;
		setHTMLValue(value);
	};

	const onHandleCSS = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.currentTarget;
		setCSSValue(value);
	};

	const onHandleJS = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.currentTarget;
		setJSValue(value);
	};

	const iframeContent = `
    <style>${CSSValue}</style>
    ${HTMLValue}
    <script>${JSValue}</script>
  `;

	return (
		<div className="px-12 py-6">
			<header className="mb-5">
				<h1 className="text-3xl font-bold">Builder</h1>
			</header>

			<section className="editorw-full h-[90vh]">
				<div className="code flex justify-between items-center gap-1 mb-2">
					<Pane onChange={onHandleHTML} paneTitle="HTML" rows={12} />

					<Pane onChange={onHandleCSS} paneTitle="CSS" rows={12} />

					<Pane onChange={onHandleJS} paneTitle="JavaScript" rows={12} />
				</div>

				<section className="output-pane w-full h-full">
					<iframe
						id="output"
						srcDoc={iframeContent}
						className="bg-rose-50 w-full h-full rounded-sm"
					/>
				</section>
			</section>
		</div>
	);
};

export default Builder;
