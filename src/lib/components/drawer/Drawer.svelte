<script lang="ts">
	import { fly } from 'svelte/transition';
	import breakpoints from '$lib/stores/breakpoints';
	import { Modal } from 'stwui';
	import { goto } from '$app/navigation';
	export let show = false;

	function handleClose() {
		goto('/meals');
	}
</script>

{#if show && $breakpoints.md}
	<Modal {handleClose} class="!rounded-t-2xl h-full">
		<Modal.Content slot="content" class="p-0 sm:p-0 !rounded-t-2xl h-full border-none">
			<Modal.Content.Body class="p-0 sm:p-0 h-full !rounded-t-2xl" slot="body">
				<slot />
			</Modal.Content.Body>
		</Modal.Content>
	</Modal>
{:else if show}
	<div
		class="fixed inset-0 bg-background bg-opacity-10 backdrop-blur-sm transition-opacity pointer-events-auto z-10"
	>
		<div
			id="meal-page"
			class="bottom-0 w-full z-20 !opacity-100 rounded-t-2xl pt-10 absolute h-full"
			transition:fly={{ y: 1000 }}
		>
			<div class="h-full w-full flex flex-col bg-background rounded-t-2xl shadow-negative-2xl">
				<slot />
			</div>
		</div>
	</div>
{/if}
