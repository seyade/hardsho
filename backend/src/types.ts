// Queries
export interface Client {
	id: string;
	userId?: string;
	name: string;
	projects?: Project[];
	createdAt?: string;
	updatedAt?: string;
}

export interface Project {
	id: string;
	clienId?: string;
	name?: string;
	date?: string;
	description?: string;
	crafts?: Craft[];
	createdAt?: string;
	updatedAt?: string;
}

export interface Craft {
	id: string;
	projectId?: string;
	description?: string;
	htmlCode?: string;
	cssCode?: string;
	jsCode?: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface User {
	id: string;
	username: string;
	email: string;
	profile?: string;
	name?: string;
	role?: string;
	appTenure?: number;
	skills?: string[];
	clients: Client[];
	createdAt?: string;
	updatedAt?: string;
}

// Mutations
export interface ClientInput {
	name: string;
}

export interface DeleteClientInput {
	id: string;
}

export interface ProjectInput {
	name?: string;
	description?: string;
	date?: string;
	crafts?: Craft[];
}

export interface DeleteProjectInput {
	id: string;
}

export interface CraftInput {
	description: string;
	htmlCode: string;
	cssCode: string;
	jsCode: string;
}

export interface DeleteCraftInput {
	id: string;
}

export interface UserInput {
	username: string;
	email: string;
	profile: string;
	name: string;
	role: string;
	skills: string[];
}

export interface DeleteUserInput {
	id: string;
}
