<script>
	import techs from '$lib/technologies.json'
	import Image from '$lib/components/Image.svelte'
	import Card from '$lib/components/Card.svelte'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<!-- <pre>
	{JSON.stringify(data.data, null, 2)}
</pre> -->
<!-- Grid -->
<div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
	<div class="hidden md:block mb-24 md:mb-0 sm:px-6">
		<div class="relative">
			<img
				crossorigin="anonymous"
				class="rounded-xl w-full shadow-xl"
				src="https://files.ysnirix.xyz/me.1690904022576.png"
				alt="me"
			/>

			<!-- SVG Element -->
			<div class="absolute bottom-0 left-0 -z-[1] translate-y-10 -translate-x-14">
				<svg
					class="max-w-[10rem] h-auto text-slate-400 dark:text-slate-700"
					width="696"
					height="653"
					viewBox="0 0 696 653"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
					<circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
					<circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
					<circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
					<circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
					<circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
					<circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
					<circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
					<circle cx="128.5" cy="128.5" r="29.5" fill="currentColor" />
					<circle cx="227.5" cy="128.5" r="29.5" fill="currentColor" />
					<circle cx="326.5" cy="128.5" r="29.5" fill="currentColor" />
					<circle cx="425.5" cy="128.5" r="29.5" fill="currentColor" />
					<circle cx="524.5" cy="128.5" r="29.5" fill="currentColor" />
					<circle cx="623.5" cy="128.5" r="29.5" fill="currentColor" />
					<circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
					<circle cx="171.5" cy="227.5" r="29.5" fill="currentColor" />
					<circle cx="270.5" cy="227.5" r="29.5" fill="currentColor" />
					<circle cx="369.5" cy="227.5" r="29.5" fill="currentColor" />
					<circle cx="468.5" cy="227.5" r="29.5" fill="currentColor" />
					<circle cx="567.5" cy="227.5" r="29.5" fill="currentColor" />
					<circle cx="666.5" cy="227.5" r="29.5" fill="currentColor" />
					<circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
					<circle cx="128.5" cy="326.5" r="29.5" fill="currentColor" />
					<circle cx="227.5" cy="326.5" r="29.5" fill="currentColor" />
					<circle cx="326.5" cy="326.5" r="29.5" fill="currentColor" />
					<circle cx="425.5" cy="326.5" r="29.5" fill="currentColor" />
					<circle cx="524.5" cy="326.5" r="29.5" fill="currentColor" />
					<circle cx="623.5" cy="326.5" r="29.5" fill="currentColor" />
					<circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
					<circle cx="171.5" cy="425.5" r="29.5" fill="currentColor" />
					<circle cx="270.5" cy="425.5" r="29.5" fill="currentColor" />
					<circle cx="369.5" cy="425.5" r="29.5" fill="currentColor" />
					<circle cx="468.5" cy="425.5" r="29.5" fill="currentColor" />
					<circle cx="567.5" cy="425.5" r="29.5" fill="currentColor" />
					<circle cx="666.5" cy="425.5" r="29.5" fill="currentColor" />
					<circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
					<circle cx="128.5" cy="524.5" r="29.5" fill="currentColor" />
					<circle cx="227.5" cy="524.5" r="29.5" fill="currentColor" />
					<circle cx="326.5" cy="524.5" r="29.5" fill="currentColor" />
					<circle cx="425.5" cy="524.5" r="29.5" fill="currentColor" />
					<circle cx="524.5" cy="524.5" r="29.5" fill="currentColor" />
					<circle cx="623.5" cy="524.5" r="29.5" fill="currentColor" />
					<circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
					<circle cx="171.5" cy="623.5" r="29.5" fill="currentColor" />
					<circle cx="270.5" cy="623.5" r="29.5" fill="currentColor" />
					<circle cx="369.5" cy="623.5" r="29.5" fill="currentColor" />
					<circle cx="468.5" cy="623.5" r="29.5" fill="currentColor" />
					<circle cx="567.5" cy="623.5" r="29.5" fill="currentColor" />
					<circle cx="666.5" cy="623.5" r="29.5" fill="currentColor" />
				</svg>
			</div>
			<!-- End SVG Element -->
		</div>
	</div>
	<!-- End Col -->

	<div>
		<!-- Blockquote -->
		<blockquote class="relative">
			<div class="relative z-10">
				<p
					class="text-4xl font-semibold text-[#9733EE] tracking-wide mb-3 dark:text-purple-700 font-pacifico"
				>
					Ysn4Irix
				</p>

				<p
					class="text-lg pt-2 font-medium text-gray-200 md:text-xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200"
				>
					<span class="text-[#a868e0] italic font-normal font-pacifico"
						>Life would be much easier if I had the source code</span
					>, A full stack web developer with a passion for building web applications and working
					with new technologies, I love to code and learn new things, and im a fast learner and a
					team player who is proficient in
				</p>
			</div>

			<footer class="mt-6">
				<div
					class="grid lg:grid-cols-5 lg:gap-4 xs:grid-cols-4 xs:gap-4 items-center xs:text-center"
				>
					{#each techs as tech}
						<Image id={tech.name} src={tech.image} alt={tech.tech} />
					{/each}
				</div>
			</footer>
		</blockquote>
		<!-- End Blockquote -->
	</div>
	<!-- End Col -->
</div>
<!-- End Grid -->

<!-- Project Card -->
<div class="max-w-[85rem] px-4 pt-24 sm:px-6 lg:px-8 lg:pt-24 mx-auto">
	<h2>
		<span
			class="block text-3xl font-semibold text-[#9733EE] tracking-wide mb-8 dark:text-purple-700 font-pacifico"
		>
			Latest Projects
		</span>
	</h2>
	<!-- Grid -->
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.pinnedRepos as project}
			<Card
				name={project.repo}
				description={project.description}
				link={project.link}
				demo={project.website}
				language={project.language}
				languageColor={project.languageColor}
			/>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Project Card -->
