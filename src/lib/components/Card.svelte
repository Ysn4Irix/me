<script>
	export let name
	export let description
	export let link
	export let demo
	export let language
	export let languageColor
</script>

<!-- Card -->
<div class="group flex flex-col h-full bg-slate-800 shadow-sm rounded-xl">
	<div class="p-1 text-right">
		<span
			class="items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium text-gray-800"
			style={`background-color: ${languageColor}`}
		>
			{language}
		</span>
	</div>
	<div class="p-6 md:p-6">
		<h3 class="block mb-1 text-xl font-semibold uppercase text-blue-600 dark:text-blue-500">
			{name}
		</h3>

		<p class="mt-3 text-gray-200">
			{description}
		</p>
	</div>
	<div class="mt-auto flex">
		<a
			class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-gray-800 text-gray-200 shadow-sm align-middle hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-blue-600 transition-all text-sm sm:p-4"
			href={link}
			target="_blank"
		>
			Source Code
		</a>
		<a
			class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-gray-800 text-gray-200 shadow-sm align-middle hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-blue-600 transition-all text-sm sm:p-4"
			href={demo}
			target="_blank"
		>
			Demo
		</a>
	</div>
</div>
<!-- End Card -->
