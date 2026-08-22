<script>
	let { type } = $props(); 

	const BADGE_DATA = {
		"update": {
			bg: 'bg-vivid-sky/15',
			textColor: 'text-vivid-sky',
			text: "Update"
		},
		"announcement": {
			bg: 'bg-yarg-emerald/15',
			textColor: 'text-yarg-emerald',
			text: "Announcement"
		},
		"release": {
			bg: 'bg-imperial/15',
			textColor: 'text-imperial',
			text: "Release"
		}
	};

	let badgeText = $derived(BADGE_DATA[type]?.text || type);
	let badgeBg = $derived(BADGE_DATA[type]?.bg || 'bg-vivid-sky/15');
	let badgeTextColor = $derived(BADGE_DATA[type]?.textColor || 'text-vivid-sky');
</script>

<div class="bg-black rounded-full w-fit">
	<div class="px-4 py-1 {badgeBg} rounded-full {badgeTextColor}">
		{badgeText}
	</div>
</div>