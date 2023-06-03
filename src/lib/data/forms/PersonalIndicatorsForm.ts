import type { PersonalIndicatorsFormField } from "$lib/schemas/PersonalIndicatorSchema";
import type { TypeOf } from "zod";

export const PersonalIndicatorsFormFields = (): PersonalIndicatorsFormField[] => {
	return [
		{
			name: "name",
			label: "Name",
			description: "Please enter your name",
			type: "text",
			placeholder: "Name",
			options: []
		},
		{
			name: "surname",
			label: "Surname",
			description: "Please enter your surname",
			type: "text",
			placeholder: "Surname",
			options: []
		},
		{
			name: "general_health",
			label: "General Health",
			description: "In general, would you say your health is:",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Excellent" },
				{ value: 2, label: "Very good" },
				{ value: 3, label: "Good" },
				{ value: 4, label: "Fair" },
				{ value: 5, label: "Poor" }
			]
		},
		{
			name: "age",
			label: "Age",
			description: "What is your age?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 0, label: "18 to 24" },
				{ value: 1, label: "25 to 29" },
				{ value: 2, label: "30 to 34" },
				{ value: 3, label: "35 to 39" },
				{ value: 4, label: "40 to 44" },
				{ value: 5, label: "45 to 49" },
				{ value: 6, label: "50 to 54" },
				{ value: 7, label: "55 to 59" },
				{ value: 8, label: "60 to 64" },
				{ value: 9, label: "65 to 69" },
				{ value: 10, label: "70 to 74" },
				{ value: 11, label: "75 to 79" },
				{ value: 12, label: "80 and over" }
			]
		},
		{
			name: "has_diff_walk",
			label: "Difficulty Walking",
			description: "Do you have serious difficulty walking or climbing stairs?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "has_stroke",
			label: "Stroke",
			description: "Have you ever had a stroke?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "has_diabetes",
			label: "Diabetes",
			description: "Have you ever been told by a doctor that you have diabetes?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "physical_health",
			label: "Physical Health",
			description:
				"Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good?",
			type: "number",
			placeholder: "0",
			options: []
		},
		{
			name: "has_kidney_disease",
			label: "Kidney Disease",
			description: "Have you ever been told by a doctor that you have kidney disease?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "has_skin_cancer",
			label: "Skin Cancer",
			description: "Have you ever been told by a doctor that you have skin cancer?",

			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "has_other_cancer",
			label: "Other Cancer",
			description: "Have you ever been told by a doctor that you have any other types of cancer?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "has_diff_dress",
			label: "Difficulty Dressing",
			description: "Do you have difficulty dressing or bathing?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "is_smoker",
			label: "Smoker",
			description: "Do you smoke cigarettes, cigars, or a pipe?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "has_diff_alone",
			label: "Difficulty Alone",
			description:
				"Because of a physical, mental, or emotional condition, do you have difficulty doing errands alone such as visiting a doctor’s office or shopping?",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		},
		{
			name: "has_copd",
			label: "COPD",
			description:
				"Have you ever been told by a doctor that you have COPD, emphysema, or chronic bronchitis",
			type: "select",
			placeholder: "-1",
			options: [
				{ value: 1, label: "Yes" },
				{ value: 0, label: "No" }
			]
		}
	];
};
