"use client";

import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/graphql/queries";
import { HiArrowLongLeft } from "react-icons/hi2";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Project, Projects } from "../../types";
import Link from "next/link";

const Projects = () => {
	const { loading, error, data } = useQuery<Projects>(GET_PROJECTS);

	if (error) return <h2>{error.message}. Fix it then!</h2>;
	if (loading) return <h2>Loading...!</h2>;

	console.log("PROJECTS:::", data?.projects);

	return (
		<div>
			<header>
				<Link href="/dashboard" className="flex items-center">
					<HiArrowLongLeft /> <span className="ml-2">Back</span>
				</Link>
			</header>
			<h1 className="text-3xl font-bold">Projects</h1>

			<div className="col-span-12 grid grid-cols-4 gap-4 p-2">
				{data?.projects.length &&
					data?.projects.map((project: Project) => {
						return (
							<Card key={project.projectName}>
								<CardHeader>
									<CardTitle>{project.projectName}</CardTitle>
								</CardHeader>
								<CardContent>{project.description}</CardContent>
								<CardFooter>
									<Link href={`/projects/${project.id}`}>View</Link>
								</CardFooter>
							</Card>
						);
					})}
			</div>
		</div>
	);
};

export default Projects;
