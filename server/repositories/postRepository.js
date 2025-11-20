import postgres from "postgres";

const sql = postgres();

async function getAllCommunityPosts(communityId) {
  return await sql`SELECT * FROM posts WHERE community_id = ${communityId}`;
}

async function createPost(communityId, title, content) {
    const result = await sql`INSERT INTO posts (community_id, title, content) VALUES (${communityId}, ${title}, ${content}) RETURNING *`;
    return result[0];
}

async function deletePostById(postId) {
    const result = await sql`DELETE FROM posts WHERE id = ${postId} RETURNING *`;
    return result[0];
}

async function getPostById(postId) {
    const result = await sql`SELECT * FROM posts WHERE id = ${postId}`;
    return result[0];
}
export { getAllCommunityPosts, createPost, deletePostById, getPostById };