<script>
	import ContainerCard from "$lib/components/cards/ContainerCard.svelte";
	import FloatingInfoCard from "$lib/components/cards/FloatingInfoCard.svelte";
	import ImageCard from "$lib/components/cards/ImageCard.svelte";
	import StatsCard from "$lib/components/cards/StatsCard.svelte";
	import PageContainer from "$lib/components/containers/PageContainer.svelte";
	import ArrowIcon from "$lib/icons/ArrowIcon.svelte";
</script>

<PageContainer>
	<div class="mt-4 lg:mt-20 w-full flex align-bottom">
		<div class="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-4">
			<h1 class="text-3xl lg:text-6xl font-semibold max-w-[600px]">
				Heart Disease Prediction Using Personal Indicators
			</h1>
			<h3 class="max-w-[240px] lg:text-end opacity-50">
				An application of data analysis and machine learning
			</h3>
		</div>
	</div>
	<ContainerCard>
		<ImageCard
			title="Heart Disease Prediction"
			subtitle="Using Personal Indicators"
			useLinkButton
			buttonName="Start Analysis"
			buttonIcon={ArrowIcon}
			href={"/predict"}
		/>
	</ContainerCard>
	<StatsCard />
	<div class="my-24">
		<FloatingInfoCard
			title="Heart Disease"
			imageSrc="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
		/>
	</div>
</PageContainer>
