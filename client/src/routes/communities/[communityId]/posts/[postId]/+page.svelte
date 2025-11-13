<script>
    let { data } = $props();
    console.log(data)
    import Post from '$lib/components/posts/Post.svelte';
</script>


<Post communityId={data.communityId} postId={data.postId} />
