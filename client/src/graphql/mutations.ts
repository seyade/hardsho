import { gql } from "@apollo/client";

export const CREATE_PROJECTS = gql`
	mutation CreateProject($input: createProjectInput) {
		createProject(input: $input) {
			projectName
			projectOrigin
		}
	}
`;
