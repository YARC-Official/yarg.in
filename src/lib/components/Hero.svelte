<script>
	import Mouse from '@lucide/svelte/icons/mouse';

  let scrollY = $state(0);
  let bgOffset = $derived(scrollY * 0.5);
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="relative h-screen overflow-hidden">
  <div 
    class="absolute inset-0 bg-center bg-cover will-change-transform"
    style="background-image: url('yarg-full-blur.png'); transform: translateY({bgOffset}px);"
  ></div>

  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <Mouse size={32} class="text-white animate-bounce" />
  </div>

  <div class="relative m-auto h-screen z-1 max-w-4xl p-32 flex items-center justify-center">
    <img src="yarg-logo.png" class="drop-shadow-2xl drop-shadow-black" alt="YARG Logo" />
  </div>
</div>