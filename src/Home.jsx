import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/index.css";
import { format } from "date-fns";
import Spinner from "./Components/Spinner.jsx";
import { Helmet } from "react-helmet";
export default function Home({ backendUrl }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const postsUrl = `${backendUrl}posts`;

  useEffect(() => {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .then(() => setLoading(false));
  }, [postsUrl]);
  return (
    <>
      <div className="content">
        <Helmet>
          <title>Posts - Lutheria</title>
        </Helmet>
        <h1>
          <i>lutheria</i>
        </h1>

        {isLoading ? (
          <Spinner
            spinnerColor={"#4f5d75"}
            animationSpeed={0.9}
            msg={"Loading Posts..."}
          />
        ) : (
          <>
            <ul className="posts-list-container">
              {posts.map((post) => (
                <li key={post.id} className="posts-list-item">
                  <span className="posts-list-item-date">
                    {format(post.date_published, "MM-dd-yyyy")}
                  </span>
                  <Link
                    to={"/posts/" + post.id}
                    className="posts-list-item-link"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
