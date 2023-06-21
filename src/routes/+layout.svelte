<script>
	import '../app.css';
	import '../app.postcss';

	import { Button, Portal, Drawer, Layout } from 'stwui';
	import logo from '$lib/assets/180.png';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	$: console.log('session', session);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	const menu_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';

	let menuOpen = false;

	function toggleMenuState() {
		menuOpen = !menuOpen;
	}

	async function handleSignOut() {
		await supabase.auth.signOut();
	}
</script>

<Layout>
	<div class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10 bg-surface shadow-md" />
	<Layout.Header>
		<a href="/" class="-m-1.5 p-1.5 flex flex-row gap-2 items-center">
			<img class="h-8 w-auto" src={logo} alt="logo" />
			<span
				class="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-content"
				>You Got To Eat</span
			>
		</a>

		<Layout.Header.Extra slot="extra" class="space-x-2">
			{#if session === null}
				<Button
					type="primary"
					shape="pill"
					class="bg-success text-gray-800 hidden md:block"
					href="/sign-in">Get Started</Button
				>
			{:else}
				<Button href="/meals" class="hidden md:block">Meals</Button>
				<Button href="/planner" class="hidden md:block">Planner</Button>
				<Button href="/shopping-list" class="hidden md:block">Shopping</Button>
				<Button href="/blog" class="hidden md:block">Blog</Button>

				<Button
					type="primary"
					shape="pill"
					class="bg-error text-gray-800 hidden md:block"
					on:click={handleSignOut}>Sign Out</Button
				>
			{/if}

			<Button shape="circle" on:click={toggleMenuState} class="block md:hidden">
				<Button.Icon data={menu_icon} />
			</Button>
		</Layout.Header.Extra>
	</Layout.Header>

	<Layout.Content class="h-[calc(100%-64px)] bg-background">
		<Layout.Content.Body
			id="content-body"
			class="relative h-full w-full overflow-x-hidden overflow-y-auto pt-[calc(1rem+var(--sat))] pb-[calc(1rem+var(--sab))] pr-[calc(1rem+var(--sar))] pl-[calc(1rem+var(--sal))] md:pt-[calc(2rem+var(--sat))] md:pb-[calc(2rem+var(--sab))] md:pr-[calc(2rem+var(--sar))] md:pl-[calc(2rem+var(--sal))]"
		>
			<slot />

			<Layout.Footer class="h-auto shadow-none bg-background">
				<div class="mx-auto max-w-7xl overflow-hidden pt-8">
					{#if session !== null}
						<nav
							class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
							aria-label="Footer"
						>
							<div class="pb-6">
								<a
									href="/meals"
									class="text-sm leading-6 text-secondary-content hover:text-opacity-75">Meals</a
								>
							</div>
							<div class="pb-6">
								<a
									href="/planner"
									class="text-sm leading-6 text-secondary-content hover:text-opacity-75">Planner</a
								>
							</div>
							<div class="pb-6">
								<a
									href="/shopping-list"
									class="text-sm leading-6 text-secondary-content hover:text-opacity-75">Shopping</a
								>
							</div>
							<div class="pb-6">
								<a
									href="/blog"
									class="text-sm leading-6 text-secondary-content hover:text-opacity-75">Blog</a
								>
							</div>
						</nav>
					{/if}
					<p class="mt-6 text-center text-xs leading-5 text-content">
						&copy; 2023 Digital Point Solutions, LLC All rights reserved.
					</p>
				</div>
			</Layout.Footer>
		</Layout.Content.Body>
	</Layout.Content>
</Layout>

<Portal>
	{#if menuOpen}
		<Drawer handleClose={toggleMenuState}>
			<Drawer.Header slot="header">
				<a
					href="/"
					class="-m-1.5 p-1.5 flex flex-row gap-2 items-center"
					on:click={toggleMenuState}
				>
					<span class="sr-only">You Got To Eat</span>
					<img class="h-8 w-auto" src={logo} alt="logo" />
					<span
						class="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-content"
						>You Got To Eat</span
					>
				</a>
			</Drawer.Header>
			<Drawer.Content slot="content">
				<div class="flow-root">
					<div class="-my-6">
						{#if session !== null}
							<div class="space-y-2 py-6">
								<a
									href="/meals"
									on:click={toggleMenuState}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-content hover:text-secondary-content-hover"
									>Meals</a
								>
								<a
									href="/planner"
									on:click={toggleMenuState}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-content hover:text-secondary-content-hover"
									>Planner</a
								>
								<a
									href="/shopping-list"
									on:click={toggleMenuState}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text-secondary-content hover:bg-gray-50"
									>Shopping</a
								>
								<a
									href="/blog"
									on:click={toggleMenuState}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text-secondary-content hover:bg-gray-50"
									>Blog</a
								>
							</div>

							<Button
								type="primary"
								shape="pill"
								class="bg-error text-gray-800 w-full"
								on:click={handleSignOut}>Sign Out</Button
							>
						{:else}
							<Button
								type="primary"
								shape="pill"
								class="bg-success text-gray-800 w-full"
								href="/sign-in">Sign In</Button
							>
						{/if}
					</div>
				</div>
			</Drawer.Content>
		</Drawer>
	{/if}
</Portal>
