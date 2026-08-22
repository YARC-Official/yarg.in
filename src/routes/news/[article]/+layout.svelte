<script>
	import './layout.css'
	let { children } = $props();
</script>

<div class="max-w-5xl mx-auto">
	{@render children()}
</div>