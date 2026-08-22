<script>
	import { onMount } from 'svelte';
	import { getContributors } from '$lib/utils/contributors';
	let contributors = $state([]);

	onMount(async () => {
		contributors = await getContributors();
	});
</script>

<div class="p-16 bg-rich-black text-cool-gray border-t border-space-cadet-light flex flex-col gap-16">
	<div class="flex flex-col md:flex-row gap-8 justify-between">
		<div class="flex flex-col gap-4">
			<img src="yarc-logo.png" class="w-32" alt="YARG Logo" />
				<p class="text-xl">Made with lots of ❤️ by {contributors.length} contributors</p>
		</div>

		<div class="flex flex-col text-xl">
			<h2 class="text-3xl font-bold text-white">GAME</h2>
			<a href="/download">Download</a>
			<a href="https://docs.yarg.in">Documentation</a>
			<a href="/legal">Legal</a>
		</div>

		<div class="flex flex-col text-xl">
			<h2 class="text-3xl font-bold text-white">COMMUNITY</h2>
			<a href="https://discord.gg/yarg">Discord Server</a>
			<a href="https://yarg.myspreadshop.com/">Official Merch</a>
		</div>

		<div class="flex flex-col text-xl">
			<h2 class="text-3xl font-bold text-white">DEVELOPMENT</h2>
			<a href="https://yarg.youtrack.cloud/agiles/147-7/current">Roadmap</a>
			<a href="/content">Content</a>
		</div>
	</div>

	<div class="m-auto flex gap-4 items-center">
		<a href="https://github.com/YARC-Official/YARG"><img src="/svgs/github.svg" class="h-8 text-white" alt="GitHub Logo" /></a>
		<a href="https://discord.gg/yarg"><img src="/svgs/discord.svg" class="h-8 text-white" alt="Discord Logo" /></a>
		<a href="https://youtube.com/@yarggame"><img src="/svgs/youtube.svg" class="h-8 text-white" alt="YouTube Logo" /></a>
		<a href="https://x.com/YARGGame"><img src="/svgs/twitter.svg" class="h-8 text-white" alt="Twitter Logo" /></a>
		<a href="https://bsky.app/profile/yarg.in"><img src="/svgs/bluesky.svg" class="h-8 text-white" alt="Bluesky Logo" /></a>
		<a href="https://instagram.com/yarg.game"><img src="/svgs/instagram.svg" class="h-8 text-white" alt="Instagram Logo" /></a>
		<a href="https://twitch.tv/yarggame"><img src="/svgs/twitch.svg" class="h-8 text-white" alt="Twitch Logo" /></a>
		<a href="https://tiktok.com/@yarggame"><img src="/svgs/tiktok.svg" class="h-8 text-white" alt="TikTok Logo" /></a>
		<a href="https://reddit.com/r/yarg"><img src="/svgs/reddit.svg" class="h-8 text-white" alt="Reddit Logo" /></a>
	</div>
</div>