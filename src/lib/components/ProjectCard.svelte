<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
</script>

<article class="bg-zinc-800 p-14 mb-4">
	<h3 class="text-2xl font-bold">{project.name}</h3>
	<p class="mb-4">{project.description}</p>
	<a class="underline" href={`projects/${project.link}`}>Read More</a>
</article>
