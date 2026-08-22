<script lang="ts">
	import { onMount } from 'svelte';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	let { data } = $props();
	let header = $derived(data.data.data);
	let banner = $state("");
	let avatar = $state("")
	let videoId = $derived(header.video?.split('.be/')[1]?.split('&')[0] || null);

	onMount(async () => {
		const response = await fetch(`https://raw.githubusercontent.com/YARC-Official/News/master/images/banners/${header.banner}`);
		const blob = await response.blob();
		banner = URL.createObjectURL(blob);

		const avatarResponse = await fetch(`https://raw.githubusercontent.com/YARC-Official/News/master/images/avatars/${header.authors[0]}.png`);
		const avatarBlob = await avatarResponse.blob();
		avatar = URL.createObjectURL(avatarBlob);
	});
</script>

<img src="{banner}" class="mask-b-from-20% mask-b-to-80%" alt="{header.title}" />
<a href='/news' class="flex items-center text-xl text-white/50 hover:text-white transition"><ChevronLeft class="inline-block mr-2" />Back to News</a>

<div class="mt-8 mb-4 h-8 flex flex-row gap-2">
	<img src="{avatar}" class="w-6 h-6 rounded-full" alt="{header.authors[0]}" />
	<p class="text-white/75">By: <b>{header.authors.join(', ')}</b></p>
</div>

{#if header.video}
	<iframe
		class="aspect-video rounded shadow-xl m-auto"
		width="512" height="288"
		src="https://www.youtube.com/embed/{videoId}?si=8KKreZy1enqB8Jiw"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	>
	</iframe>
{/if}

<SvelteMarkdown source={data.data.content} />