"use client";

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { LuCode2, LuEye } from "react-icons/lu";
import Editor from "@/components/editor/Editor";
import {
	CREATE_PROJECTS,
	UPDATE_PROJECTS,
	DELETE_PROJECTS,
} from "@/graphql/mutations";
import { Button } from "@/components/ui/button";

const Builder = () => {
	const [HTMLValue, setHTMLValue] = useState("");
	const [CSSValue, setCSSValue] = useState("");
	const [JSValue, setJSValue] = useState("");

	const [createProject, { error: createError, loading: createLoading }] =
		useMutation(CREATE_PROJECTS);
	const [updateProject, { error: updateError, loading: updateLoading }] =
		useMutation(UPDATE_PROJECTS);
	const [deleteProject, { error: deleteError, loading: deleteLoading }] =
		useMutation(DELETE_PROJECTS);

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

	const editProject = async () => {
		updateProject({
			variables: {
				input: {
					id: "",
					projectName: "Test 1",
					projectDate: null,
					projectOrigin: null,
					description: "Test 1 description",
					uiCode: HTMLValue,
					cssCode: CSSValue,
					jsCode: JSValue,
				},
			},
		})
			.then(result => {
				console.log(result.data.updateProject);
				console.log("PROJECT_UPDATED:::");
			})
			.catch(error => {
				console.error(error);
			});
	};

	const removeProject = () => {
		deleteProject({
			variables: {
				id: "",
			},
		})
			.then(result => {
				console.log(result.data.deleteProject);
				console.log("PROJECT_UPDATED:::");
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

	if (createLoading || updateLoading || deleteLoading)
		return <h1>Loading...</h1>;

	if (createError) return <h1>{createError.message}</h1>;
	if (updateError) return <h1>{updateError.message}</h1>;
	if (deleteError) return <h1>{deleteError.message}</h1>;

	return (
		<div className="px-12 py-6">
			<header className="plusjakartasans flex justify-between items-center mb-5 w-full">
				<h1 className="flex items-center text-3xl font-bold">
					<span className="mr-2">Build Your Showcase</span> <LuCode2 />
				</h1>

				<Button onClick={saveProject}>Save Project</Button>
			</header>

			<section className="editorw-full h-[90vh]">
				<div className="code flex justify-between items-center">
					<Editor onChange={onHandleHTML} title="HTML" rows={12} />

					<Editor onChange={onHandleCSS} title="CSS" rows={12} />

					<Editor onChange={onHandleJS} title="JavaScript" rows={12} />
				</div>

				<section className="output-pane w-full h-full">
					<div className="flex py-2 px-3 border-l-2 border-r-2 border-b-2 border-b-zinc-300">
						<h3 className="flex items-center">
							<span className="mr-2 text-sm">View</span>
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
