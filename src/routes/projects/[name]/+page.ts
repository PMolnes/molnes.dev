import type { PageLoad } from './$types';
import { projects } from '$lib/projects/projects';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  const link = params.name;

  const project = projects.find((p) => p.link === link);

  if (!project) {
    error(404, {
      message: 'Not Found'
    });
  }

  return {
    project
  };
};
