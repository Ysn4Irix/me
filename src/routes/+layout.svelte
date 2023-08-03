<script>
	import '../app.postcss'
</script>

<svelte:head>
	<title>Ysn4Irix</title>
	<meta name="description" content="Ysn4Irix's personal website" />
	<meta name="keywords" content="ysnirix, ysn4irix, github" />
	<meta name="author" content="Ysnirix" />
</svelte:head>

<!-- Root -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
	<slot />

	<footer class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto">
		<div class="flex flex-col items-center justify-center">
			<p class="text-gray-500 text-sm dark:text-gray-400">&copy; Made with ❤️ by Ysn4Irix</p>
		</div>
	</footer>
</div>

<!-- Root -->
