<script lang="ts">
	import type { Project } from '$lib/types';
	import ProjectCard from './ProjectCard.svelte';

	const projects: Project[] = [
		{
			name: 'petterinit',
			description: 'Automate setup for TailwindCSS in React, Vue, and SvelteKit.',
			link: 'petterinit'
		},
		{
			name: 'Bachelor Thesis',
			description:
				'Warehouse Management System and iOS app with a voice interface for stacking products.',
			link: 'bachelor-thesis'
		}
	];
</script>

{#each projects as project}
	<ProjectCard {project} />
{/each}
