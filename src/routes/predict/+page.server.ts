import { PersonalIndcatorSchema } from "$lib/schemas/PersonalIndicatorSchema.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { predictionResult } from "$lib/stores/PredictionStore.js";
import { supabase } from "$lib/db/client.js";

export const load = async () => {
	// Server API:
	const form = await superValidate(PersonalIndcatorSchema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		// Validate the form
		const form = await superValidate(request, PersonalIndcatorSchema);
		if (!form.valid) {
			return fail(400, { form });
		}

		// Call the prediction API
		try {
			const predictionResponse = await fetch("/api/prediction", {
				method: "POST",
				body: JSON.stringify(form.data),
				headers: {
					"Content-Type": "application/json"
				}
			});

			const res = await predictionResponse.json();
			predictionResult.set(res);

			let user = null

			// Find existing user
			const { data: userData, error: findUserErr } = await supabase
				.from("users")
				.select("*")
				.eq("name", form.data.name)
				.eq("surname", form.data.surname);
			if (userData) user = userData[0];
			if (findUserErr) return { prediction: res, form, saveError: findUserErr };

			

			// Create new user
			if (userData && userData.length === 0) {
				const { data: newUser, error: createUserErr } = await supabase.from("users").insert([
					{
						name: form.data.name,
						surname: form.data.surname
					}
				]).select("*");
				if (createUserErr) return { prediction: res, form, saveError: createUserErr };
				if (newUser) user = newUser[0];
			}

			// Save personal indicators
			if (!user) return { prediction: null, form };
			const { error } = await supabase.from("personal_indicators").insert([
				{
					fk_personal_indicators_user: user.id,
					general_health: form.data.general_health,
					age: form.data.age,
					has_diff_walk: form.data.has_diff_walk,
					has_stroke: form.data.has_stroke,
					has_diabetes: form.data.has_diabetes,
					physical_health: form.data.physical_health,
					has_kidney_disease: form.data.has_kidney_disease,
					has_skin_cancer: form.data.has_skin_cancer,
					has_other_cancer: form.data.has_other_cancer,
					has_diff_dress: form.data.has_diff_dress,
					is_smoker: form.data.is_smoker,
					has_diff_alone: form.data.has_diff_alone,
					has_copd: form.data.has_copd
				}
			])
			if (error) return { prediction: res, form, saveError: error };

			// Return the prediction
			return { prediction: res, form };
		} catch (error) {
			return { prediction: null, form, saveError: error };
		}
	}
};
