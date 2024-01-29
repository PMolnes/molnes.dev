<script lang="ts">
	const experiences = [
		{
			company: 'Solwr',
			title: 'Full-Stack Developer'
		},
		{
			company: 'PlussPark',
			title: 'Shuttle Bus Chauffeur'
		},
		{
			company: 'Rema 1000 Giske',
			title: 'Store Clerk'
		}
	];
</script>

<section>
	<h2 class="font-mono mb-6 tracking-widest lg:sr-only">EXPERIENCE</h2>
	<div class="lg:grid lg:grid-cols-2 lg:gap-2">
		{#each experiences as experience}
			<a
				href={`/experience/${experience.company}`}
				class="bg-zinc-800 block p-14 pr-20 mb-4 lg:mb-0 lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-105 transition-all"
			>
				<h3 class="text-xl font-bold">{experience.title}</h3>
				<p class="mb-4">{experience.company}</p>
			</a>
		{/each}
	</div>
</section>
