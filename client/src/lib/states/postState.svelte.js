import { browser } from "$app/environment";
let postState = $state({
  1: [
    { id: 1, title: "OOP with JavaScript" },
  ],
  2: [
    { id: 1, title: "You all know exactly who I am", content: "Say my name" },
    { id: 2, title: "He told me you .... him", content: "No, I am your father" },
    { id: 3, title: "Do not cite the deep magic to me, Witch", content: "I was there when it was written." },
  ],
});

let storage_key = "posts";

if (browser && localStorage.getItem("posts") !== null) {
    postState = JSON.parse(localStorage.getItem("posts"));  
}

const saveToLocalStorage = (updatedState) => {
    if (browser) {
        localStorage.setItem("posts", JSON.stringify(updatedState));
    }
}
const usePostState = () => {
    return {
        posts(communityId) {
            return postState[communityId] || [];
        },
        addPost(communityId, title, content) {
            const communityPosts = postState[communityId] || [];
            const nextId = communityPosts.length + 1;
            const newPost = { id: nextId, title, content };
            postState = {
                ...postState,
                [communityId]: [...communityPosts, newPost]
            };
            saveToLocalStorage(postState);
        },
        deletePost(communityId, postId) {
            const communityPosts = postState[communityId] || [];
            postState = {
                ...postState,
                [communityId]: communityPosts.filter(post => post.id !== postId)
            };
            saveToLocalStorage(postState);
        },
        getPostById(communityId, postId) {
            const communityPosts = postState[communityId] || [];
            return communityPosts.find(post => post.id === postId);
        }
    }
}

export { usePostState } ;