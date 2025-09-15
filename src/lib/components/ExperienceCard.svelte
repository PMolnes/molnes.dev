<script lang="ts">
	import type { Experience } from '$lib/types';
	import { formatDurationString } from '$lib/util/dateFormatter';

	export let experience: Experience;
</script>

<div
	class="bg-zinc-800 block p-14 pr-20 mb-4 lg:mb-0 lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-105 transition-all"
>
	<h2 class="text-xl font-bold overflow">{experience.title}</h2>
	<p class="mb-4">{experience.company}</p>
	<p class="text-gray-400 text-sm">Duration</p>
	<p class="text-white">{formatDurationString(experience.startDate, experience.endDate)}</p>
</div>
