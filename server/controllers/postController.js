import * as taskRepository from "../repositories/postRepository.js";

async function getAllCommunityPosts(c) {
    const communityId = c.req.param("communityId");
    if (isNaN(Number(communityId))) {
    return c.json({ error: "Invalid community ID" }, 400);
  }
  const posts = await taskRepository.getAllCommunityPosts(communityId);
  return c.json(posts);
}

async function createPost(c) {
    const communityId = c.req.param("communityId");
    const post  = await c.req.json();
    if (isNaN(Number(communityId))) {
    return c.json({ error: "Invalid community ID" }, 400);
  }
    if (!post.title || !post.content) {
        return c.json({ error: "Title and content are required" }, 400);
    }
    const newPost = await taskRepository.createPost(communityId, post.title, post.content);
    return c.json(newPost, 201);
}

async function deletePostById(c) {
    const postId = c.req.param("postId");
    if (isNaN(Number(postId))) {
        return c.json({ error: "Invalid post ID" }, 400);
    }
    const deletedPost = await taskRepository.deletePostById(postId);
    if (!deletedPost) {
        return c.json({ error: "Post not found" }, 404);
    }
    return c.json(deletedPost);
}

async function getPostById(c) {
    const postId = c.req.param("postId");
    if (isNaN(Number(postId))) {
        return c.json({ error: "Invalid post ID" }, 400);
    }
    const post = await taskRepository.getPostById(postId);
    if (!post) {
        return c.json({ error: "Post not found" }, 404);
    }
    return c.json(post);
}
export { getAllCommunityPosts, createPost, deletePostById, getPostById };