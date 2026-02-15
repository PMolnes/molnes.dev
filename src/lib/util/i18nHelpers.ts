import type { Project, Experience, Education } from '$lib/types';
import { derived } from 'svelte/store';
import { locale } from 'svelte-i18n';

export const getProjectContent = derived(locale, ($locale) => {
	return (project: Project) => {
		if ($locale === 'nb' && project.nb) {
			return {
				description: project.nb.description || project.description,
				about: project.nb.about || project.about,
				challenges: project.nb.challenges || project.challenges,
				results: project.nb.results || project.results,
				myRoles: project.nb.myRoles || project.myRoles
			};
		}
		return {
			description: project.description,
			about: project.about,
			challenges: project.challenges,
			results: project.results,
			myRoles: project.myRoles
		};
	};
});

export const getExperienceTitle = derived(locale, ($locale) => {
	return (experience: Experience) => {
		if ($locale === 'nb' && experience.nb?.title) {
			return experience.nb.title;
		}
		return experience.title;
	};
});

export const getEducationTitle = derived(locale, ($locale) => {
	return (education: Education) => {
		if ($locale === 'nb' && education.nb?.title) {
			return education.nb.title;
		}
		return education.title;
	};
});
