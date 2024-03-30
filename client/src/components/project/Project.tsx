import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { HiArrowLongLeft } from "react-icons/hi2";
import { LuCode2, LuEye } from "react-icons/lu";

type ProjectProps = {
	id?: number;
	projectName?: string;
	projectOrigin?: string;
	projectDate?: string;
	description?: string;
	uiCode?: string;
	cssCode?: string;
	jsCode?: string;
};

const Project = ({
	projectName,
	projectOrigin,
	projectDate,
	description,
	uiCode,
	cssCode,
	jsCode,
}: ProjectProps) => {
	// HTML:
	// <div class="card">
	//   <div class="card__art"></div>
	//   <div class="card__header">
	//     <h2>Solana and Ethereum</h2>
	//   </div>
	//   <div class="card__content">
	//     <p>Which of Solana and Ethereum is the best blockchain layer to create your decentralise app. Both of the layers have had a profound impact in blockchain. However one is a grandpa and slow, the other one young and fast.</p>
	//   </div>
	//   <div class="card__footer">
	//     <button id="btn" class="card__button">Read More
	//     </button>
	//   </div>
	// </div>

	// CSS:
	// .card {
	// 	margin: auto;
	// 	font-family: "Open Sans", sans-serif;
	// 	width: 18rem;
	// 	background-color: rgb(255, 255, 255);
	// 	box-shadow: 0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -4px rgb(0, 0, 0, 0.1);
	// 	 border-radius: 8px;
	// 	 overflow: hidden;
	// }

	// .card h2, .card p {
	// 	margin: 0;
	// }

	// .card__art {
	// 	padding: 3rem;
	// 	background-image: linear-gradient(#2e1065, #991b1b);
	// }

	// .card__header {
	// 	padding: 0.5rem 1rem;
	// 	font-size: 1rem;
	// 	line-height: 1.75rem;
	// 	font-weight: 600;
	// }

	// .card__content {
	// 	padding: 0.5rem 1rem;
	// 	font-size: 0.875rem;
	// 	line-height: 1.25rem;
	// }

	// .card__footer {
	// 	padding: 1rem;
	// }

	// .card__button {
	// 	padding: 0.5rem 1rem;
	// 	color: #fff;
	// 	border: none;
	// 	border-radius: 9999px;
	// 	background-color: rgb(24, 24, 27);
	// 	transition: all ease-in-out 300ms;
	//  cursor: pointer;
	// }

	// .card__button:hover {
	// 	padding: 0.5rem 1.25rem;
	// 	background-color: rgb(63, 63, 70);
	// }

	// js:
	// const btn = document.querySelector("#btn");
	// btn.addEventListener("click", () => alert("Button clicked"));

	const combinedCode = `<style>${cssCode}</style>${uiCode}`;

	return (
		<div>
			<header className="flex justify-between items-center mb-10">
				<Link href="/projects" className="flex items-center">
					<HiArrowLongLeft /> <span className="ml-2">Back</span>
				</Link>
				<Link
					href="/builder/id"
					className="bg-zinc-800 text-white py-2 px-5 rounded-sm"
				>
					Edit
				</Link>
			</header>
			<div className="plusjakartasans pb-5 text-zinc-800 border-b border-zinc-300">
				<div className=" flex justify-between items-center">
					<h1 className="text-3xl font-bold">{projectName}</h1>
					<div className="text-right">
						<p className="text-xl text-zinc-700">
							Client:{" "}
							<span className="text-xl text-zinc-700 font-bold">
								{projectOrigin}
							</span>
						</p>
						<p className="t text-lg text-zinc-700 font-semibold">
							{projectDate}
						</p>
					</div>
				</div>

				<p>{description}</p>
			</div>

			<div>
				<h3 className="col-span-3 py-3 px-2 flex items-center mb-20 border-t border-b">
					<span className="mr-2">View</span>
					<LuEye />
				</h3>
				{cssCode && <style>{cssCode}</style>}
				{uiCode && <div dangerouslySetInnerHTML={{ __html: uiCode }} />}
				{jsCode && <Script id="jsCode">{jsCode}</Script>}
			</div>

			<div className="grid grid-cols-3 gap-1">
				<h3 className="col-span-3 flex items-center mb-5">
					<span className="mr-2">Code</span>
					<LuCode2 />
				</h3>
				<samp className="col-span-1 p-4 bg-zinc-200 rounded-sm">{uiCode}</samp>
				<samp className="col-span-1 p-4 bg-zinc-200 rounded-sm">{cssCode}</samp>
				<samp className="col-span-1 p-4 bg-zinc-200 rounded-sm">{jsCode}</samp>
			</div>
		</div>
	);
};

export default Project;
