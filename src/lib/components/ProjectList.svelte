<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/content/projects';
</script>

<section class="mt-20 lg:mt-0 group" id="projects">
	<h1 class="font-mono tracking-widest mb-6 lg:sr-only">PROJECTS</h1>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</section>
