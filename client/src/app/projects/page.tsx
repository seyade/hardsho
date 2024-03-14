import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_PROJECTS = gql`
	query GetProjects {
		getProjects {
			id
			projectName
			description
		}
	}
`;

const Projects = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS);

	if (error) return <h2>{error.message}. Fix it then!</h2>;
	if (loading) return <h2>Loading...!</h2>;

	return (
		<div>
			<h1 className="text-3xl font-bold">Projects</h1>

			<div>
				<ul>
					{data.getProjects.map((project: any, index: number) => {
						return <li key={project?.projectName}>{project.projectName}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
