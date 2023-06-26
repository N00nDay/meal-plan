<script lang="ts">
	import Meal from '$lib/components/meal/Meal.svelte';
	import './app.css';
	import { Portal, Button, Rating } from 'stwui';
	import { page } from '$app/stores';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import no_image from '$lib/assets/no_image.jpeg';

	const arrow_left_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>';
	const calendar_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>calendar-month</title><path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg>';
	const heart_outline_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg>';
	const heart_filled_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>heart</title><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg>';
	const share_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>share</title><path d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" /></svg>';
	const print_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>printer</title><path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" /></svg>';
</script>

<div class="h-full w-full">
	<section class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
		<div class="grid gap-4">
			<Meal />
			<Meal />
			<Meal />
		</div>
		<div class="grid gap-4">
			<Meal />
			<Meal />
			<Meal />
		</div>
		<div class="grid gap-4">
			<Meal />
			<Meal />
			<Meal />
		</div>
		<div class="grid gap-4">
			<Meal />
			<Meal />
			<Meal />
		</div>
	</section>

	<Portal>
		<Drawer show={$page.url.searchParams.get('id') ? true : false}>
			<div class="relative w-full h-52 max-h-52">
				<Button
					href="/meals"
					type="default"
					shape="circle"
					class="fixed z-20 ml-4 mt-4 !text-primary-content"
					data-theme="dark"
				>
					<Button.Icon data={arrow_left_icon} />
				</Button>
				<img
					src={no_image}
					alt="recipe cover"
					class="object-cover object-center w-full fixed rounded-t-2xl z-10 h-52 max-h-52"
				/>
				<div class="max-h-52 h-full" />
			</div>
			<div class="flex-grow h-[calc(100%-13rem)] overflow-auto p-4">
				<h1 class="mb-1">Recipe Title</h1>
				<Rating name="recipe-rating" value={3} showValue size="sm" />
				<p class="mb-2 mt-3">Here is a description of your recipe</p>
				<p class="mb-2 text-xs">
					Recipe by <strong>Recipe Owner</strong> | Created on June 21, 2023
				</p>
				<div class="flex flex-row gap-2 mb-4 w-full">
					<Button type="primary" shape="pill">
						<Button.Leading slot="leading" data={calendar_icon} />
						ADD TO MEAL PLANNER
					</Button>
					<Button shape="circle">
						<Button.Icon slot="icon" data={heart_outline_icon} />
					</Button>
					<Button shape="circle">
						<Button.Icon slot="icon" data={print_icon} />
					</Button>
					<Button shape="circle">
						<Button.Icon slot="icon" data={share_icon} />
					</Button>
				</div>
				<div class="mb-4">
					<h3>Ingredients List</h3>
					<ul>
						<li>Ingredient 1</li>
						<li>Ingredient 2</li>
						<li>Ingredient 3</li>
						<li>Ingredient 4</li>
						<li>Ingredient 5</li>
						<li>Ingredient 6</li>
					</ul>
				</div>
				<div class="mb-4 space-y-3">
					<h3>Directions</h3>
					<p><strong>1.</strong> Instrucitons for step 1</p>
					<p><strong>2.</strong> Instrucitons for step 2</p>
					<p><strong>3.</strong> Instrucitons for step 3</p>
					<p><strong>4.</strong> Instrucitons for step 4</p>
					<p><strong>5.</strong> Instrucitons for step 5</p>
				</div>
				<div>
					<h3>Comments Section</h3>
				</div>
			</div>
		</Drawer>
	</Portal>
</div>

<style>
	ul {
		display: block;
		list-style-type: disc;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 40px;
	}

	li {
		list-style-type: disc;
	}
</style>
