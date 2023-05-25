import { z } from "zod";

export const PersonalIndcatorSchema = z.object({
	name: z.string().min(1, { message: "Name cannot be empty" }),
	surname: z.string().min(1, { message: "Surname cannot be empty" }),
	general_health: z.number().min(0, { message: "This field is required" }).default(-1),
	age: z.number().min(0, { message: "This field is required" }).default(-1),
	has_diff_walk: z.number().min(0, { message: "This field is required" }).default(-1),
	has_stroke: z.number().min(0, { message: "This field is required" }).default(-1),
	has_diabetes: z.number().min(0, { message: "This field is required" }).default(-1),
	physical_health: z
		.number({ required_error: "Invalid value", invalid_type_error: "Invalid value" })
		.min(0, { message: "This field is required" }),
	has_kidney_disease: z.number().min(0, { message: "This field is required" }).default(-1),
	has_skin_cancer: z.number().min(0, { message: "This field is required" }).default(-1),
	has_other_cancer: z.number().min(0, { message: "This field is required" }).default(-1),
	has_diff_dress: z.number().min(0, { message: "This field is required" }).default(-1),
	is_smoker: z.number().min(0, { message: "This field is required" }).default(-1),
	has_diff_alone: z.number().min(0, { message: "This field is required" }).default(-1),
	has_copd: z.number().min(0, { message: "This field is required" }).default(-1)
});

export type PersonalIndcatorSchemaType = z.infer<typeof PersonalIndcatorSchema>;
export type PersonalIndcatorSchemaKey = keyof PersonalIndcatorSchemaType;

export interface PersonalIndicatorsFormField {
	name: PersonalIndcatorSchemaKey;
	label: string;
	description: string;
	type: string;
	placeholder: string;
	options: OptionData[];
}

export interface OptionData {
	value: number | string;
	label: string;
}
