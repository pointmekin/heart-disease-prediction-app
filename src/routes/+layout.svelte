<script context="module" lang="ts">
	type LoadParam = {
		url: string;
	};

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }: LoadParam) => ({ props: { url } });
</script>

<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import "@skeletonlabs/skeleton/themes/theme-crimson.css";
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	// Most of your app wide CSS should be put in this file
	import "../app.postcss";
	import { AppShell, AppBar, LightSwitch, Toast } from "@skeletonlabs/skeleton";

	import PageTransition from "$lib/components/transitions/PageTransition.svelte";
	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar regionPage="relative" slotPageHeader="sticky top-0 z-10">
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase">Skeleton</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/pointmekin?tab=repositories"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
	<Toast />
</AppShell>
