<script>
	import './layout.css';
	import { page } from '$app/state';
	import Hero from '$lib/components/Hero.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>YARG</title>
	<link rel="icon" href="/favicon.png" />

	<!-- Primary Meta Tags -->
	<meta name="title" content="YARG" />
	<meta name="description" content="A free, open-source, plastic instrument game in development. 🎸🥁🎹🎤" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://yarg.in/" />
	<meta property="og:title" content="YARG" />
	<meta property="og:description" content="A free, open-source, plastic instrument game in development. 🎸🥁🎹🎤" />
	<meta property="og:image" content="/yarg-embed.png" />

	<!-- X (Twitter) -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://yarg.in/" />
	<meta property="twitter:title" content="YARG" />
	<meta property="twitter:description" content="A free, open-source, plastic instrument game in development. 🎸🥁🎹🎤" />
	<meta property="twitter:image" content="/yarg-embed.png" />
</svelte:head>

<div class="scroll-smooth overflow-x-clip bg-space-cadet text-white min-h-dvh">
	{#if page.url.pathname === '/'}
		<div class="hidden md:block">
			<Hero />
		</div>
	{/if}

	<div class="flex flex-col min-h-screen">
		<Header />
		<div class="grow">
			{@render children()}
		</div>
		<Footer />
	</div>
</div>