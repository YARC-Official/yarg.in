<script>
	import './layout.css';
	import { page } from '$app/state';
	import Hero from '$lib/components/Hero.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

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