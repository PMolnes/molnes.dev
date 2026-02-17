<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
</script>

<a
	href={`/projects/${project.slug}`}
	class="bg-zinc-800 block p-6 sm:p-10 lg:p-14 pr-6 sm:pr-14 lg:pr-20 mb-4 lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-105 transition-all"
>
	<h3 class="text-xl sm:text-2xl font-bold">{project.name}</h3>
	<p class="mb-4">{project.description}</p>
</a>
