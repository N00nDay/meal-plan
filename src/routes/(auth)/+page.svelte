<script lang="ts">
	import { Button } from 'stwui';
	import logo from '$assets/180.png';
</script>

<div class="flex flex-row items-center justify-center gap-2">
	<img src={logo} alt="logo" class="h-12" />
	<h1
		class="text-content text-3xl bg-gradient-to-r from-primary to-content text-transparent bg-clip-text"
	>
		You Got To Eat!
	</h1>
</div>

<p class="text-secondary-content text-center">
	Cooking and shopping do not have to be overwhelming. Start planning and cooking with ease today!
</p>
<Button type="primary" class="w-full green-gradient" size="xl" href="/sign-up">Get Started</Button>
<a class="link block w-full text-center" href="/sign-in">Already have an account?</a>
