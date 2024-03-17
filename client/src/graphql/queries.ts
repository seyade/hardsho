import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
	query Projects {
		projects {
			id
			projectName
			description
		}
	}
`;

export const GET_ONE_PROJECT = gql`
	query Project($projectId: ID!) {
		project(id: $projectId) {
			id
			projectName
			projectOrigin
			projectDate
			description
			uiCode
			cssCode
			jsCode
		}
	}
`;
