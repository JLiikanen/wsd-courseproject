<script>

    let { communityId } = $props();

    import { usePostState } from '$lib/states/postState.svelte.js';

    const postState = usePostState();

    
</script>

{#if postState.posts(communityId).length === 0}
    <p>No posts available.</p>
{:else}
     <h2>Posts</h2>
     <ul>
     {#each postState.posts(parseInt(communityId)) as post}
     <li>
        <a href={`/communities/${communityId}/posts/${post.id}`}><h3>{post.title}</h3></a>
        <p>{post.content}</p>
        <button onclick={() => postState.deletePost(communityId, post.id)}>Remove</button>
    </li>
    {/each}
    </ul>
{/if}
