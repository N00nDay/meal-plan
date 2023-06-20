<script lang="ts">
	import { Badge } from 'stwui';

	export let day: number;
	export let breakfast: false;
	export let lunch: false;
	export let dinner: false;
</script>

<div class="relative bg-surface px-3 py-2 h-32 w-full">
	<time datetime="2022-01-03">{day}</time>
	<div class="flex flex-col justify-evenly items-stretch h-[calc(100%-15px)]">
		<div class="h-full">
			{#if breakfast}
				<Badge type="warn" class="inline-flex w-5 h-5 md:w-auto md:h-auto">
					<span class="hidden md:inline">Breakfast</span>
				</Badge>
			{/if}
		</div>
		<div class="h-full">
			{#if lunch}
				<Badge type="success" class="inline-flex w-5 h-5 md:w-auto md:h-auto">
					<span class="hidden md:inline">Lunch</span>
				</Badge>
			{/if}
		</div>
		<div class="h-full">
			{#if dinner}
				<Badge type="info" class="inline-flex w-5 h-5 md:w-auto md:h-auto">
					<span class="hidden md:inline">Dinner</span>
				</Badge>
			{/if}
		</div>
	</div>
</div>
