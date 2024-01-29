import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		name: 'Bachelor Thesis',
		description:
			'Warehouse Management System and iOS app with a voice interface for stacking products.',
		slug: 'bachelor-thesis',
		myRoles: ['Team Leader', 'Full Stack Developer']
	},
	{
		name: 'petterinit',
		description: 'Automate setup for TailwindCSS in React, Vue, and SvelteKit.',
		slug: 'petterinit',
		myRoles: 'Solo Developer'
	},
	{
		name: 'SolwrSolwr',
		description:
			'A tile-puzzle game to compete with colleagues to get the fastest time or least moves to solve.',
		slug: 'solwrsolwr',
		myRoles: 'Solo Developer'
	},
	{
		name: 'Trails',
		description:
			'A social media mobile applications for Android and iOS to share and rate hikes around the globe.',
		slug: 'trails',
		myRoles: ['Team Leader', 'Developer']
	}
];
