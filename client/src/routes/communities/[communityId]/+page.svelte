<script>
    import Community from '$lib/components//communities/Community.svelte';
    import PostList from '$lib/components/posts/PostList.svelte';
    import AddPost from '$lib/components/posts/AddPost.svelte';

    let  {data }  = $props();
    console.log(data);
    
</script>

<Community CommunityId={data.communityId} />

<PostList communityId={data.communityId} />

<AddPost communityId={data.communityId} />