<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	let slides = [
		{ src: 'parties/dustincanfly.png', user: 'DustinCanFly' },
		{ src: 'parties/jstnlef.png', user: 'jstnlef'},
		{ src: 'parties/ashley_is_here.png', user: 'Ashley_is_here' },
		{ src: 'parties/chaoshevy.png', user: 'ChaosHevy' }
	]
</script>

<Splide aria-label="Party images" class="w-lg">
	{#each slides as slide}
		<SplideSlide>
			<img src={slide.src} class="rounded-xl" alt={slide.user} />
			<p class="text-sm text-center text-cool-gray">Image provided by {slide.user}</p>
			<br>
		</SplideSlide>
	{/each}
</Splide>