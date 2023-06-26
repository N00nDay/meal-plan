<script lang="ts">
	import { Input, Button } from 'stwui';
	import { applyAction, enhance } from '$app/forms';

	const email_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>';

	let loading = false;
</script>

<h1 class="text-center w-full text-content">Forgot Password</h1>
<p class="text-secondary-content text-center">Don't worry it happens to the best of us!</p>
<form
	method="post"
	class="flex flex-col space-y-4 w-full"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	}}
>
	<Input name="email" type="email">
		<Input.Leading slot="leading" data={email_icon} />
		<Input.Label slot="label">Email</Input.Label>
	</Input>
	<Button htmlType="submit" size="xl" type="primary" class="green-gradient" {loading}>Submit</Button
	>
	<a class="link block w-full text-center" href="/sign-in">Remembered your password?</a>
</form>
