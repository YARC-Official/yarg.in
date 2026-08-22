<script>
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	let { data } = $props();
</script>

{#await data}
	<p>Loading...</p>
{:then data}
	<SvelteMarkdown source={data.data} />
{:catch error}
	<p>Error loading article. {error}</p>
{/await}