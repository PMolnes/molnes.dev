<script lang="ts">
	import type { Experience } from '$lib/types';

	export let experience: Experience;

	function spanTwo(company: string) {
		if (company == 'Solwr') {
			return 'col-span-2';
		}
		return '';
	}

	function formatDate(date: Date) {
		return new Date(date).toLocaleDateString(undefined, {
			month: 'short',
			year: 'numeric'
		});
	}

	function formatDurationString(experience: Experience) {
		if (experience.endDate) {
			return `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`;
		}
		return `${formatDate(experience.startDate)}`;
	}
</script>

<div
	class="{spanTwo(
		experience.company
	)} bg-zinc-800 block p-14 pr-20 mb-4 lg:mb-0 lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-105 transition-all"
>
	<h2 class="text-xl font-bold overflow">{experience.title}</h2>
	<p class="mb-4">{experience.company}</p>
	<p class="text-gray-400 text-sm">Duration</p>
	<p class="text-white">{formatDurationString(experience)}</p>
</div>
