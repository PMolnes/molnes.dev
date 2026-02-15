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

<div class="relative inline-flex bg-gray-800 rounded-lg p-1 border border-gray-700">
	<!-- Sliding background indicator -->
	<div
		class="absolute top-1 left-1 w-[calc(50%-0.25rem)] h-[calc(100%-0.5rem)] bg-white rounded transition-transform duration-300 ease-in-out"
		style="transform: translateX({currentLocale === 'nb' ? '100%' : '0'})"
	></div>

	<!-- Language buttons -->
	<button
		on:click={() => switchLanguage('en')}
		class="relative z-10 px-3 py-1 text-sm font-medium transition-colors duration-300 {currentLocale ===
		'en'
			? 'text-black'
			: 'text-gray-400 hover:text-gray-200'}"
	>
		EN
	</button>
	<button
		on:click={() => switchLanguage('nb')}
		class="relative z-10 px-3 py-1 text-sm font-medium transition-colors duration-300 {currentLocale ===
		'nb'
			? 'text-black'
			: 'text-gray-400 hover:text-gray-200'}"
	>
		NO
	</button>
</div>
