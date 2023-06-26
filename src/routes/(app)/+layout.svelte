<script lang="ts">
	import { fly } from 'svelte/transition';
	import './app.css';
	import { Layout, Button, Input } from 'stwui';
	import breakpoints from '$lib/stores/breakpoints';

	const search_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>';
	const filter_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>filter-variant</title><path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" /></svg>';
	const apple_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>food-apple</title><path d="M20,10C22,13 17,22 15,22C13,22 13,21 12,21C11,21 11,22 9,22C7,22 2,13 4,10C6,7 9,7 11,8V5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5V3H13V8C15,7 18,7 20,10Z" /></svg>';
	const calendar_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>calendar-multiselect</title><path d="M19,19V8H5V19H19M16,1H18V3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1M7,10H9V12H7V10M15,10H17V12H15V10M11,14H13V16H11V14M15,14H17V16H15V14Z" /></svg>';
	const list_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>format-list-checks</title><path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" /></svg>';
	const cog_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>';
	const arrow_left_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>';

	let searchOpen = false;
	let outerWidth: number;

	function toggleSearch() {
		searchOpen = !searchOpen;
	}

	$: {
		if (outerWidth > 1535) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: true,
				xl: true,
				'2xl': true
			};
		} else if (outerWidth > 1279) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: true,
				xl: true,
				'2xl': false
			};
		} else if (outerWidth > 1023) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: true,
				xl: false,
				'2xl': false
			};
		} else if (outerWidth > 767) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: false,
				xl: false,
				'2xl': false
			};
		} else if (outerWidth > 639) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: false,
				lg: false,
				xl: false,
				'2xl': false
			};
		} else {
			$breakpoints = {
				xs: true,
				sm: false,
				md: false,
				lg: false,
				xl: false,
				'2xl': false
			};
		}
	}
</script>

<svelte:window bind:outerWidth />

<Layout class="h-full">
	<Layout.Header class="relative bg-primary">
		{#if $breakpoints.md}
			Show nav
		{/if}
		{#if !searchOpen}
			<div
				class="flex flex-row items-center justify-between w-full absolute inset-0 pr-[calc(var(--sar)+1rem)] pl-[calc(var(--sal)+1rem)]"
				in:fly={{ y: -200, delay: 300 }}
				out:fly={{ y: -200 }}
			>
				<h1 class="text-primary-content">Meals</h1>
				<div class="flex flex-row items-center justify-end gap-2" data-theme="dark">
					<Button type="ghost" shape="circle" on:click={toggleSearch} class="!text-primary-content">
						<Button.Icon data={search_icon} />
					</Button>
					<Button type="ghost" shape="circle" class="!text-primary-content">
						<Button.Icon data={filter_icon} />
					</Button>
				</div>
			</div>
		{/if}
		{#if searchOpen}
			<div
				class="flex flex-row gap-2 w-full items-center justify-start absolute inset-0 pr-[calc(var(--sar)+1rem)] pl-[calc(var(--sal)+1rem)]"
				in:fly={{ x: -200, delay: 300 }}
				out:fly={{ x: -200 }}
			>
				<Button
					type="ghost"
					shape="circle"
					on:click={toggleSearch}
					data-theme="dark"
					class="!text-primary-content"
				>
					<Button.Icon data={arrow_left_icon} />
				</Button>
				<Input name="search" placeholder="Search meals..." class="w-full flex-grow" allowClear>
					<Input.Leading slot="leading" data={search_icon} />
				</Input>
			</div>
		{/if}
	</Layout.Header>
	<Layout.Content class="h-full overflow-auto">
		<Layout.Content.Body>
			<slot />
		</Layout.Content.Body>
	</Layout.Content>
	{#if !$breakpoints.md}
		<Layout.Footer class="shadow-negative-md flex flex-row items-center justify-content px-0">
			<Button
				class="h-full w-full flex-col text-xs bg-transparent shadow-none border-none rounded-none"
				type="default"
				shape="square"
				href="/meals"
			>
				<Button.Icon
					data={apple_icon}
					size="32px"
					class="text-secondary-content text-opacity-80 mb-1"
				/>
				Meals
			</Button>
			<Button
				class="h-full w-full flex-col text-xs bg-transparent shadow-none border-none rounded-none"
				type="default"
				shape="square"
				href="/plan"
			>
				<Button.Icon
					data={calendar_icon}
					size="32px"
					class="text-secondary-content text-opacity-80 mb-1"
				/>
				Plan
			</Button>
			<Button
				class="h-full w-full flex-col text-xs bg-transparent shadow-none border-none rounded-none"
				type="default"
				shape="square"
				href="/shopping"
			>
				<Button.Icon
					data={list_icon}
					size="32px"
					class="text-secondary-content text-opacity-80 mb-1"
				/>
				Shopping
			</Button>
			<Button
				class="h-full w-full flex-col text-xs bg-transparent shadow-none border-none rounded-none"
				type="default"
				shape="square"
				href="/settings"
			>
				<Button.Icon
					data={cog_icon}
					size="32px"
					class="text-secondary-content text-opacity-80 mb-1"
				/>
				Settings
			</Button>
		</Layout.Footer>
	{/if}
</Layout>
