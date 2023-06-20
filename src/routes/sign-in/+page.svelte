<script lang="ts">
	import { Card, Input, Button } from 'stwui';
	import { applyAction, enhance } from '$app/forms';

	const email_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>';

	let loading = false;
	export let form;
	export let data;
</script>

<Card class=" max-w-lg mx-auto">
	<Card.Content slot="content">
		<div class="flex flex-col space-y-4">
			{#if data.session}
				<p>You are already signed in.</p>
				<Button type="primary" href="/planner">Get Planning</Button>
			{:else}
				<h1>Get Planning Now!</h1>
				{#if form?.success}
					<p>Check your email for sign in instructions.</p>
				{:else}
					<form
						method="post"
						class="flex flex-col space-y-4"
						use:enhance={() => {
							loading = true;
							return async ({ result }) => {
								await applyAction(result);
								loading = false;
							};
						}}
					>
						<Input name="email">
							<Input.Leading slot="leading" data={email_icon} />
							<Input.Label slot="label">Email</Input.Label>
						</Input>
						<Button htmlType="submit" type="primary" {loading}>Sign In</Button>
					</form>
				{/if}
			{/if}
		</div>
	</Card.Content>
</Card>
