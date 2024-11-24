import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Mark's blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={"/posts/" + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
