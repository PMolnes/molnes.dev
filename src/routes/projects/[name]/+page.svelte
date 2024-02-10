<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Projects - {data.project.name}</title>
</svelte:head>

<main class="grid place-items-center lg:px-24 md:px-16 sm:px-12 px-4 my-20">
	<div class="max-w-screen-xl flex flex-col">
		<h1 class="text-7xl font-extrabold mb-2">{data.project.name}</h1>
		<h2 class="text-2xl text-gray-400 mb-16">{data.project.description}</h2>
		<img src="https://picsum.photos/1400/800" class="mb-8" />
		<div class="flex lg:flex-row flex-col gap-8 relative">
			<div class="bg-zinc-800 py-4 px-6 min-w-80 lg:self-start lg:sticky lg:top-10">
				<div class="mb-4">
					<h3 class="text-gray-400 text-sm mb-1">Status</h3>
					<p class="text-white font-semibold">Finished</p>
				</div>
				<div>
					<h3 class="text-gray-400 text-sm mb-1">My Role(s)</h3>
					<ul>
						{#each data.project.myRoles as role}
							<li>
								<p class="text-white font-semibold">{role}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div>
				<section class="mb-8">
					<h3 class="text-5xl mb-2 font-semibold">About</h3>
					<p class="leading-10 text-lg whitespace-pre-line">
						{data.project.about}
					</p>
				</section>
				<section class="mb-8">
					<h3 class="text-5xl font-semibold mb-2">Challenges</h3>
					{@html `<p class="leading-10 text-lg whitespace-pre-line">${data.project.challenges}</p>`}
				</section>
				<section class="mb-8">
					<h3 class="text-5xl mb-2 font-semibold">Results</h3>
					{@html `<p class="leading-10 text-lg whitespace-pre-line">${data.project.results}</p>`}
				</section>
			</div>
		</div>
	</div>
</main>
