import { gql } from "@apollo/client";

export const CREATE_PROJECTS = gql`
	mutation CreateProject($input: createProjectInput) {
		createProject(input: $input) {
			projectName
			projectOrigin
		}
	}
`;

export const UPDATE_PROJECTS = gql`
	mutation UpdateProject($input: updateProjectInput) {
		updateProject(input: $input) {
			id
			projectName
		}
	}
`;

export const DELETE_PROJECTS = gql`
	mutation DeleteProject($deleteProjectId: ID!) {
		deleteProject(id: $deleteProjectId) {
			id
			projectName
		}
	}
`;
