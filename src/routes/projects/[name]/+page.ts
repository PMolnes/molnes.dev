import type { PageLoad } from './$types';
import { projects } from '$lib/content/projects';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const slug = params.name;

	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		error(404, {
			message: 'Not Found'
		});
	}

	return {
		project
	};
};
