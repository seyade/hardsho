export type Project = {
	id?: number;
	projectName?: string;
	projectOrigin?: string;
	projectDate?: string;
	description?: string;
	uiCode?: string;
	cssCode?: string;
	jsCode?: string;
};

export type Projects = {
	projects: Project[];
};

export type CreateProjectInput = {
	projectName?: string;
	description?: string;
	projectOrigin?: string;
	projectDate?: string;
	uiCode?: string;
	cssCode?: string;
	jsCode?: string;
};

export type UpdateProjectInput = {
	id: number;
} & CreateProjectInput;

export type DeleteProjectInput = {
	id?: string;
	projectName?: string;
};
