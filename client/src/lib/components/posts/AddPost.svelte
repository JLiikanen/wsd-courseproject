<script>
    import { usePostState } from '$lib/states/postState.svelte.js';
    const postState = usePostState();

    let { communityId } = $props();
    let title = $state("");
    let content = $state("");

    const handleSubmit = () => {
        postState.addPost(parseInt(communityId), title, content);
        title = "";
        content = "";
    };
</script>


<input type="text" bind:value={title} placeholder="Post Title" required />
<input bind:value={content} placeholder="Post Content" required/>
<button type="submit" onclick={handleSubmit}>Add Post</button>