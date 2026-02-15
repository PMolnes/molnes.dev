<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/content/projects';
	import { t } from 'svelte-i18n';
</script>

<section class="mt-20 lg:mt-0 group scroll-my-96" id="projects">
	<h1 class="font-mono tracking-widest mb-6 lg:sr-only">{$t('nav.projects')}</h1>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</section>
