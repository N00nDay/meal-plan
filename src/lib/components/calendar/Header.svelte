<script lang="ts">
	export let day: string;
</script>

<div class="flex justify-center bg-surface py-2 w-full">
	<span>{day.charAt(0).toUpperCase()}</span>
	<span class="sr-only sm:not-sr-only">{day.slice(1)}</span>
</div>
