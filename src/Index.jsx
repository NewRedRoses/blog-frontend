import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/index.css";
import { format } from "date-fns";
function Index({ backendUrl }) {
  const [posts, setPosts] = useState([]);

  const postsUrl = `${backendUrl}posts`;

  useEffect(() => {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [postsUrl]);

  return (
    <div className="content">
      <h1>
        <i>lutheria</i>
      </h1>
      <ul className="posts-list-container">
        {posts.map((post) => (
          <li key={post.id} className="posts-list-item">
            <span className="posts-list-item-date">
              {format(post.date_published, "MM-dd-yyyy")}
            </span>
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
