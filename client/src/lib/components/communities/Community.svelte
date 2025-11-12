<script>
let { CommunityId } = $props();

import { useCommunityState } from '$lib/states/communityState.svelte.js';
const communityStore = useCommunityState();

let community = communityStore.getCommunityById(parseInt(CommunityId));

</script>

<p>
  {#if community}
    {community.name},  {community.description}
  {:else if community === undefined}
    Loading...
{/if}
</p>