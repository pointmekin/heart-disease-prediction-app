<script lang="ts">
	import PageContainer from "$lib/components/containers/PageContainer.svelte";
	import type { PageData } from "./$types";
	import { selectedPage } from "$lib/stores/PredictionStore";
	import PersonalIndicatorForm from "$lib/components/forms/PersonalIndicatorForm.svelte";
	import PageTransition from "$lib/components/transitions/PageTransition.svelte";
	import { predictionResult } from "$lib/stores/PredictionStore.js";

	export let data: PageData;

	const scrollToTop = () => {
		setTimeout(() => {
			const a = document.querySelector("#page-title");
			a?.scrollIntoView({
				behavior: "smooth"
			});
		}, 1000);
		setTimeout(() => {
			selectedPage.set("RESULTS");
		}, 2000);
	};

	const toPercentage = (input: number) => {
		return `${(input * 100).toFixed(2)}%`;
	}
</script>

<PageContainer>
	<h1 class="text-4xl font-semibold mt-12" id="page-title">Heart Disease Personal Indicators</h1>
	<section class="w-full lg:w-[560px]">
		<ul class="flex flex-col gap-4">
			<li>Heart disease risk factors are complex and interrelated</li>
			<li>
				Risk assessment relies on clinical guidelines based on population studies and statistical
				models that use a limited number of variables
			</li>
			<li>
				Machine learning can potentially provide personalized risk predictions for individuals prior
				to conducting a full check-up with a physician
			</li>
		</ul>
	</section>

	<hr class="!border-t-2 my-4 !border-primary-300 opacity-10" />
	<div class="flex gap-4">
		<button
			class={`btn mt-3 ${
				$selectedPage === "PERSONAL_INDICATORS"
					? "variant-filled-primary"
					: "variant-ringed-primary"
			}`}
			on:click={() => {
				selectedPage.set("PERSONAL_INDICATORS");
			}}>Personal Indicators</button
		>
		<button
			class={`btn mt-3 ${
				$selectedPage === "RESULTS" ? "variant-filled-primary" : "variant-ringed-primary"
			}`}
			on:click={() => {
				selectedPage.set("RESULTS");
			}}
			disabled={!$predictionResult[0]}
			>Results</button
		>
	</div>

	{#if $selectedPage === "PERSONAL_INDICATORS"}
		<PageTransition pathname={$selectedPage}>
			<PersonalIndicatorForm pageDataForm={data.form} on:submitPersonalIndicators={scrollToTop} />
		</PageTransition>
	{:else if $selectedPage === "RESULTS"}
		<PageTransition pathname={$selectedPage}>
			<h1 class="text-4xl font-semibold">Results</h1>
			<p class="text-xl">Heart disease probability: {toPercentage($predictionResult[1])}</p>
		</PageTransition>
	{/if}
</PageContainer>
