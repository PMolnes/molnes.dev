<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
	import { experiences } from '$lib/content/experiences';
</script>

<section id="experience" class="mt-20 scroll-my-20">
	<h1 class="font-mono mb-6 tracking-widest lg:sr-only">EXPERIENCE</h1>
	<div class="flex flex-col lg:gap-4 group">
		{#each experiences as experience}
			<ExperienceCard {experience} />
		{/each}
	</div>
</section>
