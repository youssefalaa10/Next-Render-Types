import React, { memo, useState, useEffect } from "react";
import axios from "axios";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", description: "" });
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPost({ ...editPost, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (editPost) {
        const res = await axios.put(`/api/posts/${editPost.id}`, editPost, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPosts(
          posts.map((post) => (post.id === res.data.id ? res.data : post))
        );
        setEditPost(null);
      } else {
        const res = await axios.post("/api/posts", newPost, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPosts([...posts, res.data]);
      }
      setNewPost({ title: "", description: "" });
    } catch (error) {
      console.error("Error posting new post:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setNewPost({ title: "", description: "" });
  };

  return (
    <div className="p-4">
      <button
        className="block p-4 mb-4 border border-gray-300 rounded hover:bg-blue-700 text-black dark:text-white"
        onClick={fetchData}
      >
        Get All Posts
      </button>
      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-4 p-4 border border-gray-200 rounded shadow-sm flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 border border-gray-300 rounded hover:bg-yellow-700 text-black dark:text-white"
              onClick={() => handleEdit(post)}
            >
              Edit
            </button>
            <button
              className="p-2 border border-gray-300 rounded hover:bg-red-700 text-white dark:text-white"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <input
          type="text"
          name="title"
          value={editPost ? editPost.title : newPost.title}
          onChange={editPost ? handleEditChange : handleInputChange}
          placeholder="Title"
          className="block w-full p-2 mb-2 border border-gray-300 rounded text-black placeholder:text-black"
        />
        <input
          type="text"
          name="description"
          value={editPost ? editPost.description : newPost.description}
          onChange={editPost ? handleEditChange : handleInputChange}
          placeholder="Description"
          className="block w-full p-2 mb-2 border border-gray-300 rounded text-black placeholder:text-black"
        />
        <button
          className="block w-full p-4 mt-2 border border-gray-300 rounded hover:bg-green-700 text-white dark:text-white"
          onClick={handleSubmit}
        >
          {editPost ? "Update Post" : "Add Post"}
        </button>
      </div>
    </div>
  );
}

export default memo(PostsPage);
