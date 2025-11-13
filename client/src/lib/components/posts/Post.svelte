<script>

    let { communityId, postId } = $props(); 

    import { usePostState } from '$lib/states/postState.svelte.js';
    import { get } from 'svelte/store';
    const postState = usePostState();
    let post = postState.getPostById(parseInt(communityId), parseInt(postId))
</script>


{#if post}
    <h2>{post.title}</h2>
    <p>{post.content}</p>
{:else}
    <p>Loading...</p>
{/if}