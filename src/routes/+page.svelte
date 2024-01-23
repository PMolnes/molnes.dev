<script lang="ts">
	import sopraPortait from '$lib/assets/sopra-portrett.jpg';
	import NavList from '$lib/components/NavList.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
</script>

<main class="flex flex-col md:flex-row mx-4 my-8">
	<div>
		<h1 class="text-6xl font-extrabold mb-2">Petter Molnes</h1>
		<h2 class="text-2xl font-bold mb-6">Software Engineer</h2>
		<p class="max-w-80">
			I am Full-Stack developer, pursuing a Masters in Informatics while working part-time for <a
				href="https://solwr.com">Solwr</a
			>.
		</p>
		<p class="max-w-80 mt-4">In my spare time I work on side-projects and enjoy bouldering.</p>
		<NavList />
		<div id="socials" class="flex items-center gap-4 mt-10">
			<img class="grayscale w-24 rounded-full" src={sopraPortait} alt="Portrait" />
			<a href="https://github.com/PMolnes" target="_blank">GitHub</a>
			<a href="https://www.linkedin.com/in/petter-molnes-532596202/" target="_blank">LinkedIn</a>
		</div>
	</div>
	<div>
		<section class="mt-20" id="projects">
			<h2 class="font-mono tracking-widest mb-6 md:sr-only">PROJECTS</h2>
			<ProjectList />
		</section>
	</div>
</main>
