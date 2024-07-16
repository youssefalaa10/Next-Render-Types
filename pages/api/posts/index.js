import { Posts } from "@/pages/data/posts";
import { v4 as uuidv4 } from "uuid";

function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(Posts);
  } else if (req.method === "POST") {
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(400).json({ error: "Title and description are required" });
      return;
    }

    const newPost = {
      id: uuidv4(),
      title,
      description,
    };

    Posts.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default handler;
