"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/graphql/queries";

const Projects = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS);

	if (error) return <h2>{error.message}. Fix it then!</h2>;
	if (loading) return <h2>Loading...!</h2>;

	console.log("PROJECTS:::", data.projects);

	return (
		<div>
			<h1 className="text-3xl font-bold">Projects</h1>

			<div>
				<ul>
					{data.projects.length &&
						data.projects.map((project: any, index: number) => {
							return (
								<li key={project.projectName}>
									{project.projectName}: {project.description}
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
