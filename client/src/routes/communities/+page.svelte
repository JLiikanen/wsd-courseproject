<script>
    let communities = [
  { id: 1, name: 'Developers Hub', description: 'A place for developers' },
  { id: 2, name: 'Design Factory', description: 'Creative minds meet here' },
  { id: 3, name: 'Startup Workshop', description: 'Where ideas become reality' }
];

import CommunityList from "$lib/components/communities/CommunityList.svelte";
import AddCommunity from "$lib/components/communities/AddCommunity.svelte";
</script>

<h1>Communities</h1>

<CommunityList />
<AddCommunity />