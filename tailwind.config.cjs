import { join } from "path";
import skeleton from "@skeletonlabs/skeleton/tailwind/skeleton.cjs";

/** @type {import('tailwindcss').Config} */
module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: "class",
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		// 2. Append the path for the Skeleton NPM package and files:
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	theme: {
		extend: {}
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		...skeleton()
	]
};
