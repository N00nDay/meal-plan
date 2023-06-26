<script lang="ts">
	import utensils_bg from '$assets/utensils.png';
	import { Card } from 'stwui';
	import { fly, fade } from 'svelte/transition';

	export let data;
</script>

<div class="bg-white md:bg-background md:items-center md:justify-center flex flex-col h-full">
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
</div>
