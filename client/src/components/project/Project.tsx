import Link from "next/link";
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
			<div className="plusjakartasanspb-6 mb-8 pb-5 text-zinc-800 border-b-2 border-zinc-800">
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
			<div className="grid grid-cols-3 gap-1">
				<h3 className="col-span-3 flex items-center">
					<span className="mr-2 mb-2">Code</span>
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
