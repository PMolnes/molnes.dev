<script lang="ts">
  import { educations } from "$lib/content/education";
	import { formatDurationString } from "$lib/util/dateFormatter";
  
</script>

<section id="education" class="mt-20 group">
  <h1 class="font-mono mb-6 tracking-widest lg:sr-only">EDUCATION</h1>
    {#each educations as education}
    <div
    class="bg-zinc-800 block p-14 pr-20 mb-4 lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-105 transition-all"
  >
    <h2 class="text-xl font-bold overflow">{education.title}</h2>
    <p class="mb-4">{education.school}</p>
    <p class="text-gray-400 text-sm">Duration</p>
    <p class="text-white">{formatDurationString(education.startDate, education.endDate)}</p>
  </div>
    {/each}
</section>