import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/index.css";
function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="content">
      <h1>Welcome to Mark's blog</h1>
      <ul className="posts-list-container">
        {posts.map((post) => (
          <li key={post.id} className="posts-list-item">
            <span className="posts-list-item-date">2024-12-3</span>
            <Link to={"/posts/" + post.id} className="posts-list-item-link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
