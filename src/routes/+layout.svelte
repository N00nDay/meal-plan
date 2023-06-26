<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	// import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
	// import 'simplebar/dist/simplebar.css';
	import { invalidate } from '$app/navigation';

	// let htmlElement: HTMLElement;
	// let theme: 'light' | 'dark' = 'light';

	// function toggleTheme(event: MediaQueryListEvent) {
	// 	theme = event.matches ? 'dark' : 'light';
	// 	htmlElement.setAttribute('data-theme', theme);
	// }

	export let data;
	$: console.log('data', data);

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		// htmlElement = document.documentElement;

		// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// 	theme = 'dark';
		// } else {
		// 	theme = 'light';
		// }

		// htmlElement.setAttribute('data-theme', theme);

		// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleTheme);

		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => {
			subscription.unsubscribe();
			// window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', toggleTheme);
		};
	});
</script>

<svelte:head>
	<!-- {#if theme === 'dark'}
		<meta name="theme-color" content="#242526" />
	{:else}
		<meta name="theme-color" content="#ffffff" />
	{/if} -->

	<!-- <title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} /> -->
	<!-- TODO:  figure out canonical rel -->
	<!-- <link rel="canonical" href="https://madewithsvelte.com/ui-library"> -->
	<!-- <meta name="og:title" content={$page.data.title} />
	<meta property="og:description" content={$page.data.description} /> -->
	<!-- TODO: add url to all page load functions -->
	<!-- <meta property="og:url" content={$page.data.url}> -->
	<!-- <meta name="twitter:title" content={$page.data.title} />
	<meta name="twitter:description" content={$page.data.description} /> -->
</svelte:head>

<!-- <div class="bg-white md:bg-background md:items-center md:justify-center flex flex-col h-full">
	<img
		src={utensils_bg}
		alt="background utensils"
		class="-mt-52 w-full md:hidden max-w-md mx-auto px-16"
	/>

	<div class="mt-8 w-full md:hidden h-full pb-8 overflow-hidden">
		{#key data.url}
			<div
				class="space-y-4 max-w-sm mx-auto px-8 md:max-w-full md:mx-0 md:flex md:flex-col md:items-center md:justify-center w-full h-full"
				in:fly={{ x: 200, duration: 300, delay: 300 }}
				out:fade={{ duration: 300 }}
			>
				<slot />
			</div>
		{/key}
	</div>

	<Card
		class="hidden md:block max-w-2xl w-full mx-auto overflow-hidden min-h-[436px] max-h-[436px] h-full"
	>
		<Card.Content
			slot="content"
			class="flex flex-row justify-evenly relative overflow-hidden max-w-full w-full h-full"
		>
			<div class="w-full min-w-[40%] max-w-[40%] h-full absolute left-0 top-0 bottom-0">
				<img
					src={utensils_bg}
					alt="background utensils"
					class="-mt-20 mx-auto h-full min-h-full max-h-full"
				/>
			</div>

			<div
				class="absolute top-0 right-0 bottom-0 w-full min-w-[60%] max-w-[60%] h-full overflow-hidden"
			>
				{#key data.url}
					<div
						class="space-y-4 max-w-sm mx-auto px-8 md:max-w-full md:mx-0 md:flex md:flex-col md:items-center md:justify-center w-full h-full"
						in:fly={{ x: 200, duration: 300, delay: 300 }}
						out:fade={{ duration: 300 }}
					>
						<slot />
					</div>
				{/key}
			</div>
		</Card.Content>
	</Card>
</div> -->

<slot />
