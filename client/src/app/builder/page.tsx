"use client";

import { ChangeEvent, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { LuCode2, LuEye } from "react-icons/lu";
import Pane from "@/components/pane/Pane";
import { CREATE_PROJECTS } from "@/graphql/mutations";
import { Button } from "@/components/ui/button";

const Builder = () => {
	const [HTMLValue, setHTMLValue] = useState("");
	const [CSSValue, setCSSValue] = useState("");
	const [JSValue, setJSValue] = useState("");

	const iframeRef = useRef();

	const [createProject, { error, loading }] = useMutation(CREATE_PROJECTS);

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

	const saveProject = async () => {
		createProject({
			variables: {
				input: {
					projectName: "Test 1",
					description: "Test 1 description",
					uiCode: HTMLValue,
					cssCode: CSSValue,
					jsCode: JSValue,
				},
			},
		})
			.then(result => {
				console.log(result.data.createProject);
				console.log("PROJECT_SAVED:::");
			})
			.catch(error => {
				console.error(error);
			});
	};

	const iframeContent = `
    <style>${CSSValue}</style>
    ${HTMLValue}
    <script>${JSValue}</script>
  `;

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;

	return (
		<div className="px-12 py-6">
			<header className="flex justify-between items-center mb-5 w-full">
				<h1 className="flex items-center text-3xl font-bold">
					<span className="mr-2">Builder</span> <LuCode2 />
				</h1>

				<Button onClick={saveProject}>Save Project</Button>
			</header>

			{/* <code>
				HTML: <h1>Title here</h1>
				CSS: h1 { font-family: "Open Sans", sans-serif; color: teal; }
				JS: const title = document.querySelector('h1');
				title.addEventListener('click', () => {
					alert('Title is clicked');
				})
			</code> */}

			<section className="editorw-full h-[90vh]">
				<div className="code flex justify-between items-center">
					<Pane onChange={onHandleHTML} paneTitle="HTML" rows={12} />

					<Pane onChange={onHandleCSS} paneTitle="CSS" rows={12} />

					<Pane onChange={onHandleJS} paneTitle="JavaScript" rows={12} />
				</div>

				<section className="output-pane w-full h-full">
					<div className="flex py-2 px-3 border-l-2 border-r-2 border-b-2 border-b-zinc-300">
						<h3 className="flex items-center">
							<span className="mr-2 text-sm">Code</span>
							<LuEye />
						</h3>
					</div>
					<iframe
						id="output"
						srcDoc={iframeContent}
						className="bg-zinc-50 w-full h-3/4 border-r-2 border-l-2 border-b-2"
					/>
				</section>
			</section>
		</div>
	);
};

export default Builder;
