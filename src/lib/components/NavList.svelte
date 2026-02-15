<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let navigationItems: string[] = [];
	let activeNavItem = '';

	$: {
		navigationItems = [$t('nav.projects'), $t('nav.experience'), $t('nav.education')];
		if (!activeNavItem && navigationItems.length > 0) {
			activeNavItem = navigationItems[0];
		}
	}

	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.id.toLowerCase();
				if (id === 'projects') activeNavItem = $t('nav.projects');
				else if (id === 'experience') activeNavItem = $t('nav.experience');
				else if (id === 'education') activeNavItem = $t('nav.education');
			}
		});
	};

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: '0px',
			threshold: 1
		});

		['projects', 'experience', 'education'].forEach((item) => {
			const section = document.getElementById(item);
			if (section) {
				observer.observe(section);
			}
		});

		return () => observer.disconnect();
	});
</script>

<nav class="hidden lg:block mt-20">
	<ul class="flex flex-col font-mono gap-5">
		{#each [{ key: 'projects', id: 'projects' }, { key: 'experience', id: 'experience' }, { key: 'education', id: 'education' }] as item, index}
			<li>
				<a
					class="flex items-center gap-2 no-underline text-sm tracking-widest text-gray-400 hover:text-white group
          {activeNavItem === $t(`nav.${item.key}`) ? 'text-white' : ''}"
					href={`#${item.id}`}
				>
					<span>0{index + 1}</span>
					<span
						class="inline-block h-0.5 group-hover:w-12 group-hover:bg-white transition-all bg-gray-400 {activeNavItem ===
						$t(`nav.${item.key}`)
							? 'bg-white w-12'
							: 'w-6'}"
					></span>
					<span class="underline">{$t(`nav.${item.key}`)}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
