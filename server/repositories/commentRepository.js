import postgres from "postgres";


const sql = postgres();


async function getPostComments(postId) {
  return await sql`SELECT * FROM posts  WHERE parent_post_id = ${postId}`;
}

async function createComment(postId, communityId, content) {
  const result = await sql`INSERT INTO posts (parent_post_id, community_id, content) VALUES (${postId}, ${communityId}, ${content}) RETURNING *`;
  return result[0];
}
async function deleteCommentById(commentId) {
  const result = await sql`DELETE FROM posts WHERE id = ${commentId} RETURNING *`;
  return result[0];
}
export { getPostComments, createComment, deleteCommentById };