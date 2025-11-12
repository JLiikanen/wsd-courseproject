<script>
    import Community from '$lib/components//communities/Community.svelte';

    let  {data }  = $props();
    console.log(data);
</script>

<Community CommunityId={data.communityId} />