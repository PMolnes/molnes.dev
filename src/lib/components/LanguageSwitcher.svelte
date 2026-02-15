<script lang="ts">
	import { locale } from 'svelte-i18n';

	function switchLanguage(lang: string) {
		locale.set(lang);
		localStorage.setItem('locale', lang);
	}

	let currentLocale: string;
	locale.subscribe((value) => {
		currentLocale = value || 'en';
	});
</script>

<div class="flex gap-2">
	<button
		on:click={() => switchLanguage('en')}
		class="px-3 py-1 rounded transition-colors {currentLocale === 'en'
			? 'bg-white text-black'
			: 'bg-gray-700 text-white hover:bg-gray-600'}"
	>
		EN
	</button>
	<button
		on:click={() => switchLanguage('nb')}
		class="px-3 py-1 rounded transition-colors {currentLocale === 'nb'
			? 'bg-white text-black'
			: 'bg-gray-700 text-white hover:bg-gray-600'}"
	>
		NO
	</button>
</div>
