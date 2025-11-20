import * as commentRepository from "../repositories/commentRepository.js";

async function getAllPostComments(c) {
    const postId = c.req.param("postId");
    if (isNaN(Number(postId))) {
    return c.json({ error: "Invalid post ID" }, 400);
  }
  const comments = await commentRepository.getPostComments(postId);
  return c.json(comments);
}

async function createComment(c) {
    const postId = c.req.param("postId");
    const communityId = c.req.param("communityId");
    const comment  = await c.req.json();
    if (isNaN(Number(postId))) {
    return c.json({ error: "Invalid post ID" }, 400);
  }
  else if (isNaN(Number(communityId))) {
    return c.json({ error: "Invalid community ID" }, 400);
  }
    if (!comment.content) {
        return c.json({ error: "Content is required" }, 400);
    }
    const newComment = await commentRepository.createComment(postId, communityId, comment.content);
    return c.json(newComment, 201);
}

async function deleteCommentById(c) {
    const commentId = c.req.param("commentId");
    if (isNaN(Number(commentId))) {
    return c.json({ error: "Invalid comment ID" }, 400);
  }
    const deletedComment = await commentRepository.deleteCommentById(commentId);
    if (!deletedComment) {
        return c.json({ error: "Comment not found" }, 404);
    }
    return c.json(deletedComment);
}

export { getAllPostComments, createComment, deleteCommentById };