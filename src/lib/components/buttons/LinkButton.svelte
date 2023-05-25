<script lang="ts">
	import ArrowIcon from "$lib/icons/ArrowIcon.svelte";
	import type { SkeletonTheme, SkeletonVariant } from "$lib/interfaces/Skeleton";
	import type { SvelteComponent } from "svelte";

	export let buttonName: string = "";
	export let buttonIcon: typeof SvelteComponent = ArrowIcon;
	export let theme: string = "variant-ghost-primary";
	export let href: string = "/";
	export let target: string = "";
</script>

<a
	class={`btn btn-md ${theme} mt-4`}
	{href}
	{...target === "blank" ? { target, rel: "noreferrer" } : {}}
>
	{buttonName}
	<!-- span that contains link icon svg -->
	<span class="ml-2">
		<svelte:component this={buttonIcon} />
	</span></a
>
