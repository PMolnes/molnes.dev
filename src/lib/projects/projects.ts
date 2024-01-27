import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		name: 'petterinit',
		description: 'Automate setup for TailwindCSS in React, Vue, and SvelteKit.',
		slug: 'petterinit',
		myRoles: 'Solo Developer'
	},
	{
		name: 'Bachelor Thesis',
		description:
			'Warehouse Management System and iOS app with a voice interface for stacking products.',
		slug: 'bachelor-thesis',
		myRoles: ['Team Leader', 'Full Stack Developer']
	},
	{
		name: 'SolwrSolwr',
		description:
			'A tile-puzzle game to compete with colleagues to get the fastest time or least moves to solve.',
		slug: 'solwrsolwr',
		myRoles: 'Solo Developer'
	}
];
