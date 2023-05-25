<script lang="ts">
	import { PersonalIndicatorsFormFields } from "$lib/data/forms/PersonalIndicatorsForm";
	import { PersonalIndcatorSchema } from "$lib/schemas/PersonalIndicatorSchema";
	import { superForm } from "sveltekit-superforms/client";
	import ContainerCard from "../cards/ContainerCard.svelte";
	import { createEventDispatcher } from "svelte";
	import { predictionResult } from "$lib/stores/PredictionStore.js";
	import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";

	export let pageDataForm: any;

	type FormResult = { data: any };
	// Client API:
	const { form, errors, constraints, enhance } = superForm(pageDataForm, {
		validators: PersonalIndcatorSchema,
		validationMethod: "oninput",
		defaultValidator: "keep",
		onResult: ({ result }) => {
			if (result.type === "failure") {
				const t: ToastSettings = {
					message: "Please fill all the fields",
					background: "variant-filled-warning"
				};
				toastStore.trigger(t);
				return;
			}
			const t: ToastSettings = {
				message: "Personal indicators submitted successfully"
			};
			toastStore.trigger(t);
			dispatch("submitPersonalIndicators");
			predictionResult.set((result as FormResult).data.prediction);
			if ((result as FormResult).data.saveError) {
				const t: ToastSettings = {
					message: "Unable to save personal indicators",
					background: "variant-filled-error"
				};
				toastStore.trigger(t);
			}
		}
	});

	const dispatch = createEventDispatcher();

	$: personalIndicatorsFormFields = PersonalIndicatorsFormFields();
</script>

<ContainerCard>
	<form method="POST" id="personal-indicator-form" use:enhance>
		{#each personalIndicatorsFormFields as field}
			<label class="font-semibold text-md capitalize" for={field.name}>{field.name}</label>
			<p class="pb-3 opacity-60">{field.description}</p>

			<!-- Text Input -->
			{#if field.type === "text"}
				<input
					class="input h-12 px-4"
					type="text"
					name={field.name}
					data-invalid={$errors[field.name]}
					placeholder={field.placeholder}
					bind:value={$form[field.name]}
				/>
				<!-- Text Input -->
			{:else if field.type === "number"}
				<input
					class="input h-12 px-4"
					type="number"
					name={field.name}
					data-invalid={$errors[field.name]}
					placeholder={field.placeholder}
					bind:value={$form[field.name]}
				/>
			{:else if field.type === "select"}
				<select
					class={`decorated select ${
						field.options.length > 5 ? "overflow-auto" : "overflow-hidden"
					} px-4 pt-2 pb-3`}
					size={Math.min(field.options.length, 5)}
					name={field.name}
					data-invalid={$errors[field.name]}
					bind:value={$form[field.name]}
				>
					{#each field.options as option}
						<option class="z-10 !hover:bg-primary-100" value={option.value}>{option.label}</option>
					{/each}
				</select>
			{/if}

			<!-- Error Message -->
			<div class=" text-red-500 h-8">
				{#if $errors[field.name]}
					<span>{$errors[field.name]}</span>
				{/if}
			</div>
		{/each}
		<div>
			<button type="submit" class="btn variant-filled-primary mt-4" id="submit-button"
				>Submit</button
			>
		</div>
	</form>
</ContainerCard>

<style>
	select.decorated option:hover {
		box-shadow: 0 0 10px 100px rgba(0, 0, 0, 0.1) inset;
	}
</style>
