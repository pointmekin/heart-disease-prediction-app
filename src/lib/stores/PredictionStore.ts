import { writable, type Writable } from "svelte/store";

type SelectedPage = "PERSONAL_INDICATORS" | "RESULTS";

export const selectedPage: Writable<SelectedPage> = writable("PERSONAL_INDICATORS");

export const predictionResult: Writable<number[]> = writable([]);
