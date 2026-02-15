<script lang="ts">
	import EducationList from '$lib/components/EducationList.svelte';
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import NavList from '$lib/components/NavList.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>molnes.dev</title>
</svelte:head>

<main class="flex flex-col lg:flex-row lg:justify-center gap-3 relative">
	<div
		class="flex flex-col lg:min-h-screen justify-between lg:px-24 md:px-16 sm:px-12 px-4 py-20 lg:sticky lg:top-0 max-h-screen"
	>
		<div>
			<div class="flex justify-between items-start mb-4">
				<div>
					<h1
						class="text-6xl font-extrabold mb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
					>
						{$t('home.title')}
					</h1>
					<h2 class="text-2xl font-bold mb-6">{$t('home.subtitle')}</h2>
				</div>
				<LanguageSwitcher />
			</div>
			<p class="max-w-80">{$t('home.intro')}</p>
			<p class="max-w-80 mt-4">
				{$t('home.hobbies')}
			</p>
		</div>
		<NavList />
		<div id="socials" class="flex items-center gap-4 mt-10 lg:mt-auto">
			<img
				class="grayscale w-16 rounded-full"
				src="/assets/images/sopra-portrett.jpg"
				alt="Portrait"
			/>
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
		<EducationList />
	</div>
</main>
