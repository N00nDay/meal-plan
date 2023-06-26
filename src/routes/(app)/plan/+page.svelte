<script lang="ts">
	import { ButtonGroup, Card, Button } from 'stwui';
	import Day from '$lib/components/calendar/Day.svelte';
	import Header from '$lib/components/calendar/Header.svelte';

	const left_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>';
	const right_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>';
	const plus_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>';
</script>

<Card class="overflow-hidden mb-4 max-w-2xl mx-auto" bordered={false}>
	<Card.Header slot="header" class="flex flex-row">
		<h1 class="text-base font-semibold leading-6 text-content flex-grow">
			<time datetime="2022-01">Week of June 18th, 2023</time>
		</h1>
		<div class="flex items-center" slot="extra">
			<div class="relative flex items-center rounded-md bg-surface shadow-sm md:items-stretch">
				<div class="pointer-events-none absolute inset-0 rounded-md" aria-hidden="true" />
				<ButtonGroup>
					<ButtonGroup.Button>
						<ButtonGroup.Button.Icon slot="icon" data={left_icon} />
					</ButtonGroup.Button>
					<ButtonGroup.Button>This Week</ButtonGroup.Button>
					<ButtonGroup.Button>
						<ButtonGroup.Button.Icon slot="icon" data={right_icon} />
					</ButtonGroup.Button>
				</ButtonGroup>
			</div>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<div class="flex flex-auto flex-col">
			<div
				class="flex flex-row justify-evenly text-center text-xs font-semibold leading-6 text-secondary divide-x divide-border border-b border-border"
			>
				<Header day="Sun" />
				<Header day="Mon" />
				<Header day="Tue" />
				<Header day="Wed" />
				<Header day="Thu" />
				<Header day="Fri" />
				<Header day="Sat" />
			</div>
			<div
				class="flex text-xs leading-6 text-secondary flex-row justify-evenly divide-x divide-border border-b border-border"
			>
				<Day day={18} />
				<Day day={19} />
				<Day day={20} />
				<Day day={21} />
				<Day day={22} />
				<Day day={23} />
				<Day day={24} />
			</div>
		</div>
	</Card.Content>
</Card>

<Card class=" max-w-2xl mx-auto mb-4">
	<Card.Header slot="header" class="flex flex-row w-full">
		<div class="flex-grow">Sunday, June 18th</div>

		<div slot="extra">
			<Button type="primary" size="xs">
				<Button.Leading slot="leading" data={plus_icon} />
				Add Meal/Snack
			</Button>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow">
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</Card.Content>
</Card>

<Card class=" max-w-2xl mx-auto mb-4">
	<Card.Header slot="header" class="flex flex-row w-full">
		<div class="flex-grow">Monday, June 19th</div>

		<div slot="extra">
			<Button type="primary" size="xs">
				<Button.Leading slot="leading" data={plus_icon} />
				Add Meal/Snack
			</Button>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow">
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</Card.Content>
</Card>

<Card class=" max-w-2xl mx-auto mb-4">
	<Card.Header slot="header" class="flex flex-row w-full">
		<div class="flex-grow">Tuesday, June 20th</div>

		<div slot="extra">
			<Button type="primary" size="xs">
				<Button.Leading slot="leading" data={plus_icon} />
				Add Meal/Snack
			</Button>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow">
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</Card.Content>
</Card>

<Card class=" max-w-2xl mx-auto mb-4">
	<Card.Header slot="header" class="flex flex-row w-full">
		<div class="flex-grow">Wednesday, June 21st</div>

		<div slot="extra">
			<Button type="primary" size="xs">
				<Button.Leading slot="leading" data={plus_icon} />
				Add Meal/Snack
			</Button>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow">
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</Card.Content>
</Card>

<Card class=" max-w-2xl mx-auto mb-4">
	<Card.Header slot="header" class="flex flex-row w-full">
		<div class="flex-grow">Thursday, June 22nd</div>

		<div slot="extra">
			<Button type="primary" size="xs">
				<Button.Leading slot="leading" data={plus_icon} />
				Add Meal/Snack
			</Button>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow">
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</Card.Content>
</Card>

<Card class=" max-w-2xl mx-auto mb-4">
	<Card.Header slot="header" class="flex flex-row w-full">
		<div class="flex-grow">Friday, June 23rd</div>

		<div slot="extra">
			<Button type="primary" size="xs">
				<Button.Leading slot="leading" data={plus_icon} />
				Add Meal/Snack
			</Button>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow">
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</Card.Content>
</Card>

<Card class=" max-w-2xl mx-auto">
	<Card.Header slot="header" class="flex flex-row w-full">
		<div class="flex-grow">Saturday, June 24th</div>

		<div slot="extra">
			<Button type="primary" size="xs">
				<Button.Leading slot="leading" data={plus_icon} />
				Add Meal/Snack
			</Button>
		</div>
	</Card.Header>
	<Card.Content slot="content" class="!p-0">
		<ol class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow">
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Maple syrup museum</p>
					<time datetime="2022-01-15T09:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						3PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Maple syrup museum</span></a
				>
			</li>
			<li class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
				<div class="flex-auto">
					<p class="font-semibold text-gray-900">Hockey game</p>
					<time datetime="2022-01-22T19:00" class="mt-2 flex items-center text-gray-700">
						<svg
							class="mr-2 h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
								clip-rule="evenodd"
							/>
						</svg>
						7PM
					</time>
				</div>
				<a
					href="/"
					class="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
					>Edit<span class="sr-only">, Hockey game</span></a
				>
			</li>
		</ol>
	</Card.Content>
</Card>
