import axios from "axios";
import {getSession, signIn} from "next-auth/react"
import { useEffect,useState } from "react";
// CSR --------> Client Side Render Like React 
function blog() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const secureFunction=async()=>{
    const session = await getSession();
    if(!session)
        signIn()
    else{
        setLoading(false)
        }
    }
    secureFunction()
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  if(loading)
    return <div>Loading ....</div>
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
