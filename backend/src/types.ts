export interface Project {
	id?: number;
	projectName?: string;
	projectOrigin?: string;
	projectDate?: string;
	description?: string;
	uiCode?: string;
	cssCode?: string;
	jsCode?: string;
}

export interface Projects {
	projects: Project[];
}

export interface CreateProjectInput {
	projectName?: string;
	description?: string;
	projectOrigin?: string;
	projectDate?: string;
	uiCode?: string;
	cssCode?: string;
	jsCode?: string;
}

export interface UpdateProjectInput extends CreateProjectInput {
	id: number;
}

export interface DeleteProjectInput {
	id?: string;
	projectName?: string;
}
