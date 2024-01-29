<script lang="ts">
	const navigationItems = ['PROJECTS', 'EXPERIENCE', 'EDUCATION'];
</script>

<nav class="hidden lg:block mt-20">
	<ul class="flex flex-col font-mono gap-5">
		{#each navigationItems as item, index}
			<li>
				<a
					class="flex items-center gap-2 no-underline text-sm tracking-widest text-gray-400 hover:text-white group"
					href={`#${item.toLowerCase()}`}
				>
					<span>0{index + 1}</span>
					<span
						class="inline-block w-6 h-0.5 group-hover:w-12 group-hover:bg-white transition-all bg-gray-400"
					></span>
					<span class="underline">{item}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
