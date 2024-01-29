<script lang="ts">
	import { onMount } from 'svelte';

	const navigationItems = ['PROJECTS', 'EXPERIENCE', 'EDUCATION'];
	let activeNavItem = navigationItems[0];

	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				activeNavItem = entry.target.id.toUpperCase();
			}
		});
	};

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: '0px',
			threshold: 1
		});

		navigationItems.forEach((item) => {
			const section = document.getElementById(item.toLowerCase());
			if (section) {
				observer.observe(section);
			}
		});

		return () => observer.disconnect();
	});
</script>

<nav class="hidden lg:block mt-20">
	<ul class="flex flex-col font-mono gap-5">
		{#each navigationItems as item, index}
			<li>
				<a
					class="flex items-center gap-2 no-underline text-sm tracking-widest text-gray-400 hover:text-white group
          {activeNavItem === item.toUpperCase() ? 'text-white' : ''}"
					href={`#${item.toLowerCase()}`}
				>
					<span>0{index + 1}</span>
					<span
						class="inline-block h-0.5 group-hover:w-12 group-hover:bg-white transition-all bg-gray-400 {activeNavItem ===
						item.toUpperCase()
							? 'bg-white w-12'
							: 'w-6'}"
					></span>
					<span class="underline">{item}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
