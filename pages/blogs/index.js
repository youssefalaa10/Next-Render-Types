import axios from "axios";

import { useEffect,useState } from "react";
// CSR ----------------------
function blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-3/4 text-black">
      <h1 className="text-2xl font-bold mb-2 text-white">Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="border-2 p-2 bg-white rounded-md text-black mt-2">
          <h2>
            {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default blog;
