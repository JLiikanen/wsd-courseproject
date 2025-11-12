<script>
	import { useCommunityState } from '$lib/states/communityState.svelte.js';

	const communityStore = useCommunityState();
</script>

{#if communityStore.communities.length === 0}
	<p>No communities available.</p>
{:else if communityStore.communities}
	<ul>
		{#each communityStore.communities as community}
			<li>
				<h2>
					<a href="/communities/{community.id}">
						{community.name}
					</a>
				</h2>
				<p>{community.description}</p>
				<button on:click={() => communityStore.deleteCommunity(community.id)}>
					Remove
				</button>
			</li>
		{/each}
	</ul>
{:else}
	<p>Loading communities...</p>
{/if}
