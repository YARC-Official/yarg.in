<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	let slides = [
		{ src: 'screenshots/venue-chill-desk.png', name: 'Chill Vibe Desk by Agentevil' },
		{ src: 'screenshots/venue-church.png', name: 'Church Rave by Axel' },
		{ src: 'screenshots/venue-festival.png', name: 'Outdoor Festival by Axel' },
		{ src: 'screenshots/venue-radial-glow.png', name: 'Radial Glow by MrRedSlime' },
		{ src: 'screenshots/venue-tunnel.png', name: 'Tunnel Trip by YARC' }
	]
</script>

<Splide aria-label="Party images" class="w-lg">
	{#each slides as slide}
		<SplideSlide>
			<img src={slide.src} class="rounded-xl" alt={slide.name} />
			<p class="text-sm text-center text-cool-gray">{slide.name}</p>
			<br>
		</SplideSlide>
	{/each}
</Splide>