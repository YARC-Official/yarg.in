<script>
	import PartyCarousel from './components/PartyCarousel.svelte';
	import FAQ from './components/FAQ.svelte';

	import Download from '@lucide/svelte/icons/download';
</script>

<div class="p-16 flex flex-col border-b border-space-cadet-light lg:flex-row gap-16 items-center justify-center">
	<div class="flex flex-col gap-8 items-baseline">
		<h1 class="text-4xl">What is YARG?</h1>
		<p class="max-w-3xl text-xl">
			YARG (Yet Another Rhythm Game) is a free, open-source, community-driven PlasticBand game built to be customizable for veteran players while being beginner-friendly for those new to the genre!
			<br /><br />
			YARG supports most instruments from classic games, including Guitar, Bass, Drums, Keys, and Vocals, with more coming on the way!
		</p>

		<a href="/download" class="px-8 py-4 bg-vivid-sky text-black/75 inset-ring-2 inset-ring-white/25 font-bold rounded-full flex gap-2 items-center">
			<Download size={24} />
			Download YARC Launcher
		</a>
	</div>

	<iframe
		class="aspect-video rounded shadow-xl"
		width="512" height="288"
		src="https://www.youtube.com/embed/82Cji--6lpI?si=8KKreZy1enqB8Jiw"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	>
	</iframe>
</div>

<div class="p-16 bg-oxford border-b border-space-cadet-light flex flex-col lg:flex-row gap-16 items-center justify-center">
	<PartyCarousel />

	<div class="flex flex-col gap-8">
		<h1 class="text-4xl">Play with friends!</h1>
		<p class="max-w-3xl text-xl">
			YARG supports local multiplayer with up to 32 players, so the whole friend group can play at the same time!
			<br /><br />
			Online multiplayer, as well as other online features like competitive leaderboards will be coming in future updates. Peek into our Discord server for the latest news!
		</p>
	</div>
</div>

<div class="p-16 border-b border-space-cadet-light flex flex-col lg:flex-row gap-16 items-center justify-center">
	<div class="flex flex-col gap-8">
		<h1 class="text-4xl">Lots of included content!</h1>
		<p class="max-w-3xl text-xl">
			YARG's official setlist has over 100 licensed songs from recognizable artists like Nine Inch Nails, Good Kid, Last Dinosaurs, King Gizzard and the Lizard Wizard, Glass Beach, and more, as well as many songs from independent creators like Jamie Paige, raphaelgoulart, NyxTheShield, bitbreaker, and JubyPhonic!
			<br /><br />
			Also, many full albums are available to downloaded on the YARC Launcher including "Summertide" by Alohaii, "Wanderkid" by JW Francis, "Abyss of Time" by James Paddock, and "FX4" by Jake "virt" Kaufman!
		</p>
	</div>

	<iframe
		data-testid="embed-iframe"
		class="rounded"
		width="450" height="352"
		src="https://open.spotify.com/embed/playlist/4tdG8DYyGdNwCFeWJXV9NF?utm_source=generator&si=c5d482e344754cd3"
		frameBorder="0"
		allowfullscreen=""
		allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		loading="lazy"
		title="Spotify Embed"
	>
	</iframe>
</div>

<div class="p-16 bg-oxford flex flex-col gap-16 items-center justify-center">
	<h1 class="text-5xl text-center">Frequently Asked Questions</h1>
	<FAQ />
</div>