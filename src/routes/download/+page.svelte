<script>
	import Download from '@lucide/svelte/icons/download';
	import { onMount } from 'svelte';

	let platform = $state("");
	let downloadLinks = $state({
		launcherVersion: "#.#.#",
		gameVersion: "#.#.#",
		launcherDownloads: {
			windows: null,
			mac: null,
			linux: null
		},
		portableDownloads: {
			win: null,
			mac: null,
			linux: null
		}
	});

	onMount(async () => {
		const releases = (await (await fetch("https://api.github.com/repos/YARC-Official/YARC-Launcher/releases/latest")).json());
		const portables = (await (await fetch("https://api.github.com/repos/YARC-Official/YARG/releases/latest")).json());
		platform = navigator.platform.startsWith("Win") ? "Windows" : navigator.platform.startsWith("Mac") ? "Mac" : "Linux";

		downloadLinks = {
			launcherVersion: releases.tag_name,
			gameVersion: portables.tag_name,
			launcherDownloads: {
				windows: releases.assets[5].browser_download_url,
				mac: releases.assets[1].browser_download_url,
				linux: releases.assets[9].browser_download_url
			},
			portableDownloads: {
				win: portables.assets[4].browser_download_url,
				mac: portables.assets[2].browser_download_url,
				linux: portables.assets[0].browser_download_url
			}
		}
	});
</script>

<div class="border-b border-space-cadet-light flex flex-col gap-8 items-center justify-center p-16">
	<h1 class="text-5xl text-center">Download YARC Launcher ({downloadLinks.launcherVersion})</h1>

	<p class="max-w-xl text-xl">With the YARC Launcher you can manage multiple installs of YARG, download officially released setlists, and install select custom content like venues!</p>

	<a href={downloadLinks.launcherDownloads[platform.toLowerCase()]} class="px-8 py-4 bg-vivid-sky text-black/75 inset-ring-2 inset-ring-white/25 font-bold rounded-full flex gap-2 items-center">
		<Download size={24} />
		Download for {platform}
	</a>

	<p class="text-cool-gray">Not your OS? More downloads below!</p>
</div>

<div class="p-16 bg-oxford flex flex-col gap-16 items-center justify-center text-center">
	<h2 class="text-4xl">More Downloads</h2>

	<div class="text-cool-gray flex flex-col md:flex-row gap-16 md:gap-64 items-center justify-center">
		<div class="flex flex-col gap-2 text-xl">
			<h3 class="text-2xl text-white">Not on {platform}?</h3>
			<a href={downloadLinks.launcherDownloads.windows} class={platform === "Windows" ? "hidden" : ""}>Download for Windows</a>
			<a href={downloadLinks.launcherDownloads.mac} class={platform === "Mac" ? "hidden" : ""}>Download for Mac</a>
			<a href={downloadLinks.launcherDownloads.linux} class={platform === "Linux" ? "hidden" : ""}>Download for Linux</a>
		</div>
		<div class="flex flex-col gap-2 text-xl">
			<h3 class="text-2xl text-white">Portable Downloads</h3>
			<a href={downloadLinks.portableDownloads.win}>Download for Windows</a>
			<a href={downloadLinks.portableDownloads.mac}>Download for Mac</a>
			<a href={downloadLinks.portableDownloads.linux}>Download for Linux</a>
		</div>
	</div>
</div>