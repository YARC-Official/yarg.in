<script>
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	let isOpen = $state(false);
</script>

<nav class="sticky overflow-y-auto top-0 z-10 px-4 h-16 bg-rich-black text-white shadow-2xl shadow-black/50 border-b border-space-cadet-light flex items-center">
	<!-- Mobile navbar and hamburger button -->
	<button class="md:hidden" onclick={() => (isOpen = !isOpen)}>
		{#if !isOpen}
			<Menu />
		{:else}
			<X />
		{/if}
	</button>
	<a href="/" class="md:hidden m-auto"><img src="yarg-logo.png" class="h-10" alt="YARG Logo" /></a>

	<!-- Desktop navbar -->
	<div class="hidden md:flex md:w-full justify-between items-center">
		<div class="flex items-center gap-8 text-xl">
			<a href="/"><img src="yarg-logo.png" class="h-10" alt="YARG Logo" /></a>
			<a href="/download">Download</a>
			<a href="/news">News</a>
			<a href="/content">Content</a>
			<a href="https://docs.yarg.in">Docs</a>
		</div>
		
		<div class="flex gap-4 text-xl">
			<a href="https://github.com/YARC-Official/YARG">
				<img src="svgs/github.svg" class="h-8 text-white" alt="GitHub Logo" />
			</a>
			<a href="https://x.com/YARGGame">
				<img src="svgs/twitter.svg" class="h-8 text-white" alt="Twitter Logo" />
			</a>
			<a href="https://discord.gg/yarg">
				<img src="svgs/discord.svg" class="h-8 text-white" alt="Discord Logo" />
			</a>
		</div>
	</div>
</nav>

<!-- Mobile navbar -->
<div class="md:hidden">
	{#if isOpen}
		<div class="fixed inset-0 top-16 z-0 p-8 bg-rich-black text-white flex flex-col justify-between">
			<div class="flex flex-col gap-8 text-xl">
				<a href="/download">Download</a>
				<a href="/news">News</a>
				<a href="/content">Content</a>
				<a href="https://docs.yarg.in">Docs</a>
			</div>

			<div class="flex gap-4 text-xl">
				<a href="https://github.com/YARC-Official/YARG">
					<img src="/svgs/github.svg" class="h-8 text-white" alt="GitHub Logo" />
				</a>
				<a href="https://x.com/YARGGame">
					<img src="/svgs/twitter.svg" class="h-8 text-white" alt="Twitter Logo" />
				</a>
				<a href="https://discord.gg/yarg">
					<img src="/svgs/discord.svg" class="h-8 text-white" alt="Discord Logo" />
				</a>
			</div>
		</div>
	{/if}
</div>