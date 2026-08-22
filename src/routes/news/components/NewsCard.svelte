<script>
	import { onMount } from 'svelte';
	import { distanceFromToday } from '$lib/utils/timeFormat';
	import Clock from '@lucide/svelte/icons/clock';
	import UpdateType from './UpdateType.svelte';

	let { article } = $props();
	let articleFetches = $state({});

	onMount(async () => {
		console.log(article);

		const [ thumb, authorIcon ] = await Promise.all([
			fetch(`https://raw.githubusercontent.com/YARC-Official/News/master/images/thumbs/${article.thumb}`),
			fetch(`https://raw.githubusercontent.com/YARC-Official/News/master/images/avatars/${article.authors[0]}.png`)
		]);

		articleFetches.thumb = URL.createObjectURL(await thumb.blob());
		articleFetches.authorIcon = URL.createObjectURL(await authorIcon.blob());
	});
</script>

<a href="/news/{article.md}" class="max-w-xl lg:max-w-5xl lg:h-36 bg-oxford border border-space-cadet-light rounded-xl flex flex-col lg:flex-row hover:bg-rich-black hover:cursor-pointer transition">
	<img src="{articleFetches.thumb}" class="max-h-64 object-cover aspect-5/4 rounded-xl" alt="{article.title}" />
	<div class="py-2 flex flex-col gap-2 grow px-4">
		<div class="flex flex-row justify-between items-center">
			<UpdateType type={article.type} />
			<div class="text-white/50 flex gap-2 items-center">
				<Clock size={24} />
				<span>{distanceFromToday(article.release)}</span>
			</div>
		</div>
		<p class="text-xl font-bold grow">{article.title}</p>
		<div class="h-8 flex flex-row gap-2">
			<img src="{articleFetches.authorIcon}" class="w-6 h-6 rounded-full" alt="{article.authors[0]}" />
			<p class="text-white/75">By: <b>{article.authors.join(', ')}</b></p>
		</div>
	</div>
</a>