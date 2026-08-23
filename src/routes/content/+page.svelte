<script>
	import Search from '@lucide/svelte/icons/search';
	import VenuesCarousel from './components/VenuesCarousel.svelte';
	import Marquee from 'svelte-fast-marquee';

	const ARTISTS = [
		"Alohaii",
		"Atomic Guava",
		"Bitbreaker",
		"Blight Town",
		"Bob Kulick and David Glen Eisley",
		"Boom Kitty",
		"Bottom Bunk",
		"Bumblefoot", 
		"Camellia",
		"Creo",
		"Daniel Thrasher",
		"Electric Swing Circus",
		"FamilyJules",
		"FoundiT",
		"Garlagan",
		"Glass Beach",
		"Good Kid",
		"insaneintherainmusic",
		"Jamie Paige",
		"Jonathan Coulton",
		"King Gizzard and the Lizard Wizard",
		"Last Dinosaurs",
		"Nine Inch Nails",
		"Pinegrove",
		"Red Vox",
		"RO1",
		"Roomie",
		"Saturdays at Your Place",
		"Snail's House",
		"State Champs",
		"Tay Zonday",
		"The 8-Bit Big Band",
		"The Vanished People",
		"...and more!"
	]
</script>

<div class="p-16 border-b border-space-cadet-light flex flex-col gap-8 items-center justify-center">
	<h1 class="text-5xl text-center max-w-4xl">The largest official setlist of any non-commercial party game!</h1>
	<Marquee gradientColor="#1E253E" gap={"2rem"} speed={50} class="max-w-6xl">
		{#each ARTISTS as artist}
			<p class="text-xl">{artist}</p>
		{/each}
	</Marquee>
</div>

<div class="p-16 flex flex-col bg-oxford border-b border-space-cadet-light lg:flex-row gap-16 items-center justify-center">
	<div class="flex flex-col gap-8 items-baseline">
		<h2 class="text-4xl">Rock out to a catalogue of 400+ licensed songs!</h2>
		<p class="max-w-3xl text-xl">
			From indie rock to extreme metal, and from EDM to classical, and from underrated gems from the underground to internet sensations: there’s something for everyone!
			<br /><br />
			This massive collection of songs is available through the YARC Launcher, skipping the hassle of finding and scanning external downloads.
		</p>
	</div>

	<iframe
		data-testid="embed-iframe"
		class="rounded"
		width="450" height="352"
		src="https://open.spotify.com/embed/playlist/4tdG8DYyGdNwCFeWJXV9NF?utm_source=generator&si=4368c53514dd42d0"
		frameBorder="0"
		allowfullscreen=""
		allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		loading="lazy"
		title="Spotify Embed"
	>
	</iframe>
</div>

<div class="p-16 flex flex-col border-b border-space-cadet-light lg:flex-row gap-16 items-center justify-center">
	<VenuesCarousel />

	<div class="flex flex-col gap-8 items-baseline">
		<h2 class="text-4xl">Enhance your show with venues and visualizers!</h2>
		<p class="max-w-3xl text-xl">
			Liven up the background with venues and visualizers, also available through the YARC Launcher! Add full venues to create an immersive band experience with the whole party, or give your gameplay that extra pop with visualizers that adapt with each song.
		</p>
	</div>
</div>

<div class="p-16 flex flex-col bg-oxford gap-8 items-center justify-center">
	<h2 class="text-4xl">Get your songs in YARG!</h2>
	<p class="max-w-3xl text-xl">
		YARG is continually open to adding new songs! We work with rising music artists from indie and underground scenes to add a new dimension to their releases. Along with official charts, charters from our community submit their own charts to add to the game launcher.
		<br /><br />
		If you are a music artist and are interested in working with us, you can fill out this Setlist Request form to give us permission to use your music, or directly contact us at <a href="mailto:yargchartingteam@gmail.com" class="text-vivid-sky underline hover:cursor-pointer">yargchartingteam@gmail.com</a> for more information!
	</p>
	<a href="https://docs.google.com/forms/d/e/1FAIpQLSe_D-f_BItsxNOoLOElZ1lorgcY1B6Agqqu65IMmKeibHNECA/viewform " class="px-8 py-4 bg-vivid-sky text-black/75 inset-ring-2 inset-ring-white/25 font-bold rounded-full flex gap-2 items-center">
		<Search size={24} />
		Setlist Request Form
	</a>
</div>