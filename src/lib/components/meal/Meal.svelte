<script lang="ts">
	import { Button, Card } from 'stwui';
	import no_image from '$assets/no_image.jpeg';

	const bookmark_outline_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>bookmark-outline</title><path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>';
	const bookmark_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>bookmark</title><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>';
	const thumbs_up_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" style="height:24px;width:24px;" viewBox="0 0 24 24"><title>thumb-up</title><path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" /></svg>';
</script>

<a href="/meals?id=1" data-sveltekit-preload-data="hover" class="group/meal">
	<Card
		class="w-full group-hover/meal:shadow-xl transition-all duration-300 cursor-pointer"
		elevation="none"
		bordered={false}
	>
		<Card.Cover slot="cover">
			<img
				src={no_image}
				alt="recipe cover"
				class="object-cover object-center w-full aspect-square h-52 group-hover/meal:scale-[120%] transition-transform duration-300"
			/>
			<div
				class="absolute inset-0 bg-[#242526] opacity-0 group-hover/meal:opacity-25 transition-opacity duration-300"
			/>
			<Card.Cover.Overlay
				class="top-[unset] px-3 py-2 group-hover/meal:bg-opacity-80 transition-opacity"
			>
				<div class="flex flex-col w-full">
					<h3 class="text-content mb-2">Recipe Title</h3>
					<div class="flex flex-row items-center justify-between text-sm font-semibold">
						<div class="flex flex-row gap-1 items-center justify-start">
							<Button type="ghost" shape="circle">
								<Button.Icon slot="icon" data={thumbs_up_icon} />
							</Button>
							256
						</div>

						<Button type="ghost" shape="circle">
							<Button.Icon slot="icon" data={bookmark_outline_icon} />
						</Button>
					</div>
				</div>
			</Card.Cover.Overlay>
		</Card.Cover>
	</Card>
</a>
