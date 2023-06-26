<script lang="ts">
	import { Input, Button } from 'stwui';
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';

	const email_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>';
	const lock_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>lock</title><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>';

	export let form;

	let loading = false;

	$: if (form?.success) {
		goto('/meals');
	} else if (!form?.success) {
		loading = false;
	}
</script>

<h1 class="text-center w-full">Sign In</h1>
<form
	method="post"
	class="flex flex-col space-y-4 w-full"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
		};
	}}
>
	<Input name="email" type="email">
		<Input.Leading slot="leading" data={email_icon} />
		<Input.Label slot="label">Email</Input.Label>
	</Input>
	<Input name="password" type="password" showPasswordToggle>
		<Input.Leading slot="leading" data={lock_icon} />
		<Input.Label slot="label">Password</Input.Label>
	</Input>
	<Button htmlType="submit" size="xl" type="primary" class="green-gradient" {loading}
		>Sign In</Button
	>
	{#if form && form.message && form.message.length > 0}
		<p class="text-red-500 text-sm" transition:slide>{form.message}</p>
	{/if}
	<div class="flex flex-row items-center justify-between">
		<a class="link block w-full" href="/forgot-password">Forgot password?</a>
		<a class="link block w-full text-right" href="/sign-up">Need an Account?</a>
	</div>
</form>
