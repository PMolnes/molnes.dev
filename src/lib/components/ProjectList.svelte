<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/projects/projects';
</script>

<section class="mt-20 lg:mt-0 group" id="projects">
	<h2 class="font-mono tracking-widest mb-6 lg:sr-only">PROJECTS</h2>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</section>
