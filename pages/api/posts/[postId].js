import { Posts } from "@/pages/data/posts";

function handler(req, res) {
    if (req.method === "DELETE") {
 
        const { postId } = req.query;
        const index = Posts.findIndex((post) => post.id === +postId);
      
        Posts.splice(index, 1);
        res.status(200).json(Posts);
  }else if (method === "PUT") {
    const { postId } = query;
    const { title, description } = body;

    const postIndex = Posts.findIndex(post => post.id.toString() === postId);
    if (postIndex === -1) {
        res.status(404).json({ error: "Post not found" });
        return;
    }

    if (!title || !description) {
        res.status(400).json({ error: "Title and description are required" });
        return;
    }

    Posts[postIndex] = { id: postId, title, description };
    res.status(200).json(Posts[postIndex]);
}
}

export default handler;
