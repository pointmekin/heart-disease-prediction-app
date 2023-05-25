<script lang="ts">
	import ArrowIcon from "$lib/icons/ArrowIcon.svelte";
	import type { SvelteComponent } from "svelte";
	import LinkButton from "../buttons/LinkButton.svelte";

	// Props
	export let title: string;
	export let subtitle: string;
	export let useLinkButton: boolean = false;
	export let buttonName: string = "";
	export let buttonIcon: typeof SvelteComponent = ArrowIcon;
	export let href: string = "/";
</script>

<a
	href="/"
	class="card hover:!brightness-125 p-4 relative grid h-96 w-full max-w-[28rem] flex-col items-end overflow-hidden rounded-xl bg-surface-900 bg-clip-border text-gray-200 text-opacity-90"
>
	<img
		src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
		alt=""
		class="absolute inset-0 h-full w-full object-cover object-center opacity-80"
	/>
	<!-- image overlay with gradient from black to transparent -->
	<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
	<div class="relative z-10">
		<h2 class="text-3xl font-bold">{title}</h2>
		<p class="text-xl">{subtitle}</p>
		{#if useLinkButton}
			<LinkButton {buttonName} {buttonIcon} {href} />
		{/if}
	</div>
</a>
