<script lang="ts">
	import { HeartDiseaseInfo } from "$lib/data/HeartDiseaseInfo";

	export let imageSrc: string;
	export let title: string;
</script>

<div class="container mx-auto xl:px-32 lg:text-left">
	<div class="grid lg:grid-cols-2 items-center">
		<div class="mb-12 lg:mb-0">
			<div
				class="card rounded-lg shadow-lg p-4 lg:py-6 xl:py-6 md:px-12 lg:-mr-14 bg-opacity-40"
				style="backdrop-filter: blur(30px)"
			>
				<h3 class="text-2xl font-bold my-6">
					{title}
					<span class="text-lg text-primary-600 font-bold mb-12 lg:mb-10 xl:mb-12">Statistics</span>
				</h3>

				<!-- foreach -->
				{#each HeartDiseaseInfo as item}
					<p class="font-bold mb-4">{item.title}</p>
					<ul class="text-gra-500 mb-6 list-disc list-inside">
						{#each item.list as listItem}
							<li>{listItem}</li>
						{/each}
					</ul>
				{/each}
			</div>
		</div>
		<div>
			<img src={imageSrc} class="w-full rounded-lg shadow-lg h-[600px]" alt={imageSrc} />
		</div>
	</div>
</div>
