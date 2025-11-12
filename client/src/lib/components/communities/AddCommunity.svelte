<script>
    import { useCommunityState } from '$lib/states/communityState.svelte.js';
    const communityStore = useCommunityState();

    let newCommunityName = $state('');
    let newCommunityDescription = $state('');

    const addCommunity = () => {
        if (newCommunityName.trim() !== '' && newCommunityDescription.trim() !== '') {
            communityStore.addCommunity(newCommunityName, newCommunityDescription);
            newCommunityName = '';
            newCommunityDescription = '';
        }
    };

</script>

<label for="Community Name">Community Name:</label>
<input type="text" bind:value={newCommunityName} name="Community Name" placeholder="Community name">
<label for="Community Description">Community Description:</label>
<input type="text" bind:value={newCommunityDescription} name="Community Description" placeholder="Community description">
<button onclick={addCommunity}>Add community</button>