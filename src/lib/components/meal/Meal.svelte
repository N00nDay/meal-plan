<script lang="ts">
	import { Rating, Button, Card } from 'stwui';

	const image =
		'https://tdztoqzzutlsasyvbrah.supabase.co/storage/v1/object/public/public/No_Image_Available.jpg';
	const plus_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>';

	function handleClick() {
		console.log('Meal Click');
	}
</script>

<Card
	class="w-full hover:shadow-2xl transition-shadow cursor-pointer"
	bordered={true}
	on:click={handleClick}
>
	<Card.Cover slot="cover" class="ml-0 mr-0 mt-0">
		<img
			src={image}
			alt="recipe cover"
			class="object-cover object-center w-full aspect-square h-52"
		/>
	</Card.Cover>
	<Card.Content slot="content">
		<h4>Recipe Title</h4>
		<p class="text-secondary-content text-xs">Cooking Time: 0 minutes</p>
		<div class="flex flex-row items-center justify-evenly mb-4">
			<Rating name="recipe-name" value={0} size="sm" />
			<div class="text-xs text-right w-full">0 Ratings</div>
		</div>
		<Button shape="pill" class="bg-transparent border border-black w-full">
			<Button.Leading slot="leading" data={plus_icon} />
			Add to Planner
		</Button>
	</Card.Content>
</Card>
