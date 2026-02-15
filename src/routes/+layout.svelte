<script>
	import '../app.css';
	import '$lib/i18n';
	import { locale, waitLocale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	onMount(() => {
		const savedLocale = localStorage.getItem('locale');
		if (savedLocale) {
			locale.set(savedLocale);
		}
	});
</script>

{#await waitLocale()}
	<div class="flex items-center justify-center min-h-screen">
		<p>Loading...</p>
	</div>
{:then}
	<slot />
{/await}
