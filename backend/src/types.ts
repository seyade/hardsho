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

export type UserInput = Omit<
	User,
	"id" | "appTenure" | "createdAt" | "updatedAt"
>;

export type DeleteUserInput = {
	id: string;
};

export interface Client {
	id: string;
	userId?: string;
	name: string;
	projects?: Project[];
	createdAt?: string;
	updatedAt?: string;
}

export type ClientInput = {
	name: string;
};

export type DeleteClientInput = {
	id: string;
};

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

export type ProjectInput = Omit<
	Project,
	"id" | "clientId" | "createdAt" | "updatedAt"
>;

export type DeleteProjectInput = {
	id: string;
};

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

export type CraftInput = Omit<
	Craft,
	"id" | "projectId" | "createdAt" | "updatedAt"
>;

export type DeleteCraftInput = {
	id: string;
};
