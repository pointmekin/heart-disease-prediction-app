import { heartDiseasePrediction } from '../../../lib/utils/heartDiseasePredictionModel';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const {
		general_health,
		age,
		has_diff_walk,
		has_stroke,
		has_diabetes,
		physical_health,
		has_kidney_disease,
		has_skin_cancer,
		has_other_cancer,
		has_diff_dress,
		is_smoker,
		has_diff_alone,
		has_copd
	} = await request.json();
  const input = [
    general_health,
    age,
		has_diff_walk,
		has_stroke,
		has_diabetes,
		physical_health,
		has_kidney_disease,
		has_skin_cancer,
		has_other_cancer,
		has_diff_dress,
		is_smoker,
		has_diff_alone,
		has_copd
  ]
	return json(heartDiseasePrediction(input));
};
