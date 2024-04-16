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
	links?: Link[];
	technologies: string[];
}

export interface Experience {
	company: string;
	title: string;
	startDate: Date;
	endDate?: Date;
}

export interface Education {
	title: string;
	school: string;
	startDate: Date;
	endDate?: Date;
}

export interface Link {
	href: string;
	title: string;
}
