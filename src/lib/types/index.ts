export interface Project {
	name: string;
	description: string;
	slug: string;
	about: string;
	challenges: string;
	results: string;
	myRoles: string[];
	client?: string | null;
	features: string[];
}
