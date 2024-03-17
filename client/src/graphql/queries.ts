import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
	query GetProjects {
		getProjects {
			id
			projectName
			description
		}
	}
`;
