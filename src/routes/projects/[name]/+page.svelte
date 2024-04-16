<script lang="ts">
	import BackIcon from '$lib/icons/BackIcon.svelte';
import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Projects - {data.project.name}</title>
</svelte:head>

<main class="grid place-items-center lg:px-24 md:px-16 sm:px-12 px-4 my-20">
  <a href="/" class="flex absolute top-5 left-5 justify-center items-center gap-1 hover:bg-gray-400/10 px-4 py-2">
    <BackIcon/>
    <p class="text-white">Back</p>
  </a>
	<div class="max-w-screen-xl flex flex-col">
		<h1 class="text-7xl font-extrabold mb-2">{data.project.name}</h1>
		<h2 class="text-2xl text-gray-400 mb-16">{data.project.description}</h2>
		<div class="flex lg:flex-row flex-col gap-8 relative">
      <div class="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 min-w-80 lg:self-start lg:sticky lg:top-10 p-1">
			<div class="bg-zinc-800 py-4 px-6">
				<div class="mb-4">
					<h3 class="text-gray-400 text-sm mb-1">Status</h3>
					<p class="text-white font-semibold">Finished</p>
				</div>
				<div class="mb-4">
					<h3 class="text-gray-400 text-sm mb-1">My Role(s)</h3>
					<ul>
						{#each data.project.myRoles as role}
							<li>
								<p class="text-white font-semibold">{role}</p>
							</li>
						{/each}
					</ul>
				</div>
        <div>
          <h3 class="text-gray-400 text-sm mb-1">Technologies</h3>
          <ul>
            {#each data.project.technologies as technology}
              <li>
                <p class="text-white font-semibold mb-1">{technology}</p>
              </li>
            {/each}
          </ul>
        </div>
			</div>
    </div>
			<div>
				<section class="mb-8">
					<h3 class="text-5xl mb-2 font-semibold">About</h3>
					{@html `<p class="leading-10 text-lg whitespace-pre-line">${data.project.about}</p>`}
				</section>
				<section class="mb-8">
					<h3 class="text-5xl font-semibold mb-2">Challenges</h3>
					{@html `<p class="leading-10 text-lg whitespace-pre-line">${data.project.challenges}</p>`}
				</section>
				<section class="mb-8">
					<h3 class="text-5xl mb-2 font-semibold">Results</h3>
					{@html `<p class="leading-10 text-lg whitespace-pre-line">${data.project.results}</p>`}
				</section>
				{#if data.project.links}
					<section class="mb-8">
						<h3 class="text-5xl mb-2 font-semibold">Links</h3>
						<ul>
							{#each data.project.links as link}
								<li class="flex gap-4 mb-2">
									<p>{link.title}:</p>
									<a href={link.href} target="_blank" class="underline">{link.href}</a>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			</div>
		</div>
	</div>
</main>
