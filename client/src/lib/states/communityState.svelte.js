let communityState = $state([
  { id: 1, name: 'Developers Hub', description: 'A place for developers' },
  { id: 2, name: 'Design Factory', description: 'Creative minds meet here' },
  { id: 3, name: 'Startup Workshop', description: 'Where ideas become reality' }
]);

import { browser } from "$app/environment";
import { get } from "svelte/store";

let communities_key = "communities";

if (browser && localStorage.getItem(communities_key) !== null) {
    communityState = JSON.parse(localStorage.getItem(communities_key));
}

const saveToLocalStorage = () => {
    if (browser) {
        localStorage.setItem(communities_key, JSON.stringify(communityState));
    }
}
const useCommunityState = () => {
    return {
        get communities() {
            return communityState; 
        },
        addCommunity(name, description) {
            const nextId = communityState.length + 1;
            communityState = [...communityState, { id: nextId, name, description }];
            saveToLocalStorage();
        },
        deleteCommunity(id) {
            communityState = communityState.filter(community => community.id !== id);
            saveToLocalStorage();

        },
        getCommunityById(id) {
            return communityState.find(community => community.id === id);
        }
    }
}

export { useCommunityState };