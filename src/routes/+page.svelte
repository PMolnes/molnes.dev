<script lang="ts">
	import sopraPortait from '$lib/assets/sopra-portrett.jpg';
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import NavList from '$lib/components/NavList.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
</script>

<main class="flex flex-col lg:flex-row lg:justify-center gap-3 relative">
	<div
		class="flex flex-col lg:min-h-screen justify-between lg:px-24 md:px-16 sm:px-12 px-4 py-20 lg:sticky lg:top-0 max-h-screen"
	>
		<h1 class="text-6xl font-extrabold mb-2">Petter Molnes</h1>
		<h2 class="text-2xl font-bold mb-6">Software Engineer</h2>
		<p class="max-w-80">
			I am Full-Stack developer, pursuing a Masters in Informatics while working part-time for <a
				class="underline"
				href="https://solwr.com"
				target="_blank">Solwr</a
			>.
		</p>
		<p class="max-w-80 mt-4">In my spare time I work on side-projects and enjoy bouldering.</p>
		<NavList />
		<div id="socials" class="flex items-center gap-4 mt-10 lg:mt-auto">
			<img class="grayscale w-16 rounded-full" src={sopraPortait} alt="Portrait" />
			<a class="underline" href="https://github.com/PMolnes" target="_blank">GitHub</a>
			<a
				class="underline"
				href="https://www.linkedin.com/in/petter-molnes-532596202/"
				target="_blank">LinkedIn</a
			>
		</div>
	</div>
	<div class="min-h-screen lg:px-24 md:px-16 lg:max-w-[800px] sm:px-12 px-4 py-20">
		<ProjectList />
		<ExperienceList />
	</div>
</main>
