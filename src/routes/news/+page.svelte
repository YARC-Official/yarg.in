<script>
	import NewsCard from './components/NewsCard.svelte';
	let { data } = $props();
</script>

<h1 class="text-5xl pb-8">News</h1>

<div class="flex flex-col gap-4">
	{#each data.data.articles as article}
		<NewsCard {article} />
	{/each}
</div>