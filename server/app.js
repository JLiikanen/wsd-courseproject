import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import * as communityController from "./controllers/communityController.js";
import * as postController from "./controllers/postController.js";
import * as commentController from "./controllers/commentController.js";
import postgres from "postgres";

const app = new Hono();
// creating an instance of the database client
const sql = postgres();

app.use("/*", cors());
app.use("/*", logger());

let visits = 0;
app.get("/api/visits", (c) => {
  visits++;
  return c.json({ visits });
});

// retrieving todos from database on requests to /api/todos
app.get("/api/todos", async (c) => {
  const todos = await sql`SELECT * FROM todos`;
  return c.json(todos);
});

app.get("api/communities", async (c) => {
  const communities = await communityController.getAllCommunities();
  return c.json(communities);
});

app.post("/api/communities", communityController.createCommunity);
app.get("/api/communities/:communityId", communityController.getCommunityById);

app.delete("/api/communities/:communityId", communityController.deleteCommunityById);

app.get("/api/communities/:communityId/posts", postController.getAllCommunityPosts);

app.post("/api/communities/:communityId/posts", postController.createPost);

app.delete("/api/communities/:communityId/posts/:postId", postController.deletePostById);

app.get("/api/communities/:communityId/posts/:postId", postController.getPostById);


app.get("/api/communities/:communityId/posts/:postId/comments", commentController.getAllPostComments);

app.post("/api/communities/:communityId/posts/:postId/comments", commentController.createComment);

app.delete("/api/communities/:communityId/posts/:postId/comments/:commentId", commentController.deleteCommentById);


export default app;